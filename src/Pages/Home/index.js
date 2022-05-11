import Slider from '../../components/Slider'
import MovieListSlider from '../../components/MovieListSlider'

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<MovieListSlider heading='Latest Movies' />
			<MovieListSlider heading='Upcoming Movies' />
		</div>
	)
}

export default Home