import { useContext } from 'react'
import CalculoContext from '../context/CalculoProvider'

const useCalculo = () => {
    return useContext(CalculoContext);
}

export default useCalculo