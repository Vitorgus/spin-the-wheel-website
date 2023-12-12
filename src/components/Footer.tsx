import './styles/Footer.scss'
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function mockRequest() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function Footer () {
  const [loading, setLoading] = useState(false)

  let handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setLoading(true)
    await mockRequest()
    setLoading(false)
  }

  return (
    <section className='footer'>
      <h3 className='footer__title'>
        Subscribe to receive our latest posts.
      </h3>

      <form className='footer__form' onSubmit={handleFormSubmit}>
        <fieldset className='footer__form-group'>
          <label htmlFor="name" className='footer__form-label'>
            Name
          </label>

          <input
            type='text'
            id='name'
            name='name'
            placeholder='Type your name'
            className='footer__form-input'
          />
        </fieldset>

        <fieldset className='footer__form-group'>
          <label htmlFor="email" className='footer__form-label'>
            Email
          </label>

          <input
            type='text'
            id='email'
            name='email'
            placeholder='Type your email'
            className='footer__form-input'
          />
        </fieldset>

        <button
          type='submit'
          className='footer__form-button'
          disabled={loading}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default Footer
