<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VolunteerInfo extends Model
{
  protected $fillable = [ 'info', 'user_id' ];
}
