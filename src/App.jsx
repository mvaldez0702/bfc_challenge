import AppHealth from "./components/AppHealth";
import {CalculoProvider} from "./context/CalculoProvider";

function App() {

  return (
    <CalculoProvider>
      <header>
        <h1>Health Overview</h1>
      </header>
      <AppHealth />

    </CalculoProvider>
  )
}

export default App
