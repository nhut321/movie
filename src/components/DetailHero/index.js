import { Row, Col } from 'react-bootstrap'
import detaiMovieImg from '../../assets/detail-movie.jpg'
import movieItem from '../../assets/movie-item.jpg'
import './DetailHero.css'

export default function DetailHero() {
	return (
		<div className="detail-hero" style={{backgroundImage: `url(${movieItem})`}}>
			<div className="container h-100">
				<div className="detail-hero__mask"></div>
				<Row className='h-100' style={{position: 'relative', zIndex: 2}}>
					<Col xs='3' className='d-flex align-items-center'>
						<div className="detail-hero__img ms-4">
							<img src={detaiMovieImg} alt="" />
						</div>
					</Col>
					<Col xs='9'>123213213</Col>
				</Row>
			</div>
		</div>
	)
}