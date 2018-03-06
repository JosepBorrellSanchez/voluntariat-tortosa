<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;
use App\Repositories\UserRepository;

class LoginProxy
{
  const REFRESH_TOKEN = 'refreshToken';
  private $apiConsumer;
  private $auth;
  private $cookie;
  private $db;
  private $request;
  private $userRepository;

  public function __construct(Application $app, UserRepository $userRepository)
  {
    $this->userRepository = $userRepository;

    $this->apiConsumer = $app->make('apiconsumer');
    $this->auth = $app->make('auth');
    $this->cookie = $app->make('db');
    $this->db = $app->make('db');
    $this->request = $app->make('request');
  }

  public function attemptLogin($email, $password) {
    $user = $this->userRepository->getWhere('email', $email)->first();

    if (!is_null($user)) {
      return $this->proxy('password', [
        'username' => $email,
        'password' => $password
      ]);
    }

    throw new InvalidCredentialsException();
  }

  public function attemptRefresh() {
    $refreshToken = $this->request->cookie(self::REFRESH_TOKEN);

    return $this->proxy('refresh_token', [
      'refresh_token' => $refreshToken
    ]);
  }

  public function proxy($granType, array $data = []) {
    $data = array_merge($data, [
      'client_id' => env('PASSWORD_CLIENT_ID'),
      'client_secret' => env('PASSWORD_CLIENT_SECRET'),
      'grant_type' => $granType
    ]);

    $response = $this->apiConsumer->post('/oauth/token', $data);

    if (!$response->isSuccessful()) {
      throw new InvalidCredentialsException();
    }

    $data = json_decode($response->getContent());

    $this->cookie->queue(
      self::REFRESH_TOKEN,
      $data->refresh_token,
      864000,
      null,
      null,
      false,
      true
    );

    return [
      'access_token' => $data->access_token,
      'expires_in' => $data->expires_in
    ];
  }

  public function logout() {
    $accessToken = $this->auth->user()->token();

    $refreshToken = $this->db
      ->table('oauth_refresh_tokens')
      ->where('access_token_id')
      ->update([
        'revoked' => true
      ]);

    $accessToken->revoke();

    $this->cookie->queue($this->cookie->forget(self::REFRESH_TOKEN));
  }
}
