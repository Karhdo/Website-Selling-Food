<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryAddRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'bail|required|unique:products|max:255|min:5', // bail để khi vi phạm luật nào thì sẽ dừng ngay chứ ko chạy hết
            'parent_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên danh mục không được phép để trống',
            'name.unique' => 'Tên danh mục không được phép trùng nhau',
            'name.max' => 'Tên danh mục không được phép quá 200 kí tự',
            'name.min' => 'Tên danh mục không được phép dưới 10 kí tự',
            'parent_id.required' => 'Danh mục cha không được phép để trống',
        ];
    }
}
