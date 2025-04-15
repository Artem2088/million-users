import { Footer, Header, Main } from '../index' 
import './App.scss'

const App = () => {

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main/>
        <Footer />
      </div>
    </div> 
  )
}

export default App
