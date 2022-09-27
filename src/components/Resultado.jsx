import useCalculo from "../hooks/useCalculo";
import Barra from "./barra";
const Resultado = () => {

    const { resultado } = useCalculo();
    console.log(typeof resultado );

    return (
        <div className="contenedor clima">
            <h2>Tu Resultado: {resultado} </h2>

            
            <Barra resultado={resultado}/>
          
        </div>
    )
}

export default Resultado