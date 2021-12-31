
@extends('layouts.admin')

@section('title')
<title>Setting</title>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('admins/setting/index.css') }}">
@endsection

@section('js')
    <script src="{{ asset('vendor/sweetAlert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('admins/main.js') }}"></script>
@endsection()

@section('content')
<div class="content-wrapper">
    @include('partials.content-header', ['name' => 'Setting', 'key' => 'List'])

    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="btn-group float-right">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            Add setting
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- dropdown menu links -->                    
                            <li><a href="{{ route('settings.create') . '?type=Text' }}">Text</a></li>
                            <li><a href="{{ route('settings.create') . '?type=Textarea' }}">Textarea</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Config key</th>
                                <th scope="col">Config value</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($settings as $setting)
                                <tr>
                                    <td scope="row">{{ $setting->id }}</td>
                                    <td>{{ $setting->config_key }}</td>
                                    <td>{{ $setting->config_value }}</td>
                                    <td>
                                        <a href="{{ route('settings.edit', ['id' => $setting->id]) . '?type=' . $setting->type}}" class="btn btn-default">Edit</a>
                                        <a href="" 
                                            data-url="{{ route('settings.delete', ['id' => $setting->id]) }}"
                                            class="btn btn-danger action_delete">Delete</a>
                                    </td>
                                </tr>   
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <div class="col-md-12">
                    {{ $settings->links() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection