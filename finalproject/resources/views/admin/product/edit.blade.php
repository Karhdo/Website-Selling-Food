@extends('layouts.admin')

@section('title')
<title>Add Product</title>
@endsection

@section('css')
    <link href="{{ asset('vendor/select2/select2.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('admins/product/add/add.css') }}" rel="stylesheet" />
@endsection

@section('content')

<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Product', 'key' => 'Edit'])

    <!-- Main content -->
    <form action="{{ route('products.update', ['id' => $product->id]) }}" method="POST" enctype="multipart/form-data">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">  
                            @csrf <!-- form trong laravel can phai co dong nay -->
                            <div class="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" 
                                        class="form-control" 
                                        name="name"
                                        value="{{ $product->name }}"
                                        placeholder="Nhập tên sản phẩm">
                            </div>
        
                            <div class="form-group">
                                <label>Giá sản phẩm</label>
                                <input type="text" 
                                        class="form-control" 
                                        name="price"
                                        value="{{ $product->price }}"
                                        placeholder="Nhập giá sản phẩm">
                            </div>

                            <div class="form-group">
                                <label>Ảnh sản phẩm</label>
                                <input type="file" 
                                        class="form-control-file" 
                                        name="feature_img_path"
                                        >
                                <div class="col-md-12">
                                    <div class="row">
                                        <img class="image_detail_product" src="{{ $product->feature_img_path }}" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Chọn danh mục</label>
                                <select class="form-control select2_init" name="category_id">
                                    <option value = "">Chọn danh mục</option>
                                    {!!$htmlOption!!} 
                                    <!-- Dùng {!!!!} để hiểu thẻ html -->
                                </select>
                            </div>               
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label >Nhập nội dung</label>
                            <textarea name = "contents" class="form-control" rows="8">{{ $product->content }}</textarea>
                        </div>                    
                    </div>

                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
    </form>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
@endsection

@section('js')
    <script src="{{ asset('vendor/select2/select2.min.js') }}"></script>
    <!-- <script src="https://cdn.tinymce.com/4/tinymce.min.js" ></script> -->
    <script src="{{ asset('admins/product/add/add.js') }}"></script>
@endsection