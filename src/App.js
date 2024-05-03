
import BasicExample from "./components/accordeon/accordeon";
import Company from "./components/company/company";
import Cripto from "./components/cripto/cripto";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import News from "./components/news/news";
import AllSlider from "./components/slider/AllSlider";





function App() {
  return (
    <div className="App">
      <Header/>
      <AllSlider/>
      <Cripto/>
      <Company/>
      <News/>
      <BasicExample/>
      <Footer/>
    </div>
  );
}

export default App;
