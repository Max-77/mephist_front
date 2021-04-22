import * as React from "react";

import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./Components/Themes/DarkThemeProvider";
import store from "./store";
import DarkThemeToggle from "./Components/Themes/ThemeToggle";
import {Router} from "./pages/Router"

const App: React.FC = () =>(
    <ReduxProvider store={store}>
        <DarkThemeToggle/>
        <DarkThemeProvider>
            <Router/>
        </DarkThemeProvider>
    </ReduxProvider>
);

export default App;