<?php
$documentation_menu = array(
    // Getting Started
    array(
        'heading' => 'Getting Started',
    ),

    // Overview
    array(
        'title' => 'Overview',
        'path'  => 'documentation/getting-started/overview',
        // 'role' => ['admin'],
        // 'permission' => [],
    ),

    // Build
    array(
        'title' => 'Build',
        'path'  => 'documentation/getting-started/build',
    ),

    array(
        'title'      => 'Multi-demo',
        'attributes' => array("data-kt-menu-trigger" => "click"),
        'classes'    => array('item' => 'menu-accordion'),
        'sub'        => array(
            'class' => 'menu-sub-accordion',
            'items' => array(
                array(
                    'title'  => 'Overview',
                    'path'   => 'documentation/getting-started/multi-demo/overview',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Build',
                    'path'   => 'documentation/getting-started/multi-demo/build',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),

    // File Structure
    array(
        'title' => 'File Structure',
        'path'  => 'documentation/getting-started/file-structure',
    ),

    // Customization
    array(
        'title'      => 'Customization',
        'attributes' => array("data-kt-menu-trigger" => "click"),
        'classes'    => array('item' => 'menu-accordion'),
        'sub'        => array(
            'class' => 'menu-sub-accordion',
            'items' => array(
                array(
                    'title'  => 'SASS',
                    'path'   => 'documentation/getting-started/customization/sass',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Javascript',
                    'path'   => 'documentation/getting-started/customization/javascript',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),

    // Dark skin
    array(
        'title' => 'Dark Mode Version',
        'path'  => 'documentation/getting-started/dark-mode',
    ),

    // RTL
    array(
        'title' => 'RTL Version',
        'path'  => 'documentation/getting-started/rtl',
    ),

    // Troubleshoot
    array(
        'title' => 'Troubleshoot',
        'path'  => 'documentation/getting-started/troubleshoot',
    ),

    // Changelog
    array(
        'title'            => 'Changelog <span class="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">v' . theme()->getVersion() . '</span>',
        'breadcrumb-title' => 'Changelog',
        'path'             => 'documentation/getting-started/changelog',
    ),

    // References
    array(
        'title' => 'References',
        'path'  => 'documentation/getting-started/references',
    ),


    // Separator
    array(
        'custom' => '<div class="h-30px"></div>',
    ),

    // Configuration
    array(
        'heading' => 'Configuration',
    ),

    // General
    array(
        'title' => 'General',
        'path'  => 'documentation/configuration/general',
    ),

    // Menu
    array(
        'title' => 'Menu',
        'path'  => 'documentation/configuration/menu',
    ),

    // Page
    array(
        'title' => 'Page',
        'path'  => 'documentation/configuration/page',
    ),

    // Page
    array(
        'title' => 'Add NPM Plugin',
        'path'  => 'documentation/configuration/npm-plugins',
    ),


    // Separator
    array(
        'custom' => '<div class="h-30px"></div>',
    ),

    // General
    array(
        'heading' => 'General',
    ),

    // DataTables
    array(
        'title'      => 'DataTables',
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array("data-kt-menu-trigger" => "click"),
        'sub'        => array(
            'class' => 'menu-sub-accordion',
            'items' => array(
                array(
                    'title'  => 'Overview',
                    'path'   => 'documentation/general/datatables/overview',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),

    // Remove demos
    array(
        'title' => 'Remove Demos',
        'path'  => 'documentation/general/remove-demos',
    ),


    // Separator
    array(
        'custom' => '<div class="h-30px"></div>',
    ),

    // HTML Theme
    array(
        'heading' => 'HTML Theme',
    ),

    array(
        'title' => 'Components',
        'path'  => '//preview.keenthemes.com/metronic8/demo1/documentation/base/utilities.html',
    ),

    array(
        'title' => 'Documentation',
        'path'  => '//preview.keenthemes.com/metronic8/demo1/documentation/getting-started.html',
    ),
);
$main_menu = array(
    //// Dashboard
    array(
        'title' => 'Dashboard',
        'path'  => '',
        'icon'  => theme()->getSvgIcon("demo1/media/icons/duotune/art/art002.svg", "svg-icon-2"),
    ),

    //// Modules
    array(
        'classes' => array('content' => 'pt-8 pb-2'),
        'content' => '<span class="menu-section text-muted text-uppercase fs-8 ls-1">Modules</span>',
    ),

    // Account
    array(
        'title'      => 'Account',
        'icon'       => array(
            'svg'  => theme()->getSvgIcon("demo1/media/icons/duotune/communication/com006.svg", "svg-icon-2"),
            'font' => '<i class="bi bi-person fs-2"></i>',
        ),
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array(
            "data-kt-menu-trigger" => "click",
        ),
        'sub'        => array(
            'class' => 'menu-sub-accordion menu-active-bg',
            'items' => array(

                array(
                    'title'  => 'Settings',
                    'path'   => 'account/settings',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),

            ),
        ),
    ),

    // Membership
    array(
        'title'      => 'Membership',
        'icon'       => array(
            'svg'  => theme()->getSvgIcon("demo8/media/icons/duotune/communication/com005.svg", "svg-icon-2"),
            'font' => '<i class="bi bi-person fs-2"></i>',
        ),
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array(
            "data-kt-menu-trigger" => "click",
        ),
        'sub'        => array(
            'class' => 'menu-sub-accordion menu-active-bg',
            'items' => array(
                array(
                    'title'  => 'Payment Pending',
                    'path'   => 'membership/payment-pending',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Payment Completed',
                    'path'   => 'membership/payment-compeleted',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'      => 'Plans',
                    'path'       => 'membership/plan',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Coming soon",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
                array(
                    'title'  => 'Create Plan',
                    'path'   => 'membership/plan/create',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),

    // Membership
    array(
        'title'      => 'Approval',
        'icon'       => array(
            'svg'  => theme()->getSvgIcon("demo8/media/icons/duotune/communication/com007.svg", "svg-icon-2"),
            'font' => '<i class="bi bi-person fs-2"></i>',
        ),
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array(
            "data-kt-menu-trigger" => "click",
        ),
        'sub'        => array(
            'class' => 'menu-sub-accordion menu-active-bg',
            'items' => array(
                array(
                    'title'  => 'New Request',
                    'path'   => 'approval/request',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Canceled',
                    'path'   => 'approval/canceled',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'      => 'Approved',
                    'path'       => 'approval/approved',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Approved",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
                array(
                    'title'  => 'Refund',
                    'path'   => 'approval/refund',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),
    // users
    array(
        'title'      => 'User Management',
        'icon'       => array(
            'svg'  => theme()->getSvgIcon("demo8/media/icons/duotune/communication/com014.svg", "svg-icon-2"),
            'font' => '<i class="bi bi-person fs-2"></i>',
        ),
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array(
            "data-kt-menu-trigger" => "click",
        ),
        'sub'        => array(
            'class' => 'menu-sub-accordion menu-active-bg',
            'items' => array(
                array(
                    'title'  => 'Users',
                    'path'   => 'user-management',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Create User',
                    'path'   => 'user-management/create',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Roles',
                    'path'   => 'user-management/roles/role',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'      => 'Permissions',
                    'path'       => 'user-management/permissions/permission',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Coming soon",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
            ),
        ),
    ),

    // System
    array(
        'title'      => 'System',
        'icon'       => array(
            'svg'  => theme()->getSvgIcon("demo1/media/icons/duotune/general/gen025.svg", "svg-icon-2"),
            'font' => '<i class="bi bi-layers fs-3"></i>',
        ),
        'classes'    => array('item' => 'menu-accordion'),
        'attributes' => array(
            "data-kt-menu-trigger" => "click",
        ),
        'sub'        => array(
            'class' => 'menu-sub-accordion menu-active-bg',
            'items' => array(
                array(
                    'title'      => 'Settings',
                    'path'       => '#',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Coming soon",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
                array(
                    'title'  => 'Audit Log',
                    'path'   => 'log/audit',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'System Log',
                    'path'   => 'log/system',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                /*
                    array(
                        'title'  => 'Error 404',
                        'path'   => 'error/error-404',
                        'bullet' => '<span class="bullet bullet-dot"></span>',
                    ),
                    array(
                        'title'  => 'Error 500',
                        'path'   => 'error/error-500',
                        'bullet' => '<span class="bullet bullet-dot"></span>',
                    ),*/
            ),
        ),
    ),

    //// Help
    array(
        'classes' => array('content' => 'pt-8 pb-2'),
        'content' => '<span class="menu-section text-muted text-uppercase fs-8 ls-1">Help</span>',
    ),

    // Documentation
    array(
        'title' => 'Documentation',
        'icon'  => theme()->getSvgIcon("demo1/media/icons/duotune/abstract/abs027.svg", "svg-icon-2"),
        'path'  => 'documentation/getting-started/overview',
    ),

    // Changelog
    array(
        'title' => 'Changelog v' . theme()->getVersion(),
        'icon'  => theme()->getSvgIcon("demo1/media/icons/duotune/coding/cod003.svg", "svg-icon-2"),
        'path'  => 'documentation/getting-started/changelog',
    ),

);
$horizontal_menu = array(
    // Dashboard
    array(
        'title'   => 'Dashboard',
        'path'    => '',
        'classes' => array('item' => 'me-lg-1'),
    ),

    // Resources
    array(
        'title'      => 'Resources',
        'classes'    => array('item' => 'menu-lg-down-accordion me-lg-1', 'arrow' => 'd-lg-none'),
        'attributes' => array(
            'data-kt-menu-trigger'   => "click",
            'data-kt-menu-placement' => "bottom-start",
        ),
        'sub'        => array(
            'class' => 'menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px',
            'items' => array(
                // Documentation
                array(
                    'title' => 'Documentation',
                    'icon'  => theme()->getSvgIcon("demo1/media/icons/duotune/abstract/abs027.svg", "svg-icon-2"),
                    'path'  => 'documentation/getting-started/overview',
                ),

                // Changelog
                array(
                    'title' => 'Changelog v' . theme()->getVersion(),
                    'icon'  => theme()->getSvgIcon("demo1/media/icons/duotune/general/gen005.svg", "svg-icon-2"),
                    'path'  => 'documentation/getting-started/changelog',
                ),
            ),
        ),
    ),

    // Account
    array(
        'title'      => 'Account',
        'classes'    => array('item' => 'menu-lg-down-accordion me-lg-1', 'arrow' => 'd-lg-none'),
        'attributes' => array(
            'data-kt-menu-trigger'   => "click",
            'data-kt-menu-placement' => "bottom-start",
        ),
        'sub'        => array(
            'class' => 'menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px',
            'items' => array(
                array(
                    'title'  => 'Overview',
                    'path'   => 'account/overview',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'Settings',
                    'path'   => 'account/settings',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'      => 'Security',
                    'path'       => '#',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Coming soon",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
            ),
        ),
    ),

    // System
    array(
        'title'      => 'System',
        'classes'    => array('item' => 'menu-lg-down-accordion me-lg-1', 'arrow' => 'd-lg-none'),
        'attributes' => array(
            'data-kt-menu-trigger'   => "click",
            'data-kt-menu-placement' => "bottom-start",
        ),
        'sub'        => array(
            'class' => 'menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px',
            'items' => array(
                array(
                    'title'      => 'Settings',
                    'path'       => '#',
                    'bullet'     => '<span class="bullet bullet-dot"></span>',
                    'attributes' => array(
                        'link' => array(
                            "title"             => "Coming soon",
                            "data-bs-toggle"    => "tooltip",
                            "data-bs-trigger"   => "hover",
                            "data-bs-dismiss"   => "click",
                            "data-bs-placement" => "right",
                        ),
                    ),
                ),
                array(
                    'title'  => 'Audit Log',
                    'path'   => 'log/audit',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
                array(
                    'title'  => 'System Log',
                    'path'   => 'log/system',
                    'bullet' => '<span class="bullet bullet-dot"></span>',
                ),
            ),
        ),
    ),
);
return array(
    // Documentation menu
    'documentation' => $documentation_menu,

    // Main menu
    'main'          => $main_menu,

    // Horizontal menu
    'horizontal'    => $horizontal_menu,
);
