import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha"
import Alert from "react-bootstrap/Alert"
import * as qs from "query-string"

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
  const [enableSubmission, setEnableSubmission] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("Thank")
  const [recaptcha, setRecaptcha] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const isFormComplete = () => {
    return name !== "" && email !== "" && message !== ""
  }

  useEffect(() => {
    if (isFormComplete()) {
      setEnableSubmission(true)
    } else {
      setEnableSubmission(false)
    }
  }, [message, email, name])

  useEffect(() => {
    if (feedbackMessage !== "") {
      setShow(true)
    }
  }, [feedbackMessage])

  useEffect(() => {
    if (!show) {
      setFeedbackMessage("")
    }
  }, [show])

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const resetForm = () => {
    setName("")
    setMessage("")
    setEmail("")
    setRecaptcha(null)
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleRecaptcha = value => {
    setRecaptcha(value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!recaptcha) {
      setFeedbackMessage("Please complete the recaptcha")
      setError(true)
      return
    }

    const form = event.target

    let formData = {
      name,
      email,
      message,
      "g-recaptcha-response": recaptcha,
      "form-name": form.getAttribute("name"),
    }

    console.log(encode(formData))
    console.log(qs.stringify(formData))
    if (~document.location.host.indexOf("localhost")) {
      setFeedbackMessage("Thank you, your inquiry has been sent.")
      return
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData),
      })
        .then(() => {
          setFeedbackMessage("Thank you, your inquiry has been sent.")
          setError(false)
          resetForm()
        })
        .catch(err => {
          setFeedbackMessage(
            "There was an error with your inquiry, please try again!"
          )
          setError(true)
          alert(err)
        })
    }
  }

  return (
    <>
      <Header>
        <h2>Contact</h2>
      </Header>
      {feedbackMessage && (
        <Alert
          show={show}
          variant={error ? "danger" : "success"}
          className="text-justify"
          dismissible
          onClose={() => setShow(false)}
        >
          {feedbackMessage}
        </Alert>
      )}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden aria-hidden="true">
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
        {enableSubmission && (
          <CaptchaContainer
            sitekey={process.env.GATSBY_RECAPTCHA_KEY}
            onChange={handleRecaptcha}
            theme="dark"
          />
        )}
        <input
          disabled={!enableSubmission}
          type="submit"
          value="Submit"
          class="btn btn-dark btn-block"
        />
      </form>
    </>
  )
}

export default NetlifyForm
