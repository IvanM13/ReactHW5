import './App.css';
import {Provider} from "react-redux";
import store from "./module/store";
import ThemeContainer from "./components/ThemeContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeContainer>
            <h1>Сменить тему</h1>
            <ThemeSwitcher/>
        </ThemeContainer>
      </Provider>
    </div>
  );
}

export default App;