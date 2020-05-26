import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import ArrowRightCircle from "../static/arrow-right-circle.svg"

const StyledLink = styled(AniLink)`
  user-select: none;
  margin: 0 0 0 0.8rem;

  img {
    margin: 0;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`
const RedirectSpan = styled.span`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 1.5rem;
  text-decoration: none;
  user-select: none;
  text-transform: uppercase;
`

const RedirectLink = props => {
  const { text, to } = props
  return (
    <RedirectSpan>
      {text}
      <StyledLink paintDrip hex="#212121" to={to} duration={1}>
        <img src={ArrowRightCircle} alt="right arrow" />
      </StyledLink>
    </RedirectSpan>
  )
}

export default RedirectLink
