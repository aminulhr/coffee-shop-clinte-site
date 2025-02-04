import { useLoaderData } from "react-router-dom";
import CoffeeHome from "./Components/CoffeeHome";

function App() {
  const coffees = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 ">
        {coffees.map((coffee) => (
          <CoffeeHome key="coffee._id" coffee={coffee}></CoffeeHome>
        ))}
      </div>
    </div>
  );
}

export default App;
