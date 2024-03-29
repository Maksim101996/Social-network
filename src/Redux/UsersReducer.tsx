import { IUser } from "../Types/IUser"
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, toggleIsFollowingProgressAC, unfollowAC } from "./ActionCreators"
import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW
} from "./ActionTypes"



let initialState = {
	users: [] as Array<IUser>,
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>,
	portionSize: 10
}


export type StateUsersReducer = typeof initialState


export type UsersReducerActions = setUsersAC | followAC | unfollowAC | setTotalUsersCountAC | setCurrentPageAC | setIsFetchingAC | toggleIsFollowingProgressAC



const UsersReducer = (State = initialState, action: UsersReducerActions): StateUsersReducer => {
	switch (action.type) {
		case FOLLOW:
			return {
				...State,
				users: State.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...State,
				users: State.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS:
			return {
				...State,
				users: action.users
			}
		case SET_CURRENT_PAGE: {
			return {
				...State, currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...State, totalItemsCount: action.count
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...State, isFetching: action.isFetching
			}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...State,
				followingInProgress: action.isFetching
					? [...State.followingInProgress, action.userId]
					: [...State.followingInProgress.filter(id => id !== action.userId)]
			}
		}
		default:
			return State
	}
}





export default UsersReducer


