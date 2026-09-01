import React from 'react'
import { persona } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">
        <div className="hero-contenido">
          <p className="hero-saludo">Hola, soy</p>
          <h1 className="hero-nombre">{persona.nombre}</h1>
          <p className="hero-titulo">{persona.titulo}</p>
          <p className="hero-subtitulo">{persona.subtitulo}</p>
          <div className="hero-roles">
            {persona.roles.map((rol, i) => (
              <React.Fragment key={i}>
                <span className="hero-rol">{rol}</span>
                {i < persona.roles.length - 1 && <span className="hero-sep">•</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="hero-acciones">
            <a className="hero-btn hero-btn-primario" href="#experiencia">
              Ver experiencia
            </a>
            <a className="hero-btn" href={`mailto:${persona.email}`}>
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
