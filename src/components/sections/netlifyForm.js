import React from "react"
import styled from "styled-components"

const Header = styled.span`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const NetlifyForm = () => {
  return (
    <>
      <Header>
        <h2>Contact</h2>
      </Header>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
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
