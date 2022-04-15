import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Child1 from './components/Child1';

function App() {
  return (
    <div>
      <Parent>
        <Child1 />
        <Child1 />
      </Parent>
    </div>
  );
}

export default App;
