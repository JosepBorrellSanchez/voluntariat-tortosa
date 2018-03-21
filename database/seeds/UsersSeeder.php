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
      'name' => 'User 1',
      'email' => 'user1@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD'))
    ]);

    $voluntari = factory(User::class)->create([
      'name' => 'User 2',
      'email' => 'user2@gmail.com',
      'password' => bcrypt(env('MANAGER_USER_PWD'))
    ]);

    $entitat->assignRole('entity');
    $voluntari->assignRole('volunteer');

  }
}
