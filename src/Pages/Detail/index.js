import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DetailHero from '../../components/DetailHero'
import CastSlider from '../../components/CastSlider'
import { getDataApi } from '../../components/apiConfig'

function Detail() {
	const params = useLocation()
	const type = params.pathname.split('/')[2]
	const id_film = params.pathname.split('/')[3]
	const [item, setItem] = useState({})
	const [crew, setCrew] = useState([])
	const [cast, setCast] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getDataApi.getDataDetail(id_film, type)
				setItem(v => {
					return {...v, ...result.data}
				})
				console.log(result)
			} catch(err) {
				console.log(err)
			}
		}
		fetchData()
	},[])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getDataApi.getCredits(id_film, type)
				const dataCast = result.data.cast.slice(0,10)
				const dataCrew = result.data.crew
				const crew = dataCrew.filter(v => v.job === 'Director' || v.job === 'Producer' || v.job === 'Editor' || v.job === 'Creator')
				setCast(dataCast)
				setCrew(crew)
			} catch(err) {
				console.log(err)
			}
		}
		fetchData()
	},[])
	return(
		<div className='wrapper' style={{paddingTop: '70px'}}>
			<DetailHero crew={crew} item={item}/>
			<CastSlider cast={cast} type={type} _id={id_film}/>
		</div>
	)
}

export default Detail