<?php

use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

if (!function_exists('initialize_permissions')) {
  function initialize_permissions()
  {
    Permission::firstOrCreate(['name' => 'list-activitats']);
    Permission::firstOrCreate(['name' => 'list-entities']);
    Permission::firstOrCreate(['name' => 'show-entities']);
    Permission::firstOrCreate(['name' => 'delete-entity']);
    Permission::firstOrCreate(['name' => 'list-volunteers']);
    Permission::firstOrCreate(['name' => 'show-volunteer']);
    Permission::firstOrCreate(['name' => 'delete-volunteer']);
    Permission::firstOrCreate(['name' => 'list-admins']);
    Permission::firstOrCreate(['name' => 'show-admin']);
    Permission::firstOrCreate(['name' => 'delete-admin']);

    $roleSuper = Role::firstOrCreate(['name' => 'superAdmin']);
    $role = Role::firstOrCreate(['name' => 'admin']);
    $roleEntitat = Role::firstOrCreate(['name' => 'entity']);
    $roleVoluntari = Role::firstOrCreate(['name' => 'volunteer']);

    $role->givePermissionTo(
      'list-activitats',
      'list-entities',
      'show-entities',
      'delete-entity',
      'list-volunteers',
      'show-volunteer',
      'delete-volunteer',
      'list-admins');
    $roleSuper->givePermissionTo(
      'list-activitats',
      'list-entities',
      'show-entities',
      'delete-entity',
      'list-volunteers',
      'show-volunteer',
      'delete-volunteer',
      'list-admins',
      'delete-admin',
      'show-admin');
    $roleEntitat->givePermissionTo('list-activitats');
    $roleVoluntari->givePermissionTo('list-activitats');
  }
}
if (!function_exists('create_user')) {
  function create_user()
  {
    factory(User::class)->create([
      'name'     => env('MANAGER_USER_NAME', 'Manager'),
      'email'    => env('MANAGER_USER_EMAIL', 'gerardrey@iesebre.com'),
      'password' => bcrypt(env('MANAGER_USER_PWD')),
      'role' => 'superAdmin'
    ]);
  }
}
if (!function_exists('first_user_as_manager')) {
  function first_user_as_manager()
  {
//    User::first()->syncRoles('admin');
  }
}