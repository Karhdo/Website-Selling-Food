<!-- Stored in resources/views/child.blade.php -->

@extends('layouts.admin')
<!-- Truy cập vào file layouts/admin.blade.php -->

@section('title')
<title>Trang chủ</title>
@endsection

@section('css')
    <link href="{{ asset('vendor/select2/select2.min.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('admins\product\add\add.css') }}">
@endsection

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Category', 'key' => 'Add'])

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <form action="{{ route('categories.store') }}" method="POST">
                        @csrf <!-- form trong laravel can phai co dong nay -->
                        <div class="form-group">
                            <label>Tên danh mục</label>
                            <input type="text" 
                                    class="form-control @error('name') is-invalid @enderror" 
                                    name="name"
                                    placeholder="Nhập tên danh mục">
                            @error('name')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
    
                        <div class="form-group">
                            <label>Chọn danh mục cha</label>
                            <select class="form-control select2_init @error('parent_id') is-invalid @enderror" name="parent_id">
                                <option value = 0>Chọn danh mục cha</option>
                                {!!$htmlOption!!} 
                                <!-- Dùng {!!!!} để hiểu thẻ html -->
                            </select>
                            @error('parent_id')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
@endsection

@section('js')
    <script src="{{ asset('vendor/select2/select2.min.js') }}"></script>
    <!-- <script src="https://cdn.tinymce.com/4/tinymce.min.js" ></script> -->
    <script src="{{ asset('admins/product/add/add.js') }}"></script>
@endsection