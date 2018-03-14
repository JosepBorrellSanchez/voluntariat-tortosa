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
//    factory(User::class)->create([
//      'name' => 'Gerard Rey',
//      'email' => 'gerardrey@iesebre.com',
//      'password' => bcrypt(env('USER_PWD'))
//    ]);

    factory(User::class)->create([
      'name' => 'User 1',
      'email' => 'user1@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD'))
    ]);

    factory(User::class)->create([
      'name' => 'User 2',
      'email' => 'user2@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD'))
    ]);

  }
}
