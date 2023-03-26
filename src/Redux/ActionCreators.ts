import { IUser } from "../Types/IUser"
import {
	ADD_POST, DELETE_POST, ADD_MESSAGE, SET_USERS_DATA, FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW,
	SET_USERS_PROFILE,
	SET_STATUS,
	SET_INITIALIZED,
	SAVE_AVATAR
} from "./ActionTypes"

export type setStatusTypesAC = {
	type: typeof SET_STATUS,
	status: string
}


export const setStatusAC = (status: string): setStatusTypesAC => {
	return { type: SET_STATUS, status }
}

export type updateStatusTypesAC = {
	type: typeof SET_STATUS,
	status: string
}


export const updateStatusAC = (status: string): updateStatusTypesAC => {
	return { type: SET_STATUS, status }
}

export type saveAvatarTypesAC = {
	type: typeof SAVE_AVATAR,
	photos: any
}


export const saveAvatarAC = (photos: any): saveAvatarTypesAC => {
	console.log('ava6');
	return { type: SAVE_AVATAR, photos }
}



export type addPostTypesAC = {
	type: typeof ADD_POST,
	text: string,
}

export const addPostAC = (text: string): addPostTypesAC => {
	return { type: ADD_POST, text }
}


export type deletePostTypesAC = {
	type: typeof DELETE_POST,
	id: number,
}

export const deletePostAC = (id: number): deletePostTypesAC => {
	return { type: DELETE_POST, id }
}

export type addMessageTypesAC = {
	type: typeof ADD_MESSAGE,
	id: number,
	messageText: string
}


export const addMessageAC = (id: number, messageText: string): addMessageTypesAC => {
	return { type: ADD_MESSAGE, id, messageText }
}


export type authTypesAC = {
	type: typeof SET_USERS_DATA,
	payload: {
		id: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean,
	}
}


export const authAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): authTypesAC => {
	console.log('thunk4');
	return { type: SET_USERS_DATA, payload: { id, email, login, isAuth } }
}

export type setUsersProfileTypesAC = {
	type: typeof SET_USERS_PROFILE,
	profile?: string | number | null
}

export const setUsersProfileAC = (profile: string | number | null): setUsersProfileTypesAC => {
	return { type: SET_USERS_PROFILE, profile }
}


//UsersPage


// export type UsersAC = {
// 	type: typeof SET_USERS,
// 	users: Array<IUser>
// 	pageSize: num
// 	totalUsersCount: 0,
// 	currentPage: 1,
// 	isFetching: false,
// 	followingInProgress: [],
// 	portionSize: 0
// }


export type setUsersAC = {
	type: typeof SET_USERS,
	users: Array<IUser>
}
export const setUsers = (users: IUser[]): setUsersAC => {
	return { type: SET_USERS, users }
}


export type followAC = {
	type: typeof FOLLOW,
	userId: number
}
export const followSuccess = (userId: number): followAC => {
	return { type: FOLLOW, userId }
}

export type unfollowAC = {
	type: typeof UNFOLLOW,
	userId: number
}
export const unFollowSuccess = (userId: number): unfollowAC => {
	return { type: UNFOLLOW, userId }
}

export type setTotalUsersCountAC = {
	type: typeof SET_TOTAL_USERS_COUNT,
	count: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAC => {
	return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}

export type setCurrentPageAC = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageAC => {
	return { type: SET_CURRENT_PAGE, currentPage }
}

export type setIsFetchingAC = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingAC => {
	return { type: TOGGLE_IS_FETCHING, isFetching }
}

export type toggleIsFollowingProgressAC = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching: boolean
	userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressAC => {
	return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

//app

export type initializedTypesAC = {
	type: typeof SET_INITIALIZED
}

export const initializedAC = (): initializedTypesAC => {
	return { type: SET_INITIALIZED }
}