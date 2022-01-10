import './App.css'
import Header from './component/Header'
import Pages from './component/Pages'
import Profile from './component/Profile'
import Tabs from './component/Tabs'

function App() {
   return (
      <div className="App">
         <div className="navigation-container">
            <Header />
         </div>
         <div>
            <Tabs />
         </div>
         <div className="main-container">
            <Profile />
            <Pages />
         </div>
      </div>
   )
}

export default App
