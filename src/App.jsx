import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Content from "./components/Content"
import Home from "./components/Home"
import Navber from "./components/Navber"
import Blog from "./components/Blog"


function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Route>
    )
  )

  return (
    <>
     <Navber></Navber>
     <RouterProvider router={myroute}/>
     
    </>
  )
}

export default App
