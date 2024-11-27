import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "./component/Footer/Footer.scss"

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container container">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default App;