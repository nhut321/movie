import Hero from '../../components/Hero'
import MovieListSlider from '../../components/MovieListSlider'

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<MovieListSlider heading='Top Rated' urlKey='top_rated' type='movie' />
			<MovieListSlider heading='Popular TV Shows' urlKey='popular' type='tv' />
		</div>
	)
}

export default Home