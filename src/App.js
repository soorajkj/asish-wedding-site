import Couple from "./Components/Couple";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import WelcomeArea from "./Components/WelcomeArea";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Couple />
      <WelcomeArea />
    </div>
  );
};

export default App;
