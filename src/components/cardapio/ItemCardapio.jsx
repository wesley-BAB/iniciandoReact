import './ItemCardapio.css'
import PropTypes from 'prop-types'

function ItemCardapio ({title = 'Título padrão', description = 'Descrição padrão', price = 'Valor padrão'}) {
    return (
        <article className='cardapio-item'>
          <h3>{title}</h3>
          <p>{description} </p>
          <span>{price}</span>
         
          <button> 
            <img 
              src="https://cdn-icons-png.flaticon.com/32/733/733585.png" 
              alt="WhatsApp Icon" 
              width="15px" 
              style={{marginRight: "5px"}}/>
            Pedir no whatsapp
          </button>
        </article>

    )
}

ItemCardapio.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

export default ItemCardapio