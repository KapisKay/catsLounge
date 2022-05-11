import './App.css';
import Contact from './Contact/Contact';
import { Cats } from './cats';
import Header from './Header/Header';

function App() {
  const cats = Cats.map((cat, i) => {
    return( <Contact 
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