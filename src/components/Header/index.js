import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import { getDataApi } from '../apiConfig'
import { useDispatch } from 'react-redux'
import { addSearch } from './headerSlice'
import './Header.css'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [toggleSearch, setToggleSearch] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const toggleSearchFn = () => {
		setToggleSearch(v => !v) 
	}

	const redirectSearch = async e => {
		e.preventDefault()
		setSearchInput('')
		setToggleSearch(false)
		const result = await getDataApi.searchMulti(searchInput, 1, false)
		dispatch(addSearch(result.data.results))
		navigate('/search')
	}

	return (
		<header className='header'>
			<div className="wrapper container">
				<div className="header-left">
					<div className="header-left__logo">
						<Link to="/">
							<img src={logo} alt=""/>
						</Link>
					</div>
				</div>
				<div className="header-center">
					<div className="header-center__list">
						<div className="header-center__item">
							<Link className='header-center__item-link' to="/">							
								home
							</Link>
						</div>
						<div className="header-center__item">
							<Link className='header-center__item-link' to="/movie">							
								movies
							</Link>
						</div>
						<div className="header-center__item">
							<Link className='header-center__item-link' to="">							
								tv shows
							</Link>
						</div>
						<div className="header-center__item">
							<Link className='header-center__item-link' to="">							
								videos
							</Link>
						</div>
						<div className="header-center__item">
							<Link className='header-center__item-link' to="">							
								blog
							</Link>
							<div className="header-center__item-sub">
								<div className="header-center__item-sub-item">
									<Link to="">
										Blog
									</Link>
								</div>
								<div className="header-center__item-sub-item">
									<Link to="">
										blog details
									</Link>
								</div>
							</div>
						</div>
						<div className="header-center__item">
							<Link className='header-center__item-link' to="">							
								pages
							</Link>
							<div className="header-center__item-sub">
								<div className="header-center__item-sub-item">
									<Link to="">
										about
									</Link>
								</div>
								<div className="header-center__item-sub-item">
									<Link to="">
										contact
									</Link>
								</div>
								<div className="header-center__item-sub-item">
									<Link to="">
										paq
									</Link>
								</div>
								<div className="header-center__item-sub-item">
									<Link to="">
										tag
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="header-right__list">
						<div className="header-right__item search">
							<div className="header-right__item-icon" onClick={toggleSearchFn}>
								<i className="fa-solid fa-magnifying-glass"></i>
							</div>
								<form className={toggleSearch ? 'search-form active d-flex': 'search-form d-flex'} onSubmit={redirectSearch}>
									<div className="search-form__icon">
										<i className="fa-solid fa-magnifying-glass"></i> 
									</div>
									<input type="text" onChange={e => setSearchInput(e.target.value)}/>
								</form>
						</div>
						<div className="header-right__item noti">
							<div className="header-right__item-icon">
								<i className="fa-solid fa-bell"></i>
							</div>
						</div>
						<div className="header-right__item">
							<div className="header-right__item-img">
								<img src={avatar} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header