export default function AWS({ servicios }: { servicios: string[] }) {
  return (
    <section className="seccion seccion-full seccion-aws" id="aws">
      <div className="seccion-contenido">
        <p className="seccion-tag">Nube</p>
        <h2 className="seccion-titulo">AWS</h2>
        <p className="seccion-intro">
          Servicios de Amazon Web Services que he implementado e integrado en soluciones cloud de
          microservicios.
        </p>
        <ul className="aws-grid">
          {servicios.map((servicio, i) => (
            <li className="aws-servicio" key={i}>
              <span className="aws-logo">☁</span>
              {servicio.replace('AWS ', '')}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
