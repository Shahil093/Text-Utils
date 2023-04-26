import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Quotes from './components/Quotes';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/Footer';
import React, { useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleMode = (cls)=>{
   // removeBodyClasses()
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled, Refresh to return", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled, Refresh to return", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    
    
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route path="/quotes" component={Quotes} />
          <Route exact path="/quotes">
            <About mode={mode} />
          </Route>

          <Route path="/blog" component={Blog} />
          <Route exact path="/blog">
          <About mode={mode} />
          </Route>

          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces, speech" mode={mode}/>
          </Route>

          <Blog/>

          
    </Switch>
    
     <Footer style={{ marginBottom: '50px' }} />

    </div>
    </Router>
    </> 
  );
}

export default App;