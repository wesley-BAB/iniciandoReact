import {useState} from 'react'

function Contador(){
    const [contador, setContador] = useState(0)


    function acrescentarValorContador(){
        setContador(contador + 1)
    }

    return(
        <div>
            <p>O valor atual do contador é {contador}</p>
            <button onClick={acrescentarValorContador}>Alterar</button>
        </div>
    )
}

export default Contador