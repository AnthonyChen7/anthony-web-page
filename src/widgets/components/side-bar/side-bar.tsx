import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
// https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib

// TODO lift this state up to app
// TODO create list and make it iterate over it
interface SideBarState {
  currSelectedMenuOption: MenuOptionsEnum;
}

interface SideBarProps {
  menuOptionClicked: (menuOptionsEnum: MenuOptionsEnum) => void;
}

export class SideBar extends React.Component<SideBarProps, SideBarState> {
  MenuOptionsEnum = MenuOptionsEnum;

  menuOptions: MenuOptionsEnum[] = [
    MenuOptionsEnum.AboutMe,
    MenuOptionsEnum.WorkExp,
    MenuOptionsEnum.Projects,
    MenuOptionsEnum.Hobbies,
    MenuOptionsEnum.ContactInfo,
    MenuOptionsEnum.AboutSite
  ];
  menuOptionClicked (menuOptionsEnum: MenuOptionsEnum) {
    this.setState({currSelectedMenuOption: menuOptionsEnum});
    this.props.menuOptionClicked(menuOptionsEnum);
  }

  render () {
    const listItems = this.menuOptions.map((menuOption, index) => {
      return (
        <li key={index}>
         <span onClick={() => this.menuOptionClicked(menuOption)}>{menuOption}</span>
        </li>
      );
    });

    return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>);
  }
}