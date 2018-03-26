import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
      </div>
    );
  }
}

export default App;
