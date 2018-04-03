import * as React from 'react';
import './side-bar.css';
export class SideBar extends React.Component {
  render () {
    return (
    <div>
      <ul>
        <li>About Me</li>
        <li>Work Experience</li>
        <li>Projects</li>
        <li>Hobbies</li>
      </ul>
    </div>);
  }
}