
@extends('layouts.admin')

@section('title')
<title>Trang chủ</title>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('admins/category/index/list.css') }}">
@endsection

@section('js')
    <script src="{{ asset('vendor/sweetAlert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('admins/main.js') }}"></script>
@endsection

@section('content')
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Category', 'key' => 'List'])


    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <a href="{{ route('categories.create') }}" class="btn btn-success float-right m-2">Add</a>
                </div>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên danh mục</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($categories as $category)
                                <tr>
                                    <td scope="row">{{ $category['id'] }}</td>
                                    <td>{{ $category['name'] }}</td>
                                    <td>
                                        <a href="{{ route('categories.edit', ['id' => $category->id]) }}" class="btn btn-default">Edit</a>
                                        <a href=""
                                           class="btn btn-danger action_delete"
                                           data-url = "{{ route('categories.delete', ['id' => $category->id]) }}">Delete</a>
                                    </td>
                                </tr>   
                            @endforeach                         
                        </tbody>
                    </table>
                </div>
                <div class="col-md-12">
                    {{ $categories->links() }} <!-- phân trang (laravel 5 pagination) -->
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection