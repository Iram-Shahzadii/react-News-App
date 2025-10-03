import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App=()=>{
  const [category,setCategory] = useState("general");
  return(
    //my div
    <div>
<Navbar setCategory={setCategory}/>
<NewsBoard category={category}/>

    </div>

  )
}
export default App
