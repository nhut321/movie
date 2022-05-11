import './Button.css'

export default function Button() {
	return (
		<button className="btn-custom">
			<div className="btn-custom__icon me-2">
				<i class="fa-solid fa-caret-right"></i>
			</div>
			<span>Play Now</span>
		</button>
	)
}