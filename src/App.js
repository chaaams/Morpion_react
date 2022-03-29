import logo from './logo.svg';
import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className="app-header">
      <p className="heading-text">Morpion avec React</p>
      <div className=" row jc-center">
        <Square className="b-bottom-right"/>
        <Square className="b-bottom-right"/>
        <Square className="b-bottom"/>
      </div>
      <div className=" row jc-center">
        <Square className="b-bottom-right"/>
        <Square className="b-bottom-right"/>
        <Square className="b-bottom"/>
      </div>
      <div className=" row jc-center">
        <Square className="b-right"/>
        <Square className="b-right"/>
        <Square/>
      </div>
      <button className='rejouer-button'>Rejouer</button>
      <p className='fc-aqua fw-600'>Chamssoudine DIABY- 2022</p>
    </div>
  );
}

export default App;
