<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class category extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'parent_id', 'slug'];
}
