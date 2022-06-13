import './App.css';
import Cat from './Cat/Cat';
import { Cats } from './cats';
import Header from './Header/Header';

function App() {
  const cats = Cats.map((cat, i) => {
    return( <Cat 
     key={i}
     item =  {cat}
     /> )
  })
  return (
    <div>
      <Header />
      <section className="cat-container">
        {cats}
      </section>
    </div>
  );
}

export default App;
// name= {cat.name}
//      image={cat.image}
//      breed ={cat.breed}
//      color = {cat.color} 
//      sold = {cat.sold}