import Hero from '../../components/Hero'
import MovieListSlider from '../../components/MovieListSlider'

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<MovieListSlider heading='Top Rated' urlKey='top_rated' />
			<MovieListSlider heading='Upcoming Movies' urlKey='upcoming' />
		</div>
	)
}

export default Home