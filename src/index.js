import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/index.css';
import App from '@containers/App/App';
import reportWebVitals from './reportWebVitals';
import store from "@store/store"
import {Provider} from "react-redux";
import ThemeProvider from "@context/ThemeProvider";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
