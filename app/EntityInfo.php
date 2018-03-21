<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EntityInfo extends Model
{
  protected $fillable = [ 'info', 'user_id' ];
}
