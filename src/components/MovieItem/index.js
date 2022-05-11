import movieBg from '../../assets/movie-item.jpg'
import Button from '../Button'
import './MovieItem.css'

export default function MovieItem() {
	return (
		<div className="movie-item" style={{backgroundImage: `url(${movieBg})`}}>
			<div className="movie-item__wrap">
				<div className="movie-item__title">
					<h5 className='mt-2 mb-2'>Logan</h5>
				</div>
				<div className="movie-item__time mb-2">
					<span>1hr:30mins</span>
				</div>
				<Button size='small'/>
				<div className="movie-item__wrap-actions">
					<div className="movie-item__wrap-actions-icon">
						<i class="fa-solid fa-share-nodes"></i>
					</div>
					<div className="movie-item__wrap-actions-icon">
						<i class="fa-solid fa-heart"></i>
					</div>
					<div className="movie-item__wrap-actions-icon">
						<i class="fa-solid fa-plus"></i>
					</div>
				</div>
			</div>
		</div>
	)
}