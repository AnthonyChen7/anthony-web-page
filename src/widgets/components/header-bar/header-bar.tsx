import * as React from 'react';
import './header-bar.css';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
export class HeaderBar extends React.Component {
  render () {
    return  (
      <Segment className="header" horizontal={true} basic={true}>
          <Header as="h1" block={true} inverted={true} className="header-container">
            <div className="header-icons-container">
              <Icon name="angle double right" />
            </div>
            <div className="header-title-container">
              <Header.Content>
                Anthony Chen
              </Header.Content>
            </div>
          </Header>
      </Segment>
    );
  }
}