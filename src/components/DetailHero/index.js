import { Row, Col } from 'react-bootstrap'
import detaiMovieImg from '../../assets/detail-movie.jpg'
import noImage from '../../assets/noimage.jpg'
import { imageUrl } from '../baseApi'
import './DetailHero.css'

export default function DetailHero({_id, item}) {
	return (
		<div className="detail-hero" style={{backgroundImage: `url(${item.backdrop_patth == null || undefined ? noImage : imageUrl + item?.backdrop_path})`}}>
			<div className="container h-100">
				<div className="detail-hero__mask"></div>
				<Row className='h-100' style={{position: 'relative', zIndex: 2}}>
					<Col xs='3' className='wrapper'>
						<div className="detail-hero__img">
							<img src={imageUrl + item.poster_path} alt="poster" />
						</div>
					</Col>
					<Col xs='9' className='wrapper'>
						<div className="detail-right">
							<div className="detail-hero__title">
								<h2>{item.original_title}</h2>
								<span className='ms-2'>( {item.release_date?.split('-')[0]} )</span>
							</div>
							<div className="detail-genres">
								<span className='me-2'>Action</span>
								<span>Drama</span>
							</div>
							<div className="detail-actions">
								<div className="detail-actions__rating">
									<div className="detail-actions__rating-left">
										<i className="fa-solid fa-star"></i>
									</div>
									<div className="detail-actions__rating-right">
										<div className="rating-top">
											<span className='fw-bold fs-4'>8.9</span>
											<span style={{color: '#d1cfcf'}}>/10</span>
										</div>
										<div className="rating-bottom">
											<span>100k</span>
										</div>
									</div>
								</div>
								<div className="detail-actions__tooltip">

									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i className="fa-solid fa-list"></i>
										</div>
										<div className="actions__tooltip-item-decs">
											<p>Add to list</p>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i className="fa-solid fa-heart"></i>
										</div>
										<div className="actions__tooltip-item-decs">
											<p>Mark as favourite</p>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i className="fa-solid fa-bookmark"></i>
										</div>
										<div className="actions__tooltip-item-decs">
											<p>Add to your watchlist</p>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i className="fa-solid fa-star"></i>
										</div>
										<div className="actions__tooltip-item-decs">
											<p>Rate It!</p>
										</div>
									</div>

								</div>
								<div className="detail-actions__trailer">
									<span>Play trailer </span><span><i className="fa-solid fa-play"></i></span>
								</div>
							</div>
							<div className="detail-overview">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</div> 
							<div className="detail-people">
								<ul className='detail-people__list'>
									<li className='detail-people__item col-4'>
										<a href="#">Hugh Jackman</a>
										<p>Main character</p>
									</li>
									<li className='detail-people__item col-4'>
										<a href="#">Hugh Jackman</a>
										<p>Main character</p>
									</li>
									<li className='detail-people__item col-4'>
										<a href="#">Hugh Jackman</a>
										<p>Main character</p>
									</li>
									<li className='detail-people__item col-4'>
										<a href="#">Hugh Jackman</a>
										<p>Main character</p>
									</li>
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}