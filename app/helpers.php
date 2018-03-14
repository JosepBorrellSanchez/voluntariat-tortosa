<?php

use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

if (!function_exists('initialize_permissions')) {
  function initialize_permissions()
  {
    Permission::firstOrCreate(['name' => 'list-activitats']);
//    Permission::firstOrCreate(['name' => 'show-task']);
//    Permission::firstOrCreate(['name' => 'store-task']);
//    Permission::firstOrCreate(['name' => 'update-task']);
//    Permission::firstOrCreate(['name' => 'destroy-task']);

    $role = Role::firstOrCreate(['name' => 'admin']);

    $role->givePermissionTo('list-activitats');
//    $role->givePermissionTo('show-task');
//    $role->givePermissionTo('store-task');
//    $role->givePermissionTo('update-task');
//    $role->givePermissionTo('destroy-task');
  }
}
if (!function_exists('create_user')) {
  function create_user()
  {
    factory(User::class)->create([
      'name'     => env('MANAGER_USER_NAME', 'Manager'),
      'email'    => env('MANAGER_USER_EMAIL', 'gerardrey@iesebre.com'),
      'password' => bcrypt(env('MANAGER_USER_PWD')),
    ]);
  }
}
if (!function_exists('first_user_as_manager')) {
  function first_user_as_manager()
  {
    User::all()->first()->assignRole('admin');
  }
}