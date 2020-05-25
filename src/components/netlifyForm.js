import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Header = styled.span`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const NetlifyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleMessageChange = event => {
    console.log(event.target.value)
    setMessage(event.target.value)
  }

  const handleNameChange = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const handleSubmit = () => {
    console.log(name, email, message)
  }

  return (
    <>
      <Header>
        <h2>Contact</h2>
      </Header>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
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
          />
        </div>
        <input type="submit" value="Submit" class="btn btn-dark btn-block" />
      </form>
    </>
  )
}

export default NetlifyForm
