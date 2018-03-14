<?php

namespace Tests\Feature;

use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserHasPermissions extends TestCase
{
    use RefreshDatabase;

    public function setUp() {
      parent::setUp();
      $this->withoutExceptionHandling();
    }

    public function getEntitat() {
      Permission::firstOrCreate(['name' => 'list-activitats']);
      $role = Role::firstOrCreate(['name' => 'entitat']);
      $role->givePermissionTo('list-activitats');
      $user = factory(User::class)->create();
      $user->assignRole('entitat');

      return $user;
    }

    public function getVoluntari() {
      Permission::firstOrCreate();
    }

    /** @test */
    public function user_with_permission_can_list_tasks()
    {
      $user = $this->getEntitat();
      $this->actingAs($user, 'api');

      $response = $this->json('GET', 'api/activitats/user/' . $user->id);

      $response->assertSuccessful();
    }

    /** @test */
    public function user_without_permission_cant_list_activitats() {

    }
}
