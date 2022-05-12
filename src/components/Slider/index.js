import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import sliderItem from '../../assets/slider1.jpg'
import SliderItem from './SliderItem'
import './Slider.css'
import { BASE_URL, API_KEY, imageUrl } from '../baseApi'

export default function Slider() {
	const [topMovie, setTopMovie] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			await fetch(BASE_URL + '/movie/now_playing?api_key=' + API_KEY)
				.then(res => res.json())
				.then(data => setTopMovie(data.results.slice(0,3)))
		}
		fetchData()
	},[])

// let array = [5,10,15,20,25,30,35]
// let newArray = array.slice(0,5)
// 
// console.log(newArray)
	return (
		<div className="slider">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{
					topMovie.map((v,i) => {
						return (
					        <SwiperSlide className='slider-item' style={{backgroundImage: `url(${imageUrl + v.backdrop_path})`}}>
					        	<SliderItem movieId={v.id}/>
					        </SwiperSlide>
						)
					})
				}

		    </Swiper>
		</div>
	)
}
