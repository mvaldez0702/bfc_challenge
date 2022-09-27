import Formulario from "./Formulario";
import Loading from "./Loading";
import Resultado from "./Resultado";
import useCalculo from "../hooks/useCalculo";


const AppHealth = () => {

  const { resultado="", cargando, noResultado } = useCalculo()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            { 
              cargando ? <Loading /> : 
              resultado ? <Resultado /> :
              noResultado ? <p>{noResultado}</p>
              : null
            }
            
        </main>
    </>
  )
}

export default AppHealth