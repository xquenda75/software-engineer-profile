import { experiencia, type Experiencia as ExperienciaType } from '../data'

export default function Experiencia() {
  return (
    <section className="seccion seccion-full seccion-experiencia" id="experiencia">
      <div className="seccion-contenido">
        <p className="seccion-tag">Trayectoria</p>
        <h2 className="seccion-titulo">Experiencia profesional</h2>

        {experiencia.map((job, i) => (
          <JobCard job={job} key={i} />
        ))}
      </div>
    </section>
  )
}

function JobCard({ job }: { job: ExperienciaType }) {
  if (job.destacada) {
    return (
      <article className="job job-destacada">
        <div className="job-cabecera">
          <div className="job-titulos">
            <h3 className="job-cargo">{job.cargo}</h3>
            <p className="job-empresa">
              {job.empresa} {job.ubicacion ? `· ${job.ubicacion}` : ''}
            </p>
          </div>
          <span className="job-periodo">{job.periodo}</span>
        </div>

        <p className="job-resumen">{job.resumen}</p>

        <h4 className="job-subtitulo">Proyectos</h4>
        <div className="proyectos-grid">
          {job.proyectos?.map((proyecto, j) => (
            <div className="proyecto-card" key={j}>
              <span className="proyecto-badge">{String(j + 1).padStart(2, '0')}</span>
              <h5 className="proyecto-nombre">{proyecto.nombre}</h5>
              <p className="proyecto-desc">{proyecto.descripcion}</p>
            </div>
          ))}
        </div>

        <h4 className="job-subtitulo">Responsabilidades</h4>
        <ul className="job-responsabilidades">
          {job.responsabilidades?.map((fn, j) => (
            <li key={j}>{fn}</li>
          ))}
        </ul>
      </article>
    )
  }

  return (
    <article className="job">
      <div className="job-cabecera">
        <div className="job-titulos">
          <h3 className="job-cargo">{job.cargo}</h3>
          <p className="job-empresa">
            {job.empresa} {job.ubicacion ? `· ${job.ubicacion}` : ''}
          </p>
        </div>
        <span className="job-periodo">{job.periodo}</span>
      </div>
      <p className="job-descripcion">{job.descripcion}</p>
    </article>
  )
}
