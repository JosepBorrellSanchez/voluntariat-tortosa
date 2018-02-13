<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activitat extends Model
{
    public function entitat()
    {
        return $this->belongsToMany(Entitat::class);
    }
}
