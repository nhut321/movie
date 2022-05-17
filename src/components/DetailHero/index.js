// import { CircularProgressbar } from 'react-circular-progressbar';
import { Row, Col } from 'react-bootstrap'
import detaiMovieImg from '../../assets/detail-movie.jpg'
import movieItem from '../../assets/movie-item.jpg'
import './DetailHero.css'
// import 'react-circular-progressbar/dist/styles.css'

export default function DetailHero() {
	return (
		<div className="detail-hero" style={{backgroundImage: `url(${movieItem})`}}>
			<div className="container h-100">
				<div className="detail-hero__mask"></div>
				<Row className='h-100' style={{position: 'relative', zIndex: 2}}>
					<Col xs='3' className='d-flex align-items-center'>
						<div className="detail-hero__img">
							<img src={detaiMovieImg} alt="" />
						</div>
					</Col>
					<Col xs='9'>
						<div className="detail-right">
							<div className="detail-hero__title">
								<h2>Logan</h2>
							</div>
							<div className="detail-genres">
								<span className='me-2'>Action</span>
								<span>Drama</span>
							</div>
							<div className="detail-actions">
								<div className="detail-actions__rating">
									<div className="detail-actions__rating-left">
										<i class="fa-solid fa-star"></i>
									</div>
									<div className="detail-actions__rating-right">
										<div className="rating-top">
											<span className='fw-bold fs-4'>8.9</span>
											<span>/10</span>
										</div>
										<div className="rating-bottom">
											<span>100k</span>
										</div>
									</div>
								</div>
								<div className="detail-actions__tooltip">

									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i class="fa-solid fa-list"></i>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i class="fa-solid fa-heart"></i>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i class="fa-solid fa-bookmark"></i>
										</div>
									</div>
									<div className="actions__tooltip-item">
										<div className="actions__tooltip-icon">
											<i class="fa-solid fa-star"></i>
										</div>
									</div>

								</div>
								<div className="detail-actions__trailer">
									<span>Play trailer </span><span><i class="fa-solid fa-play"></i></span>
								</div>
							</div>
							<div className="detail-overview">
							</div> 
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}