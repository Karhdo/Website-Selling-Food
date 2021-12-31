<!-- Stored in resources/views/child.blade.php -->

@extends('layouts.admin')
<!-- Truy cập vào file layouts/admin.blade.php -->

@section('title')
<title>Trang chủ</title>
@endsection
@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Category', 'key' => 'Edit'])

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <form action="{{ route('categories.update', ['id' => $category->id]) }}" method="POST">
                        @csrf <!-- form trong laravel can phai co dong nay -->
                        <div class="form-group">
                            <label>Tên danh mục</label>
                            <input type="text" 
                                    class="form-control" 
                                    name="name"
                                    value="{{ $category->name }}"
                                    placeholder="Nhập tên danh mục">
                        </div>
    
                        <div class="form-group">
                            <label>Chọn danh mục cha</label>
                            <select class="form-control" name="parent_id">
                                <option value = 0>Chọn danh mục cha</option>
                                {!!$htmlOption!!} 
                                <!-- Dùng {!!!!} để hiểu thẻ html -->
                            </select>
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