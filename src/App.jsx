import './App.css'
import ContactUS from './components/contato/ContactUS'
import Header from './components/header/Header'
import ItemCardapio from './components/cardapio/ItemCardapio'
import Feedback from './components/feedback/Feedback'


function App() {

  return (
    <div>

      <Header />

      <section>
        <h2>Nosso Cardápio</h2>
        <div className='container-cardapio'>
          <ItemCardapio 
            title="Empada de Carne" 
            description="Deliciosa empada recheada com carne desfiado e temperos especiais." 
            price="R$ 6,00" 
          />

          <ItemCardapio 
            title="Empada de Frango" 
            description="Deliciosa empada recheada com frango desfiado e temperos especiais." 
            price="R$ 8,00" 
          />

          <ItemCardapio 
            title="Empada de Camarão" 
            description="Deliciosa empada recheada com camarao desfiado e temperos especiais." 
            price="R$ 7,00" 
          />

          <ItemCardapio 
            title="Pastel" 
            description="Delicioso pastel recheado com frango desfiado e temperos especiais." 
            price="R$ 10,00" 
          />
          
          <ItemCardapio />


        </div>
      </section>

      <ContactUS />

      <h2>Feedbacks de clientes</h2>
      <section className='container-feedback'>
        <ul>
          <Feedback 
            header="Wesley Dev"
            description="Excelente empadas de Carne, JS é vida"
          />

          <Feedback 
            header="Marcelo Dev"
            description="Excelente empadas de Carne, BI é vida"
          />

          <Feedback 
            header="João Dev"
            description="Excelente empadas de Carne, React é vida"
          />

          <Feedback />
        </ul>
      </section>
    </div>
  )
}

export default App