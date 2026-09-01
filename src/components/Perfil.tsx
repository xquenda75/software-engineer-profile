import { perfil } from '../data'

export default function Perfil() {
  return (
    <section className="seccion seccion-full" id="perfil">
      <div className="seccion-contenido">
        <p className="seccion-tag">Sobre mí</p>
        <h2 className="seccion-titulo">Perfil profesional</h2>
        <div className="perfil-cuerpo">
          <div className="perfil-destacado">
            <span className="perfil-numero">20+</span>
            <span className="perfil-numero-label">años de experiencia</span>
          </div>
          <div className="perfil-textos">
            {perfil.map((parrafo, i) => (
              <p className="perfil-texto" key={i}>
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
