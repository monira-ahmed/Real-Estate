import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "./App.css"
import GetStarted from "./components/GetStarted/GetStarted";
function App() {
    return (
        <div className="App">
          <div>
            <div className="white-gradient"/>
            <Header/>
            <Hero/>
          </div>
          <GetStarted/>
        </div>
    );

}
export default App;