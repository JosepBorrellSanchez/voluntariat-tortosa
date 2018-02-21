<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiAuthTest extends TestCase
{
    use RefreshDatabase;

    public function setUp()
    {
      parent::setUp();
      $this->withoutExceptionHandling();
    }

    /**
     * A basic test example.
     * @test
     * @return void
     */
    public function user_can_authenticate()
    {
      $user = factory(User::class)->create();
      $this->actingAs($user);

      $response = $this->get('user/active');

      $response->assertSuccessful();
    }
}
