import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import './Header.css'

const Header = () => {
	return (
		<header className='header'>
			<div className="header-left">
				<div className="header-left__logo">
					<a href="">
						<img src={logo} alt=""/>
					</a>
				</div>
			</div>
			<div className="header-center">
				<div className="header-center__list">
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							home
						</a>
					</div>
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							movies
						</a>
					</div>
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							tv shows
						</a>
					</div>
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							videos
						</a>
					</div>
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							blog
						</a>
						<div className="header-center__item-sub">
							<div className="header-center__item-sub-item">
								<a href="">
									Blog
								</a>
							</div>
							<div className="header-center__item-sub-item">
								<a href="">
									blog details
								</a>
							</div>
						</div>
					</div>
					<div className="header-center__item">
						<a className='header-center__item-link' href="">							
							pages
						</a>
						<div className="header-center__item-sub">
							<div className="header-center__item-sub-item">
								<a href="">
									about
								</a>
							</div>
							<div className="header-center__item-sub-item">
								<a href="">
									contact
								</a>
							</div>
							<div className="header-center__item-sub-item">
								<a href="">
									paq
								</a>
							</div>
							<div className="header-center__item-sub-item">
								<a href="">
									tag
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header-right">
				<div className="header-right__list">
					<div className="header-right__item search">
						<div className="header-right__item-icon">
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>
						<form className='search-form d-flex'>
							<div className="search-form__icon">
								<i class="fa-solid fa-magnifying-glass"></i>
							</div>
							<input type="text"/>
						</form>
					</div>
					<div className="header-right__item noti">
						<div className="header-right__item-icon">
							<i class="fa-solid fa-bell"></i>
						</div>
					</div>
					<div className="header-right__item">
						<div className="header-right__item-img">
							<img src={avatar} alt="" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header