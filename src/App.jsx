import './App.css'
import Card from './comp/Card'

function App() {
  return (

    <>
    <h2 className='text-3xl font-bold text-center my-[40px]'>Welcome to my Card</h2>
    <div className='grid grid-cols-3 gap-10'>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
    
    </>
  )
}



export default App
