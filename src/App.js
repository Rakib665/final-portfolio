import './App.css';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Portfolio from './Component/Portfolio/Portfolio';
// import Testimonial from './Component/Testimonial/Testimonial';

function App() {
  return (
    <div >
      <Header></Header>
      <Home></Home>
      <Portfolio></Portfolio>
      <Contact></Contact>

      {/* <Testimonial></Testimonial> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
