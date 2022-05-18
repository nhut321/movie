import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DetailHero from '../../components/DetailHero'
import { getDataApi } from '../../components/apiConfig'

function Detail() {
	const test = useLocation()
	const type = test.pathname.split('/')[2]
	const id_film = test.pathname.split('/')[3]
	const [item, setItem] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getDataApi.getDataDetail(id_film, type)
				setItem(result.data)
			} catch(err) {
				console.log(err)
			}
		}
		fetchData()
	},[])
	return(
		<div className='wrapper' style={{paddingTop: '70px'}}>
			<DetailHero _id={id_film} item={item} />
		</div>
	)
}

export default Detail