import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';
import { AboutMe } from './widgets/components/about-me/about-me';
import { Footer } from './widgets/components/footer/footer';
// import { SideBar } from './widgets/components/side-bar/side-bar';

class App extends React.Component {
  render() {
    return (
      <div className="app-style">
        <div className="header"><HeaderBar /></div>
        <div className="content"><AboutMe /></div>
        <div className="footer"><Footer /> </div> 
      </div>
    );
  }
}

export default App;
