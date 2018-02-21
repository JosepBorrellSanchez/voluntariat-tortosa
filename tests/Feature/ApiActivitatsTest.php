<?php

namespace Tests\Feature;

use App\Activitat;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiActivitatsTest extends TestCase
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
    public function can_see_activitats()
    {
      $activitats = factory(Activitat::class, 5)->create();

      $response = $this->get('api/activitats');

      $response->assertSuccessful();
      foreach ($activitats as $activitat) {
        $this->assertDatabaseHas('activitats', [
          'id' => $activitat->id,
          'nom' => $activitat->nom
        ]);
      }
    }

    /** @test */
    public function can_see_an_activitat() {
      $activitat = factory(Activitat::class)->create();

      $response = $this->get('api/activitats/'.$activitat->id);

      $response->assertSuccessful();
      $response->assertJson($activitat->toArray());
      $this->assertDatabaseHas('activitats', $activitat->toArray());

    }

    /** @test */
    public function can_edit_task()
    {
      $activitat = factory(Activitat::class)->create();
      $newActivitat = factory(Activitat::class)->make();

      $response = $this->put('api/activitats/'.$activitat->id, $newActivitat->toArray());

      $response->assertSuccessful();
      $this->assertDatabaseHas('activitats', $newActivitat->toArray());
      $this->assertDatabaseMissing('activitats', $activitat->toArray());

    }

    /** @test */
    public function can_delete_activitat()
    {
      $activitat = factory(Activitat::class)->create();

      $this->assertDatabaseHas('activitats', $activitat->toArray());

      $response = $this->delete('api/activitats/'.$activitat->id);

      $response->assertSuccessful();
      $response->assertJson($activitat->toArray());
      $this->assertDatabaseMissing('activitats', $activitat->toArray());
    }
}
