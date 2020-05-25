import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha"

const Header = styled.span`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const CaptchaContainer = styled(ReCAPTCHA)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const NetlifyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [enableCaptcha, setEnableCaptcha] = useState(false)

  const isFormComplete = () => {
    return name !== "" && email !== "" && message !== ""
  }

  useEffect(() => {
    if (isFormComplete()) {
      setEnableCaptcha(true)
    } else {
      setEnableCaptcha(false)
    }
  }, [message, email, name])

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  return (
    <>
      <Header>
        <h2>Contact</h2>
      </Header>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            class="form-control"
            aria-label="e-mail"
            aria-describedby="email-field"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input
            type="text"
            class="form-control"
            name="name"
            aria-label="Name"
            aria-describedby="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Message</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        {enableCaptcha && (
          <CaptchaContainer
            sitekey={process.env.GATSBY_RECAPTCHA_KEY}
            theme="dark"
          />
        )}
        <input type="submit" value="Submit" class="btn btn-dark btn-block" />
      </form>
    </>
  )
}

export default NetlifyForm
