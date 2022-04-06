import "./App.css";

//context
import { ItemContextProvider } from "./context/ItemContextProvider";

//component
import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";

function App() {
  return (
    <ItemContextProvider>
      <div className="App">
        <AllItems />
        <SelectedItems />
      </div>
    </ItemContextProvider>
  );
}

export default App;
