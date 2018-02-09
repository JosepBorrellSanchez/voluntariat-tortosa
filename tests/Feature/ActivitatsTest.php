<?php

namespace Tests\Feature;

use App\Activitat;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ActivitatsTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function can_see_activity()
    {
        $activity = factory(Activitat::class)->create();

        $response = $this->get('/api/activitats/'.$activity->id);

        $response->assertSuccessful();

    }

    /**
     * @return void
     * @test
     */
    public function can_see_activities()
    {
//        $activities = factory(Activitat::class, 10)->create();
        $activities = factory(Activitat::class)->create();

        $response = $this->get('/activitats');
        
        $response->assertSuccessful();
        $this->assertDatabaseHas('activitats', $activities->toArray());
        $response->assertSee($activities->nom);

    }

    /**
     * @test
     * @return \Illuminate\Foundation\Application|void
     */
    public function can_delete_a_task()
    {
      $activity = factory(Activitat::class)->create();

      $response = $this->delete('/api/activitats/'.$activity->id);

      $this->assertDatabaseMissing('activitats', [
        'id' => $activity->id
      ]);
    }
}
