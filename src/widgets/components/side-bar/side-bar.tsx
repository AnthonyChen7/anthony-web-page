import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
export class SideBar extends React.Component {
  MenuOptionsEnum = MenuOptionsEnum;

  menuOptionClicked (menuOptionsEnum: MenuOptionsEnum) {
    alert(menuOptionsEnum);
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