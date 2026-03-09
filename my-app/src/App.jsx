import Styles from'./App.module.css'
import AppHeader from "./components/app-header/app-header.jsx";
import AppMain from "./components/app-main/app-main.jsx";


function App() {

    return (
        <div className={Styles.container}>
            <AppHeader/>
            <AppMain/>
        </div>
    );
}

export default App
