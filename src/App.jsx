import { Provider } from "react-redux"
import Body from "./Components/Body"
import ImportantNews from "./Components/ImportantNews"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { appStore } from "./Utils/Store"

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/importantnews" element={<ImportantNews/>}/>
        </Routes>
      </Router>
    </div>
    </Provider>
  )
}

export default App
