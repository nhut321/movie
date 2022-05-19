import { imageUrl } from '../baseApi'

export default function CastSliderItem({name, character, bgImg}) {
	// console.log(name, character)
	return (
		<div className="cast-slider__item">
			<div className="cast-slider__item-top">
				<div className="item-top__background" style={{backgroundImage: `url(${imageUrl + bgImg})`}}></div>
			</div>
			<div className="cast-slider__item-bottom">
				<div className="item-bottom__name pt-2">
					<a href="#">
						<span>{name}</span>
					</a>
				</div>
				<div className="item-bottom__character pb-2">
					<span>{character}</span>
				</div>
			</div>
		</div>
	)
}