import { idiomas } from '../data'

export default function Idiomas() {
  return (
    <section className="seccion seccion-full seccion-idiomas" id="idiomas">
      <div className="seccion-contenido">
        <p className="seccion-tag">Comunicación</p>
        <h2 className="seccion-titulo">Idiomas</h2>
        <div className="idiomas-grid">
          {idiomas.map((idioma, i) => (
            <div className="idioma-card" key={i}>
              <span className="idioma-banda">{idioma.nombre[0]}</span>
              <div>
                <h3 className="idioma-nombre">{idioma.nombre}</h3>
                <span className="idioma-nivel">{idioma.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
