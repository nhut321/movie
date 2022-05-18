import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import sliderItem from '../../assets/slider1.jpg'
import SliderItem from './SliderItem'
import './Slider.css'
import { BASE_URL, API_KEY, imageUrl } from '../baseApi'
import { getDataApi } from '../apiConfig'

export default function Hero() {
	const [topMovie, setTopMovie] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await getDataApi.getDataHero()
			setTopMovie(result.data.results.slice(0,5))
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
					        <SwiperSlide key={i} className='slider-item' style={{backgroundImage: `url(${imageUrl + v.backdrop_path})`}}>
					        	<SliderItem movieId={v.id} _id={v.id} type='movie' />
					        </SwiperSlide>
						)
					})
				}

		    </Swiper>
		</div>
	)
}
