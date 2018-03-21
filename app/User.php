<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token'
    ];

    public function entitats()
    {
        return $this->belongsToMany(Entitat::class);
    }

    public function activitats()
    {
//        return $this->belongsToMany(Activitat::class);
        return $this->hasMany(Activitat::class);
    }

    public function assignEntitat($entitat)
    {
        return $this->entitats()->save($entitat);
    }

    public function info() {
      $rolename = $this->getRoleNames()->first();
      switch($rolename) {
        case 'admin':     return $this->hasOne(AdminInfo::class);
                          break;
        case 'entity':    return $this->hasOne(EntityInfo::class);
                          break;
      case 'volunteer':   return $this->hasOne(VolunteerInfo::class);
                          break;
      }
    }

}
