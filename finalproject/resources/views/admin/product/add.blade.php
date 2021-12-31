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
    @include('partials.content-header', ['name' => 'Product', 'key' => 'Add'])

    <!-- Main content -->
    <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">                    
                            @csrf <!-- form trong laravel can phai co dong nay -->
                            <div class="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" 
                                        class="form-control @error('name') is-invalid @enderror" 
                                        name="name"
                                        placeholder="Nhập tên sản phẩm"
                                        value="{{ old('name') }}"> <!-- hàm old để giữ lại giá trị nếu request ko thỏa rules -->
                                        
                                @error('name')
                                    <div class="alert alert-danger">{{ $message }}</div>
                                @enderror
                            </div>
        
                            <div class="form-group">
                                <label>Giá sản phẩm</label>
                                <input type="text" 
                                        class="form-control @error('price') is-invalid @enderror" 
                                        name="price"
                                        placeholder="Nhập giá sản phẩm"
                                        value="{{ old('price') }}">
                                @error('price')
                                    <div class="alert alert-danger">{{ $message }}</div>
                                @enderror                            
                            </div>

                            <div class="form-group">
                                <label>Ảnh sản phẩm</label>
                                <input type="file" 
                                        class="form-control-file" 
                                        name="feature_img_path"
                                        >
                            </div>

                            <div class="form-group">
                                <label>Chọn danh mục</label>
                                <select class="form-control select2_init @error('category_id') is-invalid @enderror"
                                        name="category_id"
                                        value="{{ old('category_id') }}">
                                    <option value = "">Chọn danh mục</option>
                                    {!!$htmlOption!!} 
                                    <!-- Dùng {!!!!} để hiểu thẻ html -->
                                </select>
                                @error('category_id')
                                    <div class="alert alert-danger">{{ $message }}</div>
                                @enderror                                
                            </div>               
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label >Nhập nội dung</label>
                            <textarea name = "contents" class="form-control @error('contents') is-invalid @enderror" rows="8">{{ old('contents') }}</textarea>
                            @error('contents')
                                    <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
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