import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';
import { AboutMe } from './widgets/components/about-me/about-me';

class App extends React.Component {
  render() {
    const appStyles = {
      padding: '5px 10px'
    };
    return (
      <div style={appStyles}>
        <HeaderBar />
        <AboutMe />
      </div>
    );
  }
}

export default App;
