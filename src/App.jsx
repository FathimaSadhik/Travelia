import './App.css'
import Booking from './components/Booking/Booking'
import CustomerRating from './components/Customer/CustomerRating'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Memories from './components/Memories/Memories'
import Navdesign from './components/Navdesign'
import Search from './components/Searches/Search'
import Trips from './components/Trips/Trips'

function App() {
  

  return (
   <>
     <Navdesign/>
      <div  className='main'> 
      <Header/>
      <Memories/>
      </div>
      <Trips/>
    <Search/>
    <div className='main'>
    <CustomerRating/>
    {/* <About/> */}
    <Booking/>
    </div>
    <Footer/>
   </>
  )
}

export default App
