import { Link } from 'react-router-dom'
import CastSliderItem from './CastSliderItem'
import './CastSlider.css'

export default function CastSlider({cast, type, _id}) {
	return (
		<div className='cast-slider'>
			<div className="container">
				<div className="heading">
					<h2>Starring</h2>
				</div>
				<div className="content">
					{
						cast.map((v,i) => {
							return (
								<CastSliderItem  
									key={i}
									name={v.name} 
									character={v.character}
									bgImg={v.profile_path}
								/>
							)
						})
					}
					<div className="content__view-more">
						<Link to={`/detail/${type}/${_id}/cast`}>
							<span>View more</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

