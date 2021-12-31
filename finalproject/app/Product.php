<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $guarded= []; // tất cả field được phép insert

    public function category () {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
