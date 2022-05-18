import { Link } from 'react-router-dom'
import noImage from '../../assets/noimage.jpg'
import Button from '../Button'
import './MovieItem.css'

export default function MovieItem({item, imageUrl, _id, type}) {
	return (
		<div className="movie-item" style={{backgroundImage: `url(${item.backdrop_path == null || undefined ? noImage : imageUrl + item.backdrop_path})`}}>
			<div className="movie-item__wrap">
				<div className="movie-item__title">
					<h5 className='mt-2 mb-2'>{item.original_title || item.name}</h5>
				</div>
				<div className="movie-item__time mb-2">
					<span>1hr:30mins</span>
				</div>
				<Link to={`/detail/${type}/${_id}`}>
					<Button size='small'/>
				</Link>
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