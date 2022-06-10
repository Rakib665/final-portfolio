import './App.css';
import Footer from './Component/Footer';
// import Features from './Component/Features/Features';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';

function App() {
  return (
    <div >
      <Header></Header>
      <Home></Home>
      {/* <Features></Features> */}
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
