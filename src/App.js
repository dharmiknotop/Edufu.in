import './App.css'
import Courses from './component/courses/Courses'
import Footer from './component/footer/Footer'
import Heading from './component/heading/Heading'
import Home from './component/Home/Home'
import Item from './component/item/Item'
import Register from './component/register/Register'

function App() {
  return (
    <div className="App">
      <Home />
      <div className="container">
        <Heading heading="Trending Insitutes" />
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className="container">
        <Heading heading="Trending Insitutes" />
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Courses />
      <div className="container">
        <Heading heading="Top Insitutes" />
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className="container">
        <Heading heading="Top Insitutes" />
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Register />
      <Footer />
      <div className="Footer d-flex justify-content-between">
        <span className="text-muted p-2 ms-5">Terms & Conditions</span>
        <span className="text-muted p-2 me-5">
          ©2018 - Edufu technologies Pvt. Ltd. | All right reserved
        </span>
      </div>
    </div>
  )
}

export default App
