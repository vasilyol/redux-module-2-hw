import './App.css';
import Cart from './Components/Cart/Cart';
import Courses from './Components/CoursesComponents/Courses';
import AllCategories from './Components/Filter/AllCategories';


function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories/>
        <Cart/>
      </div> 
      <div className="block">
        <Courses/>
      </div>
    </div>
  );
}

export default App;
