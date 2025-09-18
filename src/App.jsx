import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>
     
    <Suspense fallback = { <h1 className='text-blue-600 animate-pulse text-center'>Data is loading.... Please wait!</h1> }>
      <Countries countriesPromise = {countriesPromise} ></Countries>
    </Suspense>
     
    </>
  )
}

export default App
