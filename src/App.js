import { Provider } from "react-redux";
import store from "./utils/store";
import Mainapp from "./component/Mainapp";

function App() {
  return (
    <Provider store={store}>
      <Mainapp />
    </Provider>
  );
}

export default App;
