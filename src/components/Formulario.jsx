import { useState } from 'react'
import useCalculo from "../hooks/useCalculo"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
    Grid,
    Button
  } from '@mui/material';

const Formulario = () => {
    
    const [alerta, setAlerta] = useState('')
    const { busqueda, validaciones, datosBusqueda, consultarResultado, clear } = useCalculo();

    const {genero, altura, peso, cintura, cuello, cadera} = busqueda;

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(busqueda);
        if (genero === 'mujer') {
            if(Object.values(busqueda).includes('')) {
                setAlerta('Todos los campos son obligatorios');
                return
            }else{
                setAlerta('');
            }
        } else {
            if(
                genero === '' ||
                altura === '' ||
                peso === '' || 
                cintura === '' ||
                cuello === ''
            ) {
                setAlerta('Todos los campos son obligatorios');
                return
            }else {
                setAlerta('');
            }
        }
        

        consultarResultado(busqueda);

    };

    const handleClear = () => {
        clear();
    };

    return (
        <div className="contenedor">
            <h1>Calculadora de Grasa Corporal</h1>

            <p>
                El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera
                sencilla de calcular un aproximado del porcentaje de tejido en el cuerpo de
                una persona.
            </p>
            <p>
                Los valores requeridos por la fórmula son los siguientes:
            </p>

            {alerta && <p style={{color:'red'}}>* {alerta}</p>}

            <form
                onSubmit={handleSubmit}
            >
                <Grid>
                    <FormControl>
                        <FormLabel id="genero" style={{color:'#e5e5e5'}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="genero"
                            onChange={datosBusqueda}
                        >
                            <FormControlLabel value="hombre" control={<Radio checked={genero !== '' && genero === 'hombre'} sx={{color: '#e5e5e5','&.Mui-checked': {color: '#795dd7'}}}/>} label="Hombre" />
                            <FormControlLabel value="mujer" control={<Radio checked={genero !== '' && genero === 'mujer'} sx={{color: '#e5e5e5','&.Mui-checked': {color: '#795dd7'}}}/>} label="Mujer" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <div className="campo">
                    <label htmlFor="altura" style={{color:'#e5e5e5'}}>Altura (cm)</label>
                    <input 
                        id="altura"
                        name="altura"
                        type="number"
                        value={altura}
                        onChange={datosBusqueda}
                    />
                    {validaciones.altura ? <small style={{color:'red'}}>* Introduce un valor valido</small>: null}
                </div>
                <div className="campo">
                    <label htmlFor="peso" style={{color:'#e5e5e5'}}>Peso (kg)</label>
                    <input 
                        id="peso"
                        name="peso"
                        type="number"
                        value={peso}
                        onChange={datosBusqueda}
                    />
                    {validaciones.peso ? <small style={{color:'red'}}>* Introduce un valor valido</small>: null}
                </div>
                <div className="campo">
                    <label htmlFor="cintura" style={{color:'#e5e5e5'}}>Cintura (cm)</label>
                    <input 
                        id="cintura"
                        name="cintura"
                        type="number"
                        value={cintura}
                        onChange={datosBusqueda}
                    />
                    {validaciones.cintura ? <small style={{color:'red'}}>* Introduce un valor valido</small>: null}
                </div>
                <div className="campo">
                    <label htmlFor="cuello" style={{color:'#e5e5e5'}}>Cuello (cm)</label>
                    <input 
                        id="cuello"
                        name="cuello"
                        type="number"
                        value={cuello}
                        onChange={datosBusqueda}
                    />
                    {validaciones.cuello ? <small style={{color:'red'}}>* Introduce un valor valido</small>: null}
                </div>
                {busqueda.genero === 'mujer' ?
                    <div className="campo">
                        <label htmlFor="cuello" style={{color:'#e5e5e5'}}>Cadera (cm)</label>
                        <input 
                            id="cadera"
                            name="cadera"
                            type="number"
                            value={cadera}
                            onChange={datosBusqueda}
                        />
                        {validaciones.cadera ? <small style={{color:'red'}}>* Introduce un valor valido</small>: null}
                    </div>
                : null
                }

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth={false}
                  className="btn-preferences"
                  sx={{
                    color:'#e5e5e5',
                    backgroundColor:'#795dd7',
                    borderRadius:'70px'
                  }}
                >
                  Calcular
                </Button>
                <Button
                  onClick={() => { handleClear(); }}
                  variant="text"
                  fullWidth={false}
                  className="btn-preferences"
                  sx={{
                    color:'#e5e5e5',
                    borderRadius:'70px',
                    marginLeft: '20px',
                  }}
                >
                  Limpiar
                </Button>
            </form>
        </div>
    )
}

export default Formulario