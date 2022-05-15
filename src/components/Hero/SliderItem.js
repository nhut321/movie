import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import textureBg from '../../assets/texure.jpg'
import Button from '../Button'
import { BASE_URL, API_KEY, imageUrl } from '../baseApi'

export default function SliderItem({movieId}) {
	const [movie, setMovie] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			await fetch(BASE_URL + `/movie/${movieId}?api_key=${API_KEY}`)
				.then(res => res.json())
				.then(data => setMovie(data))
		}
		fetchData()
	},[])
	return (
		<div className="slider-item__inner container">
        	<Row className='h-100' style={{overflow: 'hidden'}}>
        		<Col xs={7} className='d-flex align-items-start flex-column justify-content-center'>
        			<div className="slider-item__inner-heading">
        				<h1 
        					style={{background: `url(${textureBg})`}}
        				>
        					{movie.original_title}
        				</h1>
        			</div>
        			<div className="slider-item__inner-summary-desc">
        				<p className='m-0'>{movie.overview}</p>
        			</div>
        			<div className="slider-item__inner-trending mt-4 mb-4 text-start">
        				<div className="slider-item__inner-trending-item">
        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Genres:</span>
        					{
        						movie.genres?.map((v,i) => {
        							return <a key={i} className='me-2' href="#">{v.name+' ,'}</a>
        						})
        					}
        					
        				</div>
        				<div className="slider-item__inner-trending-item">
        					<span className='me-2' style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Tag:</span>
        					<a className='me-2' href="#">Action</a>
        					<a href="#">Horror</a>
        				</div>
        			</div>
        			<div className="slider-item__inner-button">
        				<Button size='large' />
        			</div>
        		</Col>
        		<Col xs={5}>1</Col>
        	</Row>
    	</div>
	)
}