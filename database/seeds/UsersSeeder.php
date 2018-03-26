<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {

    $entitat = factory(User::class)->create([
      'name' => 'Entity',
      'email' => 'user1@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD')),
      'role' => 'entity'
    ]);

    $voluntari = factory(User::class)->create([
      'name' => 'Volunteer',
      'email' => 'user2@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD')),
      'role' => 'volunteer'
    ]);

  }
}
