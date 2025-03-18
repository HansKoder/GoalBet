import './App.css'

import { Header } from './ components/Header'
import { ClaimBonus } from './ components/ClaimBonus'
import { MatchesList } from './ components/MatchesList';
import { ProfileWallet } from './ components/ProfileWallet';

function App() {

  return (
    <>
      <Header/>
      <ProfileWallet />
      <ClaimBonus />
      <MatchesList />
    </>
  )
}

export default App
