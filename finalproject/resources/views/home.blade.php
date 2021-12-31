<!-- Stored in resources/views/child.blade.php -->

@extends('layouts.admin')
<!-- Truy cập vào file layouts/admin.blade.php -->

@section('title')
<title>Trang chủ</title>
@endsection
@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Home', 'key' => ''])
    
    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    Trang chủ
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
@endsection