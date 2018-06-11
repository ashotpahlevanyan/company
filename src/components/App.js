import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UpToTop from './UpToTop';

class App extends Component {
  render() {
    return (
      <div className="app">
				<Header />
	      <Main />
	      <Footer />
				<UpToTop />
      </div>
    );
  }
}

export default App;
