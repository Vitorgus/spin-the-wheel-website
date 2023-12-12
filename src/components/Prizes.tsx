import './styles/Prizes.scss'

import prizes from '@/data/prizes.json'

// TODO modal when clicking on prize
function Prizes () {
  return (
    <section className='prizes'>
      <div className='prizes__wrapper'>
        <h3 className='prizes__title'>
          Some of the pizes available
        </h3>

        <ul className='prizes__gallery'>
          {prizes.map((prize, i) => (
            <li className='prizes__gallery-item'>

              <img className='prizes__gallery-item-image'src={prize.imageUrl} alt={prize.imageAlt}/>
              <p className='prizes__gallery-item-tag'>
                Prize {i+1}
              </p>
              <p>
                {prize.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Prizes
