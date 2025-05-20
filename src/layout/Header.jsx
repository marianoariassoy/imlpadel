import { Link } from 'react-router-dom'
import { Bars } from '../components/icons'
import UserMenu from './UserMenu'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <div className='navbar w-full px-5 bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            className='cursor-pointer hover:text-primary'
            // onClick={openMenu}
          >
            <Bars />
          </label>
        </div>
      </div>
      <div className='navbar-center text-primary'>
        <Link to='/'>
          <img
            src='/assets/iso.svg'
            alt='Interclubes DePádel'
            className='w-24'
          />
        </Link>
      </div>
      <div className='navbar-end'>
        <UserMenu />
      </div>
    </div>
  )
}

export default Header
