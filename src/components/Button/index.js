import './Button.css'

export default function Button({size}) {
	return (
		<button className={"btn-custom" + ' ' + size}>
			<div className="btn-custom__icon me-2">
				<i class="fa-solid fa-caret-right"></i>
			</div>
			<span>Play Now</span>
		</button>
	)
}