
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Users from './Components/Users/Users'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      <div className='container mx-auto'>
        
        <Header></Header>
        <div className=' flex bg-teal-500'>
                <div className='flex-1 ml-6'> 
                    <Users ></Users>
                </div>
                <div className='flex-1'> 
                                
                    <Outlet></Outlet>
                </div>
            
            </div>
        <Footer></Footer>
      </div>
        
    </>
  )
}

export default App
