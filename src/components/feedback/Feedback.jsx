import './feedback.css'

function Feedback({header = 'Header Padrão', description = 'Descrição Padrão'}){
    return (
        <li>
            <article>
                <header>{header}</header>
                <p>{description}</p>
            </article>
        </li>
    )
}

export default Feedback