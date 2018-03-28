<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activitat extends Model
{
    public function entitat()
    {
        return $this->belongsToMany(Entitat::class);
    }

    public function volunteers() {
        return $this->belongsToMany(User::class, 'activitat_user');
    }
}
