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
