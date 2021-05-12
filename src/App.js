import Nav from './components/Nav';
import banner from './970x250.png'
import Gallery from './components/Gallery';
import Text8col from './components/Text8col';
import Text4col from './components/Text4col';
import GallerySquare from './components/GallerySquare';

import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="main-text">
        <h1>Rodolfo Santana</h1>
        <h2>Full Stack Web Developer</h2>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.
            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis.
            Cevadis im ampola pa arma uma pindureta.</p>
      </div>
      <Gallery />
      <section id="about" className="section">
          <h2 className="section-title">Sobre</h2>
          <div className="flex">
            <Text8col />
            <Text4col />
          </div>
          <Gallery />
          <div className="card-basic-color">
            Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.
            Detraxit consequat et quo num tendi nada.
          </div>
      </section>
      <section id="portifolio" className="section">
        <h2 className="section-title">Portfólio</h2>
        <div className="card-basic-color">
            Filtro por tecnologia
        </div>
          <GallerySquare />
          <GallerySquare />
      </section>
    </div>
  );
}

export default App;
