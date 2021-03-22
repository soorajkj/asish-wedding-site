import CountDown from "./Components/CountDown";
import Couple from "./Components/Couple";
import Event from "./Components/Event";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import WelcomeArea from "./Components/WelcomeArea";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <CountDown />
      <Couple />
      <WelcomeArea />
      <Event />
    </div>
  );
};

export default App;
