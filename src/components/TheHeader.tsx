import logo from '@/assets/logo.svg'
import './styles/TheHeader.scss'

function TheHeader() {
  return (
    <header className='the-header'>
      <img src={logo} alt='website logo'/>
    </header>
  )
}

export default TheHeader
