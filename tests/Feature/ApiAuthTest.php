<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Support\Facades\Session;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiAuthTest extends TestCase
{
    use RefreshDatabase;

    public function setUp()
    {
      parent::setUp();
      $this->withoutExceptionHandling();
    }

    /** @test */
    public function user_can_authenticate()
    {
      $user = factory(User::class)->create();
      $this->actingAs($user, 'api');

      $response = $this->get('api/user/active');

      $response->assertSuccessful();
      $response->assertJsonFragment($user->toArray());
    }

    /** @test */
    public function user_recives_a_token() {
      $user = User::create([
        'name' => 'Gerard',
        'email' => 'gerardrey@iesebre.com',
        'password' => bcrypt('123456'),
        'api_token' => str_random(60)
      ]);

      $response = $this->post('/login', [
        'email' => $user->email,
        'password' => $user->password,
      ]);

      $response->assertSuccessful();

    }
}
