
import About from './Components/about/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Intro from './Components/Introduction/Intro.js';
import ProductList from './Components/productList/ProductList.jsx';


function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
