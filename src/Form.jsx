import {useState} from 'react'
import './Form.css'

function Form(){

    const [name, setName] = useState("Empada de Frango")
    const [description, setDescription] = useState("Empadas deliciosas")
    const [preco, setPreco] = useState("1")

    function saveProduct(){
        if(name === ''){
            alert('Preencha o campo')
        }
    }

    return(
        <div className='container-form'>
            <h1>Cadastro de empadas</h1>
            <form action="" onSubmit={saveProduct}>

                <label htmlFor="name">Nome do Produto</label>
                <input type="text" name="" id="name" value={name} onChange={(event) => {
                    setName(event.target.value)
                }} placeholder="Nome da empada" />


                <label htmlFor="descricao">Descrição</label>
                <textarea name="" id="descricao" value={description} onChange={(event) => {
                    setDescription(event.target.value)
                }} placeholder="Descrição da emprada"></textarea>

                <label htmlFor="preco">Preço</label>
                <input type="number" name="" id="preco" value={preco} min="0" onChange={(event) => {

                    const value = parseFloat(event.target.value)
                    if(!value) setPreco("")

                   
                    if(value >= 0){
                        setPreco(value)
                    }
                }}/>

                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default Form