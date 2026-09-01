import { persona, competencias } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Habilidades from './components/Habilidades'
import AWS from './components/AWS'
import Formacion from './components/Formacion'
import Idiomas from './components/Idiomas'
import Contacto from './components/Contacto'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main>
        <Perfil />
        <Experiencia />
        <Habilidades />
        <AWS servicios={competencias.cloud} />
        <Formacion />
        <Idiomas />
      </main>

      <Contacto persona={persona} />

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {persona.nombre} · {persona.titulo} · Construido con React
        </p>
      </footer>
    </div>
  )
}
