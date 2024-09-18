
// import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos"
import Banner from "./MyComponents/Banner"
import Footer from "./MyComponents/Footer"


function App() {
  let todos = [
   
    {
      sno:1,
      title: "coding lecture 1",
      description: "do it now !!!!"
  
     },
     {
      sno:2,
      title: "coding lecture 2",
      description: "do it now !!!!"
  
     },
     {
      sno:3,
      title: "coding lecture 3",
      description: "do it now !!!!"
  
     },


  ]
  return (
    <div style={{ fontFamily: 'Gotham, sans-serif' }}>
    <Header/>
    <Banner/>
    <Todos todos={todos}/>
    <Footer/>
    
      </div>
  )
};

export default App;
