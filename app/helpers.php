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

    $role = Role::firstOrCreate(['name' => 'admin']);
    $roleEntitat = Role::firstOrCreate(['name' => 'entity']);
    $roleVoluntari = Role::firstOrCreate(['name' => 'volunteer']);

    $role->givePermissionTo('list-activitats');
    $role->givePermissionTo('list-entities');
    $role->givePermissionTo('show-entities');
    $role->givePermissionTo('delete-entity');
    $role->givePermissionTo('list-volunteers');
    $role->givePermissionTo('show-volunteer');
    $role->givePermissionTo('delete-volunteer');
    $role->givePermissionTo('list-admins');
    $role->givePermissionTo('show-admin');
    $role->givePermissionTo('delete-admin');
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
    ]);
  }
}
if (!function_exists('first_user_as_manager')) {
  function first_user_as_manager()
  {
    User::all()->first()->assignRole('admin');
  }
}