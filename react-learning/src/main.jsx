import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// import { createRoot } from "react-dom/client";

// // Create a variable that contains HTML code and display it in the "root" node:
// const myElement = (
//   <div>
//     <h1>company</h1>
//     <table>
//       <tr>
//         <th>jio</th>
//       </tr>
//       <tr>
        
//         <th>airtal</th>
//       </tr>
//       <tr>
//         <th>starLink</th>
//       </tr>
//     </table>
//   </div>
// );

// createRoot(document.getElementById("root")).render(<h1>{myElement}</h1>);
