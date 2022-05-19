import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import posterImg from '../../assets/noimage-poster.jpg'
import { getDataApi } from '../../components/apiConfig'
import { Row, Col } from 'react-bootstrap'
import './DetailCast.css'

function DetailCast() {
	const params = useLocation()
	const type = params.pathname.split('/')[2]
	const id_film = params.pathname.split('/')[3]
	const [cast, setCast] = useState([])
	const [crew, setCrew] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await getDataApi.getCredits(id_film,type)
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
								<div className="detail-cast__content-item">
									<div className="detail-cast__content-item-img">
										<img src={posterImg} alt="" />
									</div>
									<div className="detail-cast__content-item-info">
										<Link to='/'>
											<span>Hugh Jackman</span>
										</Link>
										<span>Logan</span>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	)
}

export default DetailCast