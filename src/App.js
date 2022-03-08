import React, {Fragment} from 'react';
import PageOne from './components/PageOne';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import classes from './App.module.css';
import PageThree from './components/PageThree';
import PageTwo from './components/PageTwo';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className={classes.container}>
            <Routes>
              <Route path='/' element={<PageOne />} />
              <Route path='/pageTwo' element={<PageTwo />} />
              <Route path='/pageThree' element={<PageThree />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
