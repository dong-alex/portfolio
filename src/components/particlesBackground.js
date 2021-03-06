import React from "react"
import Particles from "react-particles-js"

const ParticleBackground = () => {
  return (
    <Particles
      width="100%"
      height="100%"
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#ffffff",
              blur: 5,
            },
          },
          number: {
            value: 30,
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
        backgroundColor: "#000000",
        zIndex: "-1",
      }}
    />
  )
}

export default ParticleBackground
