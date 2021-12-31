
@extends('layouts.admin')

@section('title')
<title>Trang chủ</title>
@endsection
@section('content')
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Menu', 'key' => 'List'])


    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <a href="{{ route('menus.create') }}" class="btn btn-success float-right m-2">Add</a>
                </div>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên menu</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($menus as $menu)
                                <tr>
                                    <td scope="row">{{ $menu['id'] }}</td>
                                    <td>{{ $menu['name'] }}</td>
                                    <td>
                                        <a href="{{ route('menus.edit', ['id' => $menu->id]) }}" class="btn btn-default">Edit</a>
                                        <a href="{{ route('menus.delete', ['id' => $menu->id]) }}" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>   
                            @endforeach 
                        </tbody>
                    </table>
                </div>
                <div class="col-md-12">
                    {{ $menus->links() }} <!-- phân trang (laravel 5 pagination) -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection