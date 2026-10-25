import Conditional from "./components/Conditional"
import Events from "./components/Events"
import JsxUnderstand from "./components/JsxUnderstand"
import List from "./components/List"
import ListKey from "./components/ListKey"
import PropsUnderstand from "./components/PropsUnderstand"
import TernaryOp from "./components/TernaryOp"

function App() {
  let pass_props= "Tata"
  
  return (
    <div>
      <h1>Hello world !</h1>
     <JsxUnderstand name='yuvraj'/>
     {/* pass props  */}
     <PropsUnderstand brand={"mahindra"}/>
     {/* also we can do */}
     <PropsUnderstand brand={pass_props}/>
     {/* now events in react  */}
     <Events/>

     {/* conditional react  */}
     <Conditional isGoal={false}/>
     <Conditional isGoal={true}/>

     {/* ternary operator  */}
     <TernaryOp isPlayer={true}/>

     {/* render List of item using map */}
     <List/>
     {/* list with key */}
     <ListKey/>

    </div>
  )
}

export default App
