import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
    <nav className=" flex sm:justify-center space-x-4">
        {[
                ['Inicio', '/dashboard'],
                ['Verduras Congeladas', '/team'],
                ['Semillas', '/projects'],
                ['Contacto', '/reports'],
          ].map(([title, url]) => (
                    <a id='enlace' href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                                ))                        
        }
        <CartWidget/>
    </nav>
    </>
  )
}

export default NavBar