
import React from "react"
import { Route,Routes } from "react-router-dom"
import Layout from "./layout/layout"
function App() {

  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={<Layout/>}>
        
        
      </Route>
    </Routes>
    </React.Fragment>
  )
}

export default App
