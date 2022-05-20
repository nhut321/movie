import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import posterImg from '../../assets/noimage-poster.jpg'
import noAvatar from '../../assets/avatar.png'
import { getDataApi } from '../../components/apiConfig'
import { Row, Col } from 'react-bootstrap'
import { imageUrl } from '../../components/baseApi'
import './DetailCast.css'

function DetailCast() {
	const params = useLocation()
	const type = params.pathname.split('/')[2]
	const id_film = params.pathname.split('/')[3]
	const [cast, setCast] = useState([])
	const [crew, setCrew] = useState([])
	const imgAvatarUrl = 'https://www.themoviedb.org/t/p/w66_and_h66_face'
	useEffect(() => {
		const fetchData = async () => {
			const result = await getDataApi.getCredits(id_film,type)
			console.log(result.data)
			setCast(result.data.cast)
			setCrew(result.data.crew)
		}
		fetchData()
	},[])
	return (
		<div className="detail-cast" style={{paddingTop: '70px'}}>
			<div className="container">
				<div className="detail-cast__header">
					<div className="detail-cast__header-bg" style={{backgroundImage: `url(${posterImg})`}}></div>
					<div className="detail-cast__header-info">
						<Link to='/'>
							<h1>Logan</h1>
						</Link>
						<span>(2017)</span>
					</div>
				</div>
				<div className="detail-cast__content">
					<Row>
						<Col>
							<div className="heading">
								<h3>Cast</h3>
							</div>
							<div className="detail-cast__content-list">

								{
									cast.map((v,i) => {
										return (
											<div key={i} className="detail-cast__content-item">
												<div className="detail-cast__content-item-img">
													<img src={v.profile_path ? imgAvatarUrl + v.profile_path : noAvatar} alt="" />
												</div>
												<div className="detail-cast__content-item-info">
													<Link to='/'>
														<span>{v.name}</span>
													</Link>
													<p>{v.character}</p>
												</div>
											</div>
										)
									})
								}


							</div>
						</Col>
						<Col>
							<div className="heading">
								<h3>Crew</h3>
							</div>
							<div className="detail-cast__content-list">
								{
									crew.map((v,i) => {
										return (
											<div key={i} className="detail-cast__content-item">
												<div className="detail-cast__content-item-img">
													<img src={v.profile_path ? imgAvatarUrl + v.profile_path : noAvatar} alt="" />
												</div>
												<div className="detail-cast__content-item-info">
													<Link to='/'>
														<span>{v.name}</span>
													</Link>
													<p>{v.job}</p>
												</div>
											</div>
										)
									})
								}
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	)
}

export default DetailCast