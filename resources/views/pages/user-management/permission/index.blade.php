@extends('base.base')

@section('styles')
<link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css"/>
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css"/>
@endsection

@section('content')

<!--begin::Main-->
@if (theme()->getOption('layout', 'main/type') === 'blank')
<div class="d-flex flex-column flex-root">
    {{ $slot }}
</div>
@else
<!--begin::Root-->
<div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
    {{ theme()->getView('layout/aside/_base') }}

    <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        {{ theme()->getView('layout/header/_base') }}

        <!--begin::Content-->
            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
              <!--begin::Container-->
        <div id="kt_content_container" class="{{ theme()->printHtmlClasses('content-container', false) }}">

           <style>
           .btn-alert{
               background-color: var(--kt-primary);}
            .btn-alert:hover{    background-color: var(--kt-primary-active);}
            .flex{display: inline-flex;}
            button.dt-button {
            background-color: darkgray !important;
            }
            div#data_filter input {
               background-color: #ffffff;
            }

           </style>
     <!--begin::Card-->
     <div class="card">
        <!--begin::Card body-->
        <div class="card-body pt-6">
            <table id="data" class="display table align-middle border rounded table-row-dashed fs-6 g-5 dataTable no-footer" style="width:100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Permission</th>
                    <th>Gaurd</th>
                    <th>Modify Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($permissions as $permission)
                    <tr>
                    <td>{{ $permission->id }}</td>
                    <td>{{ $permission->name }}</td>
                    <td>{{ $permission->guard_name }}</td>
                    <td>{{ $permission->updated_at }}</td>
                    <td class="flex"><form action="/user-management/permission/edit" method="GET">
                        <input type="hidden" value="{{ $permission->id }}" name="id" />
                        <button type="submit" value="{{ $permission->id }}" class="btn btn-alert" >Edit</button>
                        </form>&nbsp;&nbsp;&nbsp;<form action="/user-management/permission/delete" method="POST" value="{{ $permission->id }}" ><button class=" btn btn-danger">Delete</button></form>

                </td>
                </tr>
                @endforeach
            </tbody>
            </table>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->

</div>
<!--end::Container-->
</div>
<!--end::Content-->

{{ theme()->getView('layout/_footer') }}
</div>
<!--end::Wrapper-->
</div>
<!--end::Page-->
</div>
<!--end::Root-->

<!--begin::Drawers-->
{{ theme()->getView('partials/topbar/_activity-drawer') }}
<!--end::Drawers-->

<!--begin::Engage-->
{{ theme()->getView('partials/engage/_main') }}
<!--end::Engage-->

@if(theme()->getOption('layout', 'scrolltop/display') === true)
{{ theme()->getView('layout/_scrolltop') }}
@endif
@endif
<!--end::Main-->
@endsection

@section('scripts')
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.colVis.min.js"></script>
<script>

$(document).ready(function() {
    $('#data').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
        ]
    } );
} );
</script>

@endsection


