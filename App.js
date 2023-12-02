import { AllRoutes } from "./routers/AllRoutes";
import { Header, Footer} from "./componenets"


function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;