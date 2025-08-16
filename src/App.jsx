import Header from "./layout/Header.jsx"
import './App.css'
import FirstProps from "./components/FirstComponents.jsx"
import FirstUseState from "./components/FirstUseState.jsx"
import FirstUseChange from "./components/FirstUseChange.jsx"

const firstProps = "Hola!!, esta es una prop"

function App() {
  return (
    <>
    <div className="w-full max-w-400 mx-auto bg-gray-200 p-4">
      <Header />
      <FirstProps  firstProps={ firstProps } />
      <FirstUseState />
      <FirstUseChange />
    </div>
    </>
  )
}

export default App
