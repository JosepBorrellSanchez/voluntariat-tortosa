<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Activitat;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ActivitatsTest extends TestCase
{
    use DatabaseMigrations;

    public function setUp()
    {
        parent::setUp();
        $this->withoutExceptionHandling();
    }
    

    /** @test */
    public function can_list_activities()
    {
        $activitats = factory(Activitat::class, 10)->create();

        $response = $this->get('/activitats');

        $response->assertSuccessful();
        $response->assertSee('Activitat');

        foreach ($activitats as $activitat) {
            $response->assertSee($activitat->nom);
            $response->assertSee($activitat->descripcio);

            $this->assertDatabaseHas('activitats', [
                'id' => $activitat->id,
                'nom' => $activitat->nom,
                'descripcio' => $activitat->descripcio
            ]);
        }
    }

    /** @test */
    public function can_show_an_activity()
    {
        $activitat = factory(Activitat::class)->create();
        
        $response = $this->get('/activitats/' . $activitat->id);

        $response->assertSuccessful();
        $response->assertSee($activitat->nom);
        $response->assertSee($activitat->descripcio);
    }
}
