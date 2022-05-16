import movieBg from '../../assets/movie-item.jpg'
import Button from '../Button'
import './MovieItem.css'

export default function MovieItem({title, imageBg}) {
	return (
		<div className="movie-item" style={{backgroundImage: `url(${imageBg})`}}>
			<div className="movie-item__wrap">
				<div className="movie-item__title">
					<h5 className='mt-2 mb-2'>{title}</h5>
				</div>
				<div className="movie-item__time mb-2">
					<span>1hr:30mins</span>
				</div>
				<Button size='small'/>
				<div className="movie-item__wrap-actions">
					<div className="movie-item__wrap-actions-icon">
						<i className="fa-solid fa-share-nodes"></i>
					</div>
					<div className="movie-item__wrap-actions-icon">
						<i className="fa-solid fa-heart"></i>
					</div>
					<div className="movie-item__wrap-actions-icon">
						<i className="fa-solid fa-plus"></i>
					</div>
				</div>
			</div>
		</div>
	)
}