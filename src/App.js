import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import './App.css';

function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
