import * as React from 'react';
import './header-bar.css';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';

interface HeaderBarProps {
  shouldShowSideBar: (isVisible: boolean) => void;
  showSideBar: boolean;
}

export class HeaderBar extends React.Component<HeaderBarProps, {}> {
  constructor(props: HeaderBarProps) {
    super(props);
  }

  showCorrectIcon(isSideBarVisible: boolean) {
    return !isSideBarVisible ? 'angle double right' : 'angle double left';
  }

  render () {
    return  (
      <Segment className="header" horizontal={true} basic={true}>
          <Header as="h1" block={true} inverted={true} className="header-container">
            <div className="header-icons-container">
              <Icon name={this.showCorrectIcon(this.props.showSideBar)} onClick={() => this.props.shouldShowSideBar(!this.props.showSideBar)}/>
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