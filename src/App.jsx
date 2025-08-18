import Header from "./layout/Header.jsx"
import './App.css'
import FirstProps from "./components/FirstComponents.jsx"
import FirstUseState from "./components/FirstUseState.jsx"
import FirstUseChange from "./components/FirstUseChange.jsx"
import Contador from "./components/Contador.jsx"
import TodoList from "./components/ToDoList.jsx"

const firstProps = "Hola!!, esta es una prop"

function App() {
  return (
    <>
    <div className="w-full max-w-400 min-h-screen mx-auto bg-gray-200 p-4">
      <Header />
      <FirstProps  firstProps={ firstProps } />
      <FirstUseState />
      <FirstUseChange />
      <Contador />
      <TodoList />
    </div>
    </>
  )
}

export default App
