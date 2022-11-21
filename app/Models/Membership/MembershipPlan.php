<?php

namespace App\Models\Membership;

use App\Core\Traits\SpatieLogsActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
//use Yajra\Datatables\Facades\Datatables;

class MembershipPlan extends Model
{
    use HasFactory, Notifiable;
    use SpatieLogsActivity;
    use HasRoles;
    use HasFactory;
    protected $table = 'membership_plans';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'plan',
        'description',
        'points',
        'currency',
        'price',
    ];


    /**
     * Get a fullname combination of first_name and last_name
     *
     * @return string
     *
    public function getNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Prepare proper error handling for url attribute
     *
     * @return string
     *
    public function getAvatarUrlAttribute()
    {
        if ($this->info) {
            return asset($this->info->avatar_url);
        }

        return asset(theme()->getMediaUrlPath().'avatars/blank.png');
    }

    /**
     * User relation to info model
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     *
    public function info()
    {
        return $this->hasOne(UserInfo::class);
    }*/
}
