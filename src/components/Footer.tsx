import './styles/Footer.scss'

import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons'

function mockRequest() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

// TODO email validation
// TODO request failed handling
// TODO empty fields handling
function Footer () {
  const [loading, setLoading] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [name, setName] = useState('')

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setHasSubmitted(true)

    try {
      setLoading(true)
      await mockRequest()
      setRequestSuccess(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const formName = formData.get('name') as string
      const firstName = formName.split(' ')[0]
      setName(firstName)
    } catch (e) {
      setRequestSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='footer'>
      <h3 className='footer__title'>
        Subscribe to receive our latest posts.
      </h3>

      {hasSubmitted && requestSuccess ? (
        <p className='footer__success-message'>
          Hi {name}, your email has been registered. :)
        </p>
      ) : (
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
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <FontAwesomeIcon icon={faEnvelope} />
            )}

            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}

export default Footer
