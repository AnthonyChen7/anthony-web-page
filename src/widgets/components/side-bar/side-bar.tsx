import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib

// interface SideBarState {
//   currSelectedMenuOption?: MenuOptionsEnum;
// }

interface SideBarProps {
  menuOptionClicked: (menuOptionsEnum: MenuOptionsEnum) => void;
  menuOptions: MenuOptionsEnum[];
  currSelectedMenuOption: MenuOptionsEnum;
  isVisible: boolean;
}

export class SideBar extends React.Component<SideBarProps, {}> {
  MenuOptionsEnum = MenuOptionsEnum;
  constructor(props: SideBarProps) {
    super(props);
    this.state = {};
  }
  
  menuOptionClicked (menuOptionsEnum: MenuOptionsEnum) {
    this.setState({currSelectedMenuOption: menuOptionsEnum});
    this.props.menuOptionClicked(menuOptionsEnum);
  }

  renderIcons (menuOptionsEnum: MenuOptionsEnum) {
    switch (menuOptionsEnum) {
      case MenuOptionsEnum.AboutSite:
        return (<Icon name="info circle" />);

      case MenuOptionsEnum.Hobbies:
        return (<Icon name="book" />);

      case MenuOptionsEnum.Projects:
        return (<Icon name="folder" />);

      case MenuOptionsEnum.WorkExp:
        return (<Icon name="industry" />);

      default:
      case MenuOptionsEnum.AboutMe:
        return (<Icon name="user circle" />);
    }
  }

  render () {

    let listItems: JSX.Element[] = [];
    if (this.props.menuOptions) {
      listItems = this.props.menuOptions.map((menuOption, index) => {
        return (
          <Menu.Item 
            name={menuOption} 
            key={index} 
            onClick={() => this.menuOptionClicked(menuOption)}
            active={this.props.currSelectedMenuOption === menuOption}
            color={this.props.currSelectedMenuOption === menuOption ? 'blue' : undefined}
          >
              {this.renderIcons(menuOption)}
              {menuOption}
          </Menu.Item>
        );
      });
    }

    return (
      <Segment horizontal={true} basic={true}>
        <Menu vertical={true} inverted={true}>
            {listItems}
        </Menu>
      </Segment>
    );
  }
}