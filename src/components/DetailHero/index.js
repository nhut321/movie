import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import detaiMovieImg from '../../assets/detail-movie.jpg'
import noImage from '../../assets/noimage.jpg'
import noImagePoster from '../../assets/noimage-poster.jpg'
import { imageUrl } from '../baseApi'
import './DetailHero.css'

export default function DetailHero({_id, crew, item, type}) {
	console.log(item, type)
	const tv_release_date = item?.last_air_date
	const backdropImg = item?.backdrop_path
	return (
		<div className="detail-hero" style={{backgroundImage: `url(${backdropImg ? imageUrl + backdropImg :  noImage})`}}>
			<div className="container h-100">
				<div className="detail-hero__mask"></div>
				<Row className='h-100' style={{position: 'relative', zIndex: 2}}>
					<Col xs='3' className='wrapper'>
						<div className="detail-hero__img">
							<img src={item.poster_path ? imageUrl + item.poster_path : noImagePoster} alt="poster" />
						</div>
					</Col>
					<Col xs='9' className='wrapper'>
						<div className="detail-right">
							<div className="detail-hero__title">
								<h2>{item.original_title || item.name}</h2>
								<span className='ms-2'>( {item.release_date?.split('-')[0] || tv_release_date?.split('-')[0]} )</span>
							</div>
							<div className="detail-genres">
								{
									item?.genres?.map((v,i,arr) => {
										return (
											i < arr.length -1
											?
											<span key={i}>{v.name + ','}</span>
											:
											<span key={i}>{v.name}</span>
										)
									})
								}
								{
									type == 'tv'
									?
									<span className='runtime'>{`${Math.floor(item.episode_run_time % 60)}m`}</span>
									:
									<span className='runtime'>{`${Math.floor(item.runtime / 60)}h ${Math.floor(item.runtime % 60)}m`}</span>
								}
							</div>
							<div className="detail-actions">
								<div className="detail-actions__rating">
									<div className="detail-actions__rating-left">
										<i className="fa-solid fa-star"></i>
									</div>
									<div className="detail-actions__rating-right">
										<div className="rating-top">
											<span className='fw-bold fs-4'>{item.vote_average}</span>
											<span style={{color: '#d1cfcf'}}>/10</span>
										</div>
										<div className="rating-bottom">
											<span>{item.vote_count}</span>
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
								{item.overview}
							</div> 
							<div className="detail-people">
								<ul className='detail-people__list'>
									{
										crew.map((v,i) => {
											return (
												<li key={i} className='detail-people__item col-4'>
													<a href="#">{v.name}</a>
													<p>{v.job}</p>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}