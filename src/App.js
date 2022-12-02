import './App.css';
import Questions from './Questions';
import data from './data'

function App() {
  return (
    <section className='section'>
      <Questions data={data}/>
    </section>
  );
}

export default App;
