<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductAddRequest extends FormRequest
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
            'price' => 'required',
            'category_id' => 'required',
            'contents' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên sản phẩm không được phép để trống',
            'name.unique' => 'Tên sản phẩm không được phép trùng nhau',
            'name.max' => 'Tên sản phẩm không được phép quá 200 kí tự',
            'name.min' => 'Tên sản phẩm không được phép dưới 10 kí tự',
            'price.required' => 'Giá sản phẩm không được phép để trống',
            'category_id.required' => 'Danh mục sản phẩm không được phép để trống',
            'contents.required' => 'Nội dung sản phẩm không được phép để trống',
        ];
    }

}
