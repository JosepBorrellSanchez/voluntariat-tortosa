<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entitat extends Model
{
    public function activitats()
    {
        return $this->belongsToMany(Activitat::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function assignUser($user)
    {
        return $this->users()->save($user);
    }

    public function assignActivitat($activitat)
    {
        return $this->activitats()->save($activitat);
    }
}
