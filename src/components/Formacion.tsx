import { formacion } from '../data'

export default function Formacion() {
  return (
    <section className="seccion seccion-full seccion-formacion" id="formacion">
      <div className="seccion-contenido">
        <p className="seccion-tag">Académico</p>
        <h2 className="seccion-titulo">Formación</h2>
        <div className="formacion-grid">
          {formacion.map((f, i) => (
            <div className="formacion-card" key={i}>
              <span className="formacion-escudo">🎓</span>
              <div>
                <h3 className="formacion-titulo">{f.titulo}</h3>
                <p className="formacion-institucion">{f.institucion}</p>
                <span className="formacion-periodo">{f.periodo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
