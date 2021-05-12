import './App.css';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div class="banner">
        <img src="https://plchldr.co/i/970x250" alt="banner" />
      </div>
      <div class="main-text">
        <h1>Rodolfo Santana</h1>
        <h2>Full Stack Web Developer</h2>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.
            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis.
            Cevadis im ampola pa arma uma pindureta.</p>
      </div>
      <div class="demo">
        <div><image src="https://plchldr.co/i/200x300" alt="demo"/><p>asdasda</p></div>
        <image src="https://plchldr.co/i/200x300" alt="demo"/>
        <image src="https://plchldr.co/i/200x300" alt="demo"/>
      </div>
    </div>
  );
}

export default App;
