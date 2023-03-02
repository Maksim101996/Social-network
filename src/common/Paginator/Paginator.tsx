import { FC, useState } from "react"
// import s from './Paginator.module.scss'
// import cn from "classnames"
// import { setCurrentPage } from "../../Redux/ActionCreators";
// import { Dispatch } from "redux";
// import { useDispatch } from "react-redux";


// interface Props {
// 	portionSize: number
// 	currentPage: number,
// 	totalItemsCount: number,
// 	pageSize: number,
// 	onPageChange: () => void
// }



// const Paginator: FC<Props> = ({ portionSize = 10, currentPage, totalItemsCount, pageSize, onPageChange }) => {

// 	const dispatch = useDispatch<Dispatch<any>>()





// 	let pagesCount = Math.ceil(totalItemsCount / pageSize)
// 	let pages = []
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i)
// 	}



// 	let portionCount = Math.ceil(pagesCount / portionSize)
// 	// let [portionNumber, setPortionNumber] = useState(1)
// 	const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
// 	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
// 	let rightPortionPageNumber = portionNumber * portionSize

// 	return <div className={s.paginator}>
// 		{portionNumber > 1 &&
// 			<button className={`${s.paginationButton} ${s.leftButton}`} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

// 		{pages
// 			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
// 			.map((p) => {
// 				return <span
// 					onClick={(e) => { onPageChange() }}
// 					className={cn({
// 						[s.selectedPage]: currentPage === p
// 					}, s.pageNumber)}>{p}</span>
// 			})}
// 		{portionCount > portionNumber &&
// 			<button className={`${s.paginationButton} ${s.rightButton}`} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
// 	</div>
// }


// export default Paginator