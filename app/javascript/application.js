// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Greeting from "./components/Greeting"

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
<App/>,
document.getElementById('root'),
);