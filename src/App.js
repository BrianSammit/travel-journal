import './App.css';
import Navbar from './components/navbar'
import Card from './components/card'
import data from './components/data'


function App() {
  const dataElement = data.map(data => {
    return <Card
      key={data.id}
      data={data}
    />
  })


  return (
    <div className="App">
      <Navbar />
      <div className='app--cards_elements'> {dataElement} </div>
    </div>
  );
}

export default App;
