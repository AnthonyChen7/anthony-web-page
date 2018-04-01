import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';

class App extends React.Component {
  render() {
    const appStyles = {
      padding: '5px 10px'
    };
    return (
      <div style={appStyles}>
        <HeaderBar />
      </div>
    );
  }
}

export default App;
