import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>
                <span>
                    <span>
                        <div>{profile.fullName}</div>
                        <div>{profile.aboutMe}</div>
                    </span>
                    <span>
                        <div>{profile.contacts.facebook}</div>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default ProfileInfo;
