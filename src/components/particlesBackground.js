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
              color: "#3CA9D1",
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
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
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
        zIndex: "-1",
      }}
    />
  )
}

export default ParticleBackground
