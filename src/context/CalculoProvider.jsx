import { useState, createContext } from 'react'

const CalculoContext = createContext()

const CalculoProvider = ({children}) => {

    const initialState = {
        genero: '',
        altura: '',
        peso: '',
        cintura: '',
        cuello: '',
        cadera: '',
    };

    const validacionesInit = {
        altura: false,
        peso: false,
        cintura: false,
        cuello: false,
        cadera: false
    };

    const [busqueda, setBusqueda] = useState(initialState)
    const [resultado, setResultado] = useState('')
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)
    const [validaciones, setValidaciones] = useState(validacionesInit);


    const datosBusqueda = e => {
        const checkNumber = e.target.value;
        const checkName = e.target.name;
        if (checkNumber !== '' && checkName !== 'genero') {
            if (parseInt(checkNumber,10) < 1 ) {
                if (busqueda.genero === 'mujer' && checkName === 'cadera') {
                    setValidaciones({
                        ...validaciones,
                        [e.target.name]: true
                    })
                }else if (busqueda.genero === 'hombre' && checkName !== 'cadera'){
                    setValidaciones({
                        ...validaciones,
                        [e.target.name]: true
                    })
                }else {
                    setValidaciones({
                        ...validaciones,
                        [e.target.name]: false
                    })
                }
            }else{
                setValidaciones({
                    ...validaciones,
                    [e.target.name]: false
                })
            }
        }
        console.log(checkNumber);
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    };

    const clear = () => {
        setBusqueda(initialState);
        setResultado('');
        setValidaciones(validacionesInit);
    };

    const consultarResultado = async datos => {
        setCargando(true);
        setNoResultado(false);
        try {
            
            const {genero, altura, peso, cintura, cuello,cadera} = datos;
            parseFloat(altura);
            parseFloat(peso);
            parseFloat(cintura);
            parseFloat(cuello);
            parseFloat(cadera)
            if (genero === 'hombre') {
                const total = Math.round((86.01 * (Math.log(cintura * 1 - cuello * 1) / Math.log(10)) - 70.041 * (Math.log(altura) / Math.log(10)) + 30.3 * 1) * 100) / 100;
                setResultado(total);
            } else {
                const total = Math.round((163.205 * (Math.log(cintura * 1 + cadera * 1 - cuello * 1) / Math.log(10)) - 97.684 * (Math.log(altura) / Math.log(10)) - 104.912 * 1) * 100) / 100;
                setResultado(total);
            }

        } catch (error) {
             setNoResultado('No hay resultados');
        } finally {
            setCargando(false)
        }

    }

    return (
        <CalculoContext.Provider
            value={{
                busqueda,
                validaciones,
                datosBusqueda,
                consultarResultado,
                clear, 
                resultado,
                cargando,
                noResultado
            }}
        >
            {children}
        </CalculoContext.Provider>
    )
}

export {
    CalculoProvider
}
export default CalculoContext