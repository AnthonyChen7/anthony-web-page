import * as React from 'react';
import './about-me.css';
import { Jumbotron } from 'react-bootstrap';
import { Container, Divider } from 'semantic-ui-react';
export class AboutMe extends React.Component {
  render () {
    return (
      <div>
        <Container textAlign="justified">
          <p>Hi my name is Anthony Chen and welcome to my personal website!</p>
          <p>I graduated from UBC in 2017 with a bachelor's degree in Computer Science & Statistics.</p>
          <p>Right now, at this stage in my life and at this point in time, I'm interested in specializing and pursuing a career as a front end software developer.</p>
          <Divider />
          <p>Why pursue only a career in front end software development?</p>
        </Container>
       </div>
    );
  }
}