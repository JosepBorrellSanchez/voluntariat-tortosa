<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function entitats()
    {
        return $this->belongsToMany(Entitat::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function assignEntitat($entitat)
    {
        return $this->entitats()->save($entitat);
    }

    public function assignRole($role)
    {
        if (is_string($role)) {
            $role = Role::where('nom', $role)->first();
        }
        return $this->roles()->save($role);
    }

    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('nom', $role);
        }
    }
}
