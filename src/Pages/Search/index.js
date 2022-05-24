import imgPoster from '../../assets/noimage-poster.jpg'
import { Row, Col } from 'react-bootstrap'
import { addSearch } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../../components/baseApi'
import './Search.css'

function Search() {
	const dispatch = useDispatch()
	const s = useSelector(v => v)

	console.log(s.header)

	// console.log(addSearch)
	
	return (
		<div className="search-page" style={{paddingTop: '70px'}}>
			<div className="container">
				<div className="search-page__header mt-4 mb-4">
					<h3>Search result for: 'Logan'</h3>
				</div>
				<div className="search-page__content">
					<div className="search-page__content-list">
						<Row>
							{
								s.header.searchItem.map((v,i) => {
									return (
										<Col xs='3'>
											<div className="search-page__content-item">
												<div className="img">
													<img src={v.poster_path ? imageUrl + v.poster_path : imgPoster} alt="" />
												</div>
											</div>
										</Col>
									)
								})
							}
						</Row>

					</div>
				</div>
				<div className="search-page__footer">
					
				</div>
			</div>
		</div>
	)
}

export default Search