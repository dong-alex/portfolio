import React from "react"
import Particles from "react-particles-js"

const ParticleBackground = () => {
  return (
    <Particles
      width="100%"
      height="100%"
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "#212121",
        zIndex: "-500",
      }}
    />
  )
}

export default ParticleBackground
