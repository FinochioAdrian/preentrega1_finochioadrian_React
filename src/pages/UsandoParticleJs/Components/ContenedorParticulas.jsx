
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import particlesConfig from "../particlesjs-config2";
import './ContenedorParticulas.css'



const ContenedorParticulas = () => {




  const particlesInit = useCallback(async engine => {
    console.log(engine);
      await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);


  return (
    <>
    
    <div className="container-style">
    <div className="container-title"><h1>Web Design Ideas</h1></div>
    <div className="particles-background">
      {/* Puedes colocar la imagen de fondo aquí */}
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      
    </div>
    
    </div>
    
    </>
  )
}

export default ContenedorParticulas