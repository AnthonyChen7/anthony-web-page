import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
// https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib
interface PassedProps extends React.Props<MenuOptionsEnum> {
  // currSelectedMenuOption: MenuOptionsEnum
  menuOptionClicked: (menuOptionsEnum: MenuOptionsEnum) => void;
}

export class SideBar extends React.Component<PassedProps, any> {
  MenuOptionsEnum = MenuOptionsEnum;

  menuOptionClicked (menuOptionsEnum: MenuOptionsEnum) {
    // this.setState({currSelectedMenuOption: menuOptionsEnum});
    this.props.menuOptionClicked(menuOptionsEnum);
  }

  render () {
    return (
    <div>
      <ul>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.AboutMe)}>{MenuOptionsEnum.AboutMe}</span>
        </li>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.WorkExp)}>{MenuOptionsEnum.WorkExp}</span>
        </li>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.Projects)}>{MenuOptionsEnum.Projects}</span>
        </li>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.Hobbies)}>{MenuOptionsEnum.Hobbies}</span>
        </li>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.ContactInfo)}>{MenuOptionsEnum.ContactInfo}</span>
        </li>
        <li>
         <span onClick={() => this.menuOptionClicked(MenuOptionsEnum.AboutSite)}>{MenuOptionsEnum.AboutSite}</span>
        </li>
      </ul>
    </div>);
  }
}