import Top from './top'
import Hero from './hero'
import mainData from './mainData'
import Main from './main'
import './App.css';

function App() {
  const mainElement = mainData.map(main =>{
    return <Main
        key= {main.id}
        {...main}
    />
  })
  return (
    <div className="App">
      <Top/>
      <Hero/>
     <section className='list'>
        {mainElement}
     </section>
    </div>
  );
}

export default App;
