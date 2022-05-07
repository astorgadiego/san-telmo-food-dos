import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
    <nav className=" flex sm:justify-center space-x-4">
        {[
                ['Inicio', '/Inicio'],
                ['Verduras Congeladas', '/VerduraCongelada'],
                ['Semillas', '/Semilla'],
                ['Contacto', '/Contacto'],
                [<CartWidget/>, '/Carrito'],
          ].map(([title, url]) => (
                    <a id='enlace' href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                                ))                        
        }
        
    </nav>
    </>
  )
}

export default NavBar