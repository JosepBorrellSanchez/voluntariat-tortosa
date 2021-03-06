<?php

namespace App\Repositories;

use App\User;
use Illuminate\Config\Repository;

class UserRepository extends Repository
{
  public function getModel()
  {
    return new User();
  }
  public function create(array $data)
  {
    $user = $this->getModel();
    $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
    $user->fill($data);
    $user->save();
    return $user;
  }
  public function update(User $user, array $data)
  {
    $user->fill($data);
    $user->save();
    return $user;
  }
}