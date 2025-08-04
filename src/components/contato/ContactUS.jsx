import './ContactUs.css'

function ContactUS(){
    return (
        <section className="container-contato">
        <h2>Contato</h2>
        <form action="#">
          <input type="text" name="" id="" placeholder="Digite seu nome" />
          <input type="tel" name="" id="" placeholder="(47) 99999-9999" pattern="\(\d{2}\)\s\d{5}-\d{4}" />
          <textarea name="" id="" rows="5" cols="2" />
          <input type="submit" value="Enviar" />
        </form>
      </section>
    )
}

export default ContactUS