const config ={

    fullScreen: { enable: false },
    
  background: {
      color: {
          value: "transparent",
      },
  },
  fpsLimit: 60,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 5,
          },
          repulse: {
              distance: 100,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: ['#FF6C22', '#FF9209'],
      },
      links: {
          color: "#FFD099",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 2.5,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 650,
          },
          value: 90,
      },
      opacity: {
          value: 0.8,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 2, max: 5 },
      },
  },
  detectRetina: true,
}


export default config;