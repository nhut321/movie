import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../MovieItem'
import { BASE_URL, API_KEY, imageUrl } from '../baseApi'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './MovieListSlider.css'

import { Navigation } from "swiper";

export default function MovieListSlider({heading,urlKey}) {
	const [movieItem, setMovieItem] = useState([])
	console.log(urlKey)
	useEffect(() => {
		const fetchData = async () => {
			await fetch(BASE_URL+'/movie/' + urlKey + '?api_key=' + API_KEY + '&language=en-US')
				.then(res => res.json())
				.then(data => {
					// setMovieItem(data.results)


					setMovieItem(data.results)
				})
		}
		fetchData()
	},[])
	return (
		<div className='movie-slider__list container pt-4 pb-4'>
			<div className="movie-slider__list-header">
				<h4 className='m-0'>{heading}</h4>
				<a href="#" style={{color: 'red'}}>View All</a>
			</div>
			<Swiper
				slidesPerView={3}
		        spaceBetween={30}
		        slidesPerGroup={3}
		        loop={true}
		        loopFillGroupWithBlank={false}
		        pagination={{
		          clickable: true,
		        }}
		        navigation={true}
		        modules={[ Navigation]}
		        className="mySwiper movie-swiper"
        	>
        		{
        			movieItem.map((v,i) => {
        				return(
	        					<SwiperSlide key={i}>
									<MovieItem title={v.original_title} imageBg={imageUrl + v.backdrop_path}/>
								</SwiperSlide>
        				)
        			})
        		}
			</Swiper>
			{/* <div className='d-flex justify-content-between align-items-center'> */}
			{/* 	<MovieItem /> */}
			{/* 	<MovieItem /> */}
			{/* 	<MovieItem /> */}
			{/* </div> */}
		</div>
	)
}

