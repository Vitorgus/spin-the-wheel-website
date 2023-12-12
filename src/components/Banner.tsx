import './styles/Banner.scss'

// TODO add banner image
// TODO banner image animation
// TODO banner wheel spin
function Banner () {
  return (
    <section className='banner'>
      <div className='banner__wrapper'>
        <h1 className='banner__title'>
          Spin to Win
        </h1>

        <h3 className='banner__subtitle'>
          Spin the wheel to win prizes
        </h3>

        <p className='banner__text'>
          Here you can add a few sentences explaining what prizes can be won and any other information you want people to know
        </p>

        <button className='banner__button'>
          Play Now
        </button>
      </div>
    </section>
  )
}

export default Banner
