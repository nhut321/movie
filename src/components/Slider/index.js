import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import sliderItem from '../../assets/slider1.jpg'
import textureBg from '../../assets/texure.jpg'
import { Row, Col } from 'react-bootstrap'
import Button from '../Button'
import './Slider.css'

export default function Slider() {
	return (
		<div className="slider">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

		        <SwiperSlide className='slider-item' style={{backgroundImage: `url(${sliderItem})`}}>
		        	<div className="slider-item__inner container">
			        	<Row className='h-100' style={{overflow: 'hidden'}}>
			        		<Col xs={7} className='d-flex align-items-start flex-column justify-content-center'>
			        			<div className="slider-item__inner-heading">
			        				<h1 
			        					style={{background: `url(${textureBg})`}}
			        				>
			        					pirates of sea
			        				</h1>
			        			</div>
			        			<div className="slider-item__inner-summary-desc">
			        				<p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Natus, obcaecati cum a magnam assumenda similique rerum, modi exercitationem minus ipsa iure odio saepe culpa nihil iste maiores quisquam alias molestiae.</p>
			        			</div>
			        			<div className="slider-item__inner-trending mt-4 mb-4 text-start">
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Starring:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
			        					<a href="#">Jame Mcavoy</a>
			        				</div>
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Genres:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
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
		        </SwiperSlide>

		        <SwiperSlide className='slider-item' style={{backgroundImage: `url(${sliderItem})`}}>
		        	<div className="slider-item__inner container">
			        	<Row className='h-100' style={{overflow: 'hidden'}}>
			        		<Col xs={7} className='d-flex align-items-start flex-column justify-content-center'>
			        			<div className="slider-item__inner-heading">
			        				<h1 
			        					style={{background: `url(${textureBg})`}}
			        				>
			        					pirates of sea
			        				</h1>
			        			</div>
			        			<div className="slider-item__inner-summary-desc">
			        				<p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Natus, obcaecati cum a magnam assumenda similique rerum, modi exercitationem minus ipsa iure odio saepe culpa nihil iste maiores quisquam alias molestiae.</p>
			        			</div>
			        			<div className="slider-item__inner-trending mt-4 mb-4 text-start">
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Starring:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
			        					<a href="#">Jame Mcavoy</a>
			        				</div>
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Genres:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
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
		        </SwiperSlide>

		        <SwiperSlide className='slider-item' style={{backgroundImage: `url(${sliderItem})`}}>
		        	<div className="slider-item__inner container">
			        	<Row className='h-100' style={{overflow: 'hidden'}}>
			        		<Col xs={7} className='d-flex align-items-start flex-column justify-content-center'>
			        			<div className="slider-item__inner-heading">
			        				<h1 
			        					style={{background: `url(${textureBg})`}}
			        				>
			        					pirates of sea
			        				</h1>
			        			</div>
			        			<div className="slider-item__inner-summary-desc">
			        				<p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Natus, obcaecati cum a magnam assumenda similique rerum, modi exercitationem minus ipsa iure odio saepe culpa nihil iste maiores quisquam alias molestiae.</p>
			        			</div>
			        			<div className="slider-item__inner-trending mt-4 mb-4 text-start">
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Starring:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
			        					<a href="#">Jame Mcavoy</a>
			        				</div>
			        				<div className="slider-item__inner-trending-item">
			        					<span className='me-2' style={{color: 'var(--primary-color)',fontWeight: 'bold'}}>Genres:</span>
			        					<a className='me-2' href="#">Hugh Jackman</a>
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
		        </SwiperSlide>

		    </Swiper>
		</div>
	)
}
