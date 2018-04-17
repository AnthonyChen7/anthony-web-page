import * as React from 'react';
import './header-bar.css';
import { Header, Segment } from 'semantic-ui-react';
export class HeaderBar extends React.Component {
  render () {
    return  (
    <div className="header">
      <Header as="h1" textAlign="center" block={true}>Anthony Chen</Header>
    </div>
    );
  }
}