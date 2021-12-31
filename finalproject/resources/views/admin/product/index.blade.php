
@extends('layouts.admin')

@section('title')
<title>Add Products</title>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('admins/product/index/list.css') }}">
@endsection

@section('js')
    <script src="{{ asset('vendor/sweetAlert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('admins/main.js') }}"></script>
@endsection

@section('content')
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Product', 'key' => 'List'])


    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <a href="{{ route('products.create') }}" class="btn btn-success float-right m-2">Add</a>
                </div>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Danh mục</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($products as $productItem)
                                <tr>
                                    <td scope="row">{{ $productItem['id'] }}</td>
                                    <td>{{ $productItem['name'] }}</td>
                                    <td>{{ number_format($productItem['price']) }}</td>
                                    <td>
                                        <img class="product_image" src="{{ $productItem['feature_img_path'] }}" alt="">
                                    </td>
                                    <!-- Từ productItem dùng trung gian khóa ngoại category để 
                                        truy cập vào bảng category ứng với khóa ngoại đó
                                        sau đó lấy name-->
                                    <!-- dùng optional để dù nếu ko có parent_id tương ứng
                                        thì sẽ trả về null và trỏ đến name thì ko có gì-->
                                    <td>{{ optional($productItem->category)->name }}</td>                  
                                    <td>
                                        <a href="{{ route('products.edit', ['id' => $productItem->id]) }}" class="btn btn-default">Edit</a>
                                        <a href="" 
                                           class="btn btn-danger action_delete"
                                           data-url = "{{ route('products.delete', ['id' => $productItem->id]) }}">Delete</a>
                                    </td>
                                </tr>   
                            @endforeach 
                        </tbody>
                    </table>
                </div>
                <div class="col-md-12">
                    {{ $products->links() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection