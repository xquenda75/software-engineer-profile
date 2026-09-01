import type { Persona } from '../data'

export default function Contacto({ persona }: { persona: Persona }) {
  return (
    <section className="seccion seccion-full seccion-contacto" id="contacto">
      <div className="seccion-contenido">
        <p className="seccion-tag">Hablemos</p>
        <h2 className="seccion-titulo">Contacto</h2>
        <p className="seccion-intro">
          ¿Tienes una oportunidad o proyecto en mente? Estoy disponible para nuevos retos.
        </p>
        <div className="contacto-grid">
          <a className="contacto-tarjeta" href={persona.linkedin} target="_blank" rel="noreferrer">
            <span className="contacto-icono">in</span>
            <span className="contacto-label">LinkedIn</span>
            <span className="contacto-desc">{persona.linkedinLabel}</span>
          </a>
          <a className="contacto-tarjeta" href={persona.github} target="_blank" rel="noreferrer">
            <span className="contacto-icono">&lt;/&gt;</span>
            <span className="contacto-label">GitHub</span>
            <span className="contacto-desc">{persona.githubLabel}</span>
          </a>
          <a className="contacto-tarjeta" href={`mailto:${persona.email}`}>
            <span className="contacto-icono">✉</span>
            <span className="contacto-label">Email</span>
            <span className="contacto-desc">{persona.email}</span>
          </a>
          <a className="contacto-tarjeta" href={`tel:${persona.telefono.replace(/\s/g, '')}`}>
            <span className="contacto-icono">✆</span>
            <span className="contacto-label">Teléfono</span>
            <span className="contacto-desc">{persona.telefono} · CDMX</span>
          </a>
        </div>
      </div>
    </section>
  )
}
