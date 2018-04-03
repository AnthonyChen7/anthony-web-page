import * as React from 'react';
import './side-bar.css';
import { MenuOptionsEnum } from '../../models/menu-options-enum';
export class SideBar extends React.Component {
  MenuOptionsEnum = MenuOptionsEnum;
  render () {
    return (
    <div>
      <ul>
        <li>{MenuOptionsEnum.AboutMe}</li>
        <li>{MenuOptionsEnum.WorkExp}</li>
        <li>{MenuOptionsEnum.Projects}</li>
        <li>{MenuOptionsEnum.Hobbies}</li>
        <li>{MenuOptionsEnum.ContactInfo}</li>
        <li>{MenuOptionsEnum.AboutSite}</li>
      </ul>
    </div>);
  }
}