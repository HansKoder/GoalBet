import './App.css'

import { Header } from './ components/Header'
import { ClaimBonus } from './ components/ClaimBonus'
import { Match } from "./ components/Match"
import { Bet } from "./ components/Bet";

function App() {
  return (
    <>
      <Header/>
      <ClaimBonus />
      <Bet />
      <Match />
    </>
  )
}

export default App
