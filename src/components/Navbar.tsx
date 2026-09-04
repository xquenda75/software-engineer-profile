import { persona, navLinks } from '../data'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-marca">
          <span className="monograma">{iniciales(persona.nombre)}</span>
          <span className="navbar-nombre">Jorge López</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={`${import.meta.env.BASE_URL}documents/cv_jorge_lopez_2026_09.pdf`}  download="cv_jorge_lopez_2026_09.pdf">
          Download CV
        </a>
        <a className="nav-cta" href={`mailto:${persona.email}`}>
          Contáctame
        </a>
      </div>
    </nav>
  )
}

function iniciales(nombre: string): string {
  return nombre
    .split(' ')
    .filter((p) => p.length > 3)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}
