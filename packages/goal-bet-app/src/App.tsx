import './App.css'

import { Header } from './ components/Header'
import { ClaimBonus } from './ components/ClaimBonus'
import { MatchesList } from './ components/MatchesList';

function App() {
  return (
    <>
      <Header/>
      <ClaimBonus />
      <MatchesList />
    </>
  )
}

export default App
