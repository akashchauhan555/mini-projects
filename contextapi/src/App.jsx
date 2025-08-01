import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import BankState from './contextapi/BankState'

function App() {


  return (
    <>
    <BankState>
    <Navbar/>
    <Home/>
    </BankState>
    </>
  )
}

export default App
  