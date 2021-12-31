<?php

namespace App\Http\Controllers;

use App\category;
use Illuminate\Http\Request;
use App\Components\Recusive;
use App\Http\Requests\CategoryAddRequest;
use App\Traits\DeleteModelTrait;
use Illuminate\Support\Facades\Log;
use Exception;

class CategoryController extends Controller
{
    private $category;
    use DeleteModelTrait;
    public function __construct(category $category)
    {
        $this->category = $category;
    }

    public function create() {
        $htmlOption = $this->getCategory($parentId = '');
        return view('admin.category.add', compact('htmlOption'));
    }

    public function index() {
        $categories = $this->category->latest()->paginate(5); // Lấy tất cả sản phẩm được sắp theo thời điểm tạo
        return view('admin.category.index', compact('categories'));
    }

    public function store(CategoryAddRequest $request) {
        $this->category->create([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'slug' => str_slug($request->name)
        ]);

        return redirect()->route('categories.index');
    }

    public function getCategory($parentId) {
        $data = $this->category->all();
        $recusive = new Recusive($data);
        $htmlOption = $recusive->categoryRecusive($parentId);
        return $htmlOption;
    }

    public function edit($id) {
        
        $category = $this->category->find($id);
        $htmlOption = $this->getCategory($category->parent_id);
        return view('admin.category.edit', compact('category', 'htmlOption'));
    }

    public function update($id, Request $request) {
        $this->category->find($id)->update([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'slug' => str_slug($request->name)
        ]);

        return redirect()->route('categories.index');
    }

    public function delete($id) {
        return $this->deleteModelTrait($id, $this->category);
    }
}
