import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';
import { AboutMe } from './widgets/components/about-me/about-me';
import { Footer } from './widgets/components/footer/footer';
import { SideBar } from './widgets/components/side-bar/side-bar';

class App extends React.Component {
  render() {
    // don't apply styles because here is always rendered first
    // note that header isn't stickied
    // note that style can't be applied to react component, so wrap them inside div and then apply
    return (
      <div className="app-style">
        <div>
          <HeaderBar />
        </div>

        <div className="content">
          <div className="navigation">
            <SideBar />
          </div>

          <div className="section">
            <AboutMe />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
