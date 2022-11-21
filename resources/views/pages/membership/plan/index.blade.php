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
                                    background-color: #f3be00;}
                                .btn-alert:hover{background-color: #c59c0c;}
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

                                    <!--begin::Table-->
                                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="tableData">
                                        <thead>
                                        <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                            <th class="min-w-125px">Plan</th>
                                            <th class="min-w-125px">Description</th>
                                            <th class="min-w-125px">Point</th>
                                            <th class="min-w-125px">Currency</th>
                                            <th class="min-w-125px">Price</th>
                                            <th class="text-end min-w-100px">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody class="text-gray-600 fw-semibold">
                                        @forelse($member as $key)
                                            <tr>
                                                <td>{{ $key->plan }}</td>
                                                <td>{{ $key->description }}</td>
                                                <td>{{ $key->points }}</td>
                                                <td>{{ $key->currency }}</td>
                                                <td>{{ $key->price }}</td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                                                        <span class="svg-icon svg-icon-5 m-0">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
					</svg>
				</span>
                                                        <!--end::Svg Icon--></a>
                                                    <!--begin::Menu-->
                                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                        <!--begin::Menu item-->
                                                        <div class="menu-item px-3">
                                                            <a href="/membership/plan/edit/{{ $key->id }}" class="menu-link px-3">Edit</a>
                                                        </div>
                                                        <!--end::Menu item-->
                                                        <!--begin::Menu item-->
                                                        <div class="menu-item px-3">
                                                            <a href="/membership/plan/delete/{{ $key->id }}" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                                                        </div>
                                                        <!--end::Menu item-->
                                                    </div>
                                                    <!--end::Menu-->
                                                </td>
                                                <!--end::Action=-->
                                            </tr>
                                        @empty
                                            <p class="text-center">No Plan Found</p>
                                        @endforelse
                                        <!--end::Table row-->
                                        </tbody>
                                        <!--end::Table body-->
                                    </table>
                                    <!--end::Table-->

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
            $('#tableData').DataTable( {
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
                ]
            } );
        } );
    </script>

@endsection


