import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import textureBg from '../../assets/texure.jpg'
import Button from '../Button'
import { BASE_URL, API_KEY, imageUrl } from '../baseApi'
import axios from 'axios'

export default function SliderItem({movieId, _id}) {
	const [movie, setMovie] = useState({})
	const [cast, setCast] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const cast = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
			setCast(cast.data.cast.slice(0,5))
			const genres = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
			setMovie(genres.data)
		}
		fetchData()
	},[])
	return (
		<div className="slider-item__inner container">
        	<Row className='h-100' style={{overflow: 'hidden'}}>
        		<Col xs={7} className='d-flex align-items-start flex-column justify-content-center'>
        			<div className="slider-item__inner-heading">
        				<h1 
        					style={
        						{
        							background: `url(${textureBg})`,				
									fontSize: movie?.original_title?.length > 20 ? '3rem' : '5rem'
        						}
        					}
        				>
        					{movie.original_title}
        				</h1>
        			</div>
        			<div className="slider-item__inner-summary-desc">
        				<p className='m-0'>{movie.overview}</p>
        			</div>
        			<div className="slider-item__inner-trending mt-4 mb-4 text-start">
        				<div className="slider-item__inner-trending-item">
        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Cast:</span>
        					{
        						cast?.map((v,i) => {
        							return <a key={i} className='me-2' href="#">{v.name}</a>
        						})
        					}
        				</div>
        				<div className="slider-item__inner-trending-item">
        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Genres:</span>
        					{
        						movie.genres?.map((v,i) => {
        							return <a key={i} className='me-2' href="#">{v.name}</a>
        						})
        					}
        					
        				</div>
        			</div>
        			<div className="slider-item__inner-button">
        				<Link to={`/detail/${_id}`}>
        					<Button size='large' />
        				</Link>
        			</div>
        		</Col>
        		<Col xs={5}>1</Col>
        	</Row>
    	</div>
	)
}