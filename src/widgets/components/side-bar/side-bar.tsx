import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
// https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib

interface SideBarState {
  currSelectedMenuOption?: MenuOptionsEnum;
}

interface SideBarProps {
  menuOptionClicked: (menuOptionsEnum: MenuOptionsEnum) => void;
  menuOptions: MenuOptionsEnum[];
}

export class SideBar extends React.Component<SideBarProps, SideBarState> {
  MenuOptionsEnum = MenuOptionsEnum;
  constructor(props: SideBarProps) {
    super(props);
    this.state = {};
  }
  
  menuOptionClicked (menuOptionsEnum: MenuOptionsEnum) {
    this.setState({currSelectedMenuOption: menuOptionsEnum});
    this.props.menuOptionClicked(menuOptionsEnum);
  }

  render () {

    let listItems: JSX.Element[] = [];
    if (this.props.menuOptions) {
      listItems = this.props.menuOptions.map((menuOption, index) => {
        return (
          <li key={index}>
            <span onClick={() => this.menuOptionClicked(menuOption)}>
              {menuOption}
            </span>
          </li>
        );
      });
    }

    return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>);
  }
}