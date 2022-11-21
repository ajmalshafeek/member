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


                                    <!--begin::Basic info-->
                                    <div class="card">
                                        <!--begin::Card header-->
                                        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                                            <!--begin::Card title-->
                                            <div class="card-title m-0">
                                                <h3 class="fw-bolder m-0"><!--{{ __('Profile Details') }}--> membership</h3>
                                            </div>
                                            <!--end::Card title-->
                                        </div>
                                        <!--begin::Card header-->

                                        <!--begin::Content-->
                                        <div id="kt_account_profile_details" class="collapse show">
                                            <!--begin::Form-->
                                            <form id="kt_membership_plan_form" class="form" method="POST" action="{{ route('membership.update') }}" enctype="multipart/form-data">
                                                @csrf
                                                @method('PUT')
                                                <!--begin::Card body-->
                                                <div class="card-body border-top p-9">

                                                    <!--begin::Input group-->
                                                    <div class="row mb-6">
                                                        <!--begin::Label-->
                                                        <label class="col-lg-4 col-form-label required fw-bold fs-6">{{ __('Plan') }}</label>
                                                        <!--end::Label-->

                                                        <!--begin::Col-->
                                                        <div class="col-lg-8">
                                                            <!--begin::Row-->
                                                            <div class="row">
                                                                <!--begin::Col-->
                                                                <div class="col-lg-12 fv-row">
                                                                    <input type="text" name="plan" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Plan" />
                                                                </div>
                                                                <!--end::Col-->
                                                            </div>
                                                            <!--end::Row-->
                                                        </div>
                                                        <!--end::Col-->
                                                    </div>
                                                    <!--end::Input group-->

                                                    <!--begin::Input group-->
                                                    <div class="row mb-6">
                                                        <!--begin::Label-->
                                                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Description') }}</label>
                                                        <!--end::Label-->

                                                        <!--begin::Col-->
                                                        <div class="col-lg-8 fv-row">
                                                            <input type="text" name="description" class="form-control form-control-lg form-control-solid" placeholder="Description" />
                                                        </div>
                                                        <!--end::Col-->
                                                    </div>
                                                    <!--end::Input group-->

                                                    <!--begin::Input group-->
                                                    <div class="row mb-6">
                                                        <!--begin::Label-->
                                                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                                                            <span class="required">{{ __('Points') }}</span>

                                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="{{ __('Points') }}"></i>
                                                        </label>
                                                        <!--end::Label-->

                                                        <!--begin::Col-->
                                                        <div class="col-lg-8 fv-row">
                                                            <input type="text" name="points" class="form-control form-control-lg form-control-solid" placeholder="Points" />
                                                        </div>
                                                        <!--end::Col-->
                                                    </div>
                                                    <!--end::Input group-->

                                                    <!--begin::Input group-->
                                                    <div class="row mb-6">
                                                        <!--begin::Label-->
                                                        <label class="col-lg-4 col-form-label fw-bold fs-6">{{ __('Currency') }}</label>
                                                        <!--end::Label-->

                                                        <!--begin::Col-->
                                                        <div class="col-lg-8 fv-row">
                                                            <input type="text" name="currency" class="form-control form-control-lg form-control-solid" placeholder="Currency" />
                                                        </div>
                                                        <!--end::Col-->
                                                    </div>
                                                    <!--end::Input group-->

                                                    <!--begin::Input group-->
                                                    <div class="row mb-6">
                                                        <!--begin::Label-->
                                                        <label class="col-lg-4 col-form-label fw-bold fs-6">
                                                            <span class="required">{{ __('Price') }}</span>

                                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="{{ __('price') }}"></i>
                                                        </label>
                                                        <!--end::Label-->

                                                        <!--begin::Col-->
                                                        <div class="col-lg-8 fv-row">
                                                            <input type="number" name="points" class="form-control form-control-lg form-control-solid" placeholder="Price" />
                                                        </div>
                                                        <!--end::Col-->
                                                    </div>
                                                    <!--end::Input group-->

                                                </div>
                                                <!--end::Card body-->

                                                <!--begin::Actions-->
                                                <div class="card-footer d-flex justify-content-end py-6 px-9">
                                                    <button type="reset" class="btn btn-white btn-active-light-primary me-2">{{ __('Discard') }}</button>
                                                    <button type="submit" class="btn btn-primary" id="kt_membership_plan_submit">
                                                        @include('partials.general._button-indicator', ['label' => __('Save Changes')])
                                                    </button>
                                                </div>
                                                <!--end::Actions-->
                                            </form>
                                            <!--end::Form-->
                                        </div>
                                        <!--end::Content-->
                                    </div>
                                    <!--end::Basic info-->

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
@endsection




