import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const LogoSpan = styled.span`
  display: flex;
  align-items: center;
`

const StyledImage = styled(Image)`
  margin-right: 0.5rem;
`

// compatible with fixed gatsby-image items
const LogoItem = props => {
  const { text, image, alt } = props
  return (
    <LogoSpan>
      <StyledImage fixed={image} alt={alt} draggable={false} fadeIn={false} />
      {text}
    </LogoSpan>
  )
}

export default LogoItem
