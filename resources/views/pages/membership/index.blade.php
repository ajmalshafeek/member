<x-base-layout>
    
    {{ theme()->getView('pages/membership/_navbar', array('class' => 'mb-5 mb-xl-10', 'member' => $membershipPlan,'id'=>$id)) }}
    
    {{ theme()->getView('pages/membership/_profile-details', array('class' => 'mb-5 mb-xl-10', 'member' => $membershipPlan, 'id'=>$id)) }}

    {{ theme()->getView('pages/membership/_signin-method', array('class' => 'mb-5 mb-xl-10', 'member' => $membershipPlan, 'id'=>$id)) }}
</x-base-layout>
