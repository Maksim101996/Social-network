import React, { FC, useEffect, useState } from "react";
import s from './ProfilePage.module.scss'
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoForm from "./ProfileInfo/ProfileInfoForm";


interface Props {
	isOwner: boolean
	profile?: any,
	likes: string,
	status: string
	editMode: boolean
	updateStatus: (status: string) => void
	savePhotoSelected: (e: any) => void
	saveProfileSelected: (data: any) => void
	goToEditMode: () => void
}

const ProfilePage: FC<Props> = ({ profile, status, updateStatus, isOwner, savePhotoSelected, goToEditMode, saveProfileSelected, editMode }) => {

	if (!profile) {
		return <Preloader />
	}

	return (
		<div className={s.profilePage}>
			<div className={s.profilePage__container}>
				<div className={s.avatar}><img className={s.avatarImage} src={profile?.photos?.large ? profile?.photos?.large : userPhoto} alt="avatar" />
					<div>{isOwner && <div className={s.inputFile}>
						<input id={"inputAvatar"} type={"file"} className={s.inputAvatar} onChange={savePhotoSelected} />
						<label className={s.inputAvatarLabel} htmlFor="inputAvatar">Add avatar</label>
					</div>}</div>
				</div>
				<div className={s.profilePage__aboutMe}>
					<div>{!editMode ? <ProfileInfo isOwner={isOwner} profile={profile} goToEditMode={goToEditMode} /> :
						<ProfileInfoForm saveProfileSelected={saveProfileSelected} profile={profile} />}
					</div>
					<div className={s.status}><ProfileStatus style={{ color: "red" }} isOwner={isOwner} status={status} updateStatus={updateStatus} /></div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage