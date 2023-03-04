import './App.css';
import Result from './Components/Result';
import Search from './Components/Search';

function App() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto mt-2 p-3 shadow-xl'>
        <Search />
        <Result />
      </div>
    </>
  );
}

export default App;
