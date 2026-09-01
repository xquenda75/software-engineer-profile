import { competencias } from '../data'

interface HabilidadGrupo {
  titulo: string
  icono: string
  items: string[]
}

const grupos: HabilidadGrupo[] = [
  { titulo: 'Frontend', icono: '🧩', items: competencias.frontend },
  { titulo: 'Backend', icono: '⚙️', items: competencias.backend },
  { titulo: 'APIs', icono: '🔌', items: competencias.apis },
  { titulo: 'Bases de datos', icono: '🗄️', items: competencias.basesDeDatos },
  { titulo: 'Contenedores', icono: '🐳', items: competencias.contenedores },
  { titulo: 'Infraestructura', icono: '🏗️', items: competencias.infraestructura },
  { titulo: 'Observabilidad', icono: '📊', items: competencias.observabilidad },
  { titulo: 'CI/CD', icono: '🚀', items: competencias.cicd },
  { titulo: 'Arquitectura', icono: '🏛️', items: competencias.arquitectura },
]

export default function Habilidades() {
  return (
    <section className="seccion seccion-full seccion-habilidades" id="tecnologias">
      <div className="seccion-contenido">
        <p className="seccion-tag">Stack</p>
        <h2 className="seccion-titulo">Tecnologías</h2>
        <div className="habilidades-grid">
          {grupos.map((grupo, i) => (
            <div className="habilidad-card" key={i}>
              <div className="habilidad-card-head">
                <span className="habilidad-icono">{grupo.icono}</span>
                <h3 className="habilidad-categoria">{grupo.titulo}</h3>
              </div>
              <ul className="tags">
                {grupo.items.map((item, j) => (
                  <li className="tag" key={j}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
