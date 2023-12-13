import './styles/TheHeader.scss'

import logo from '@/assets/logo.svg'

function TheHeader() {
  return (
    <header className='the-header'>
      <img src={logo} alt='website logo'/>
    </header>
  )
}

export default TheHeader
