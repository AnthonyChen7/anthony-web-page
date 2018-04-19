import * as React from 'react';
import './about-site.css';
import { Container, Header } from 'semantic-ui-react';

export class AboutSite extends React.Component {
  render () {
    return (
      <Container>
        <Header as="h2">About this site</Header>
        <p>This personal website was created using the React (Typescript) framework. I created this website because I figured it was time that I had a personal website of my own. I chose to use React because I was curious about it and it was suggested by a co-worker that React was worth learning if I wanted to continue to pursue my career as a frontend software developer.</p>

        <p>I chose to use Typescript over Javascript because</p>
        <ul>
          <li>
            It has compile time checking. In case the code base increases and if I end up having a parnter to help me out with development of this website, being able to know the variable will help reduce potential major problems in the future.
          </li>
          <li>
            At this time of writing, I am mainly an Angular2 developer. By sticking with using some things I know, it can help me reduce a bit of learning with the React framework.
          </li>
        </ul>

        <p>I chose to use the Semantic UI (for React) CSS framework because</p>
        <ul>
          <li>
            I've used Bootstrap for past personal projects and at work and initially for this project. Bootstrap didn't quite give me the looks I was envisioning in this website and I wanted to experiment and play around with other CSS frameworks. So far, I'm liking Semantic UI. Not only does it gives me the looks I envisioned, the libraries and it's provided widgets are somewhat easy to use.
          </li>
          <li>
            Link for reference: 
            <a href="https://react.semantic-ui.com/introduction">https://react.semantic-ui.com/introduction</a>
          </li>
        </ul>

        <p>This website uses Redux to handle storing/management of the state because:</p>
        <ul>
          <li>
            I was curious about how it was set up in the first place. So I thought I'd give it a try. It took me around 16 hours to set it up beecause:
            <ul>
              <li>
                From Googling around, most Redux set up tutorial assumes that you're using Javascript for React.
              </li>
              <li>
                Of the tutorials I've found that involved Typescript-React, it was a little bit hard following their example/code snippets.
              </li>
              <li>
                In the end, this was the tutorial I've used to set up Redux: 
                <a href="https://alexzywiak.github.io/react-redux-with-typescript/index.html">https://alexzywiak.github.io/react-redux-with-typescript/index.html</a>
              </li>
            </ul>
          </li>
          <li>
            I admit that using Redux for this personal website is a bit overkill because there is only 1 state. So just storing the state locally was sufficient. However, I thought that in case this personal website became an even bigger project in the far future, at least it will be set up properly to handle state management.
          </li>
        </ul>

        <p>Future plans for this website (in no order of priority):</p>
        <ul>
          <li>
            Make the menu on the left hand side use a Semantic UI side bar widget because it looks and feels cooler.
          </li>
          <li>
            Refactor the the page components. Right now, each page is it's own component. At the end of the day, each page will just contain text that is inside a Semantic UI component. I should refactor to make things simpler and cleaner. Imagine if I were to add another page into this website in the future, it would require me creating another copy pasted component file.
          </li>
          <li>
            This might be too ambitious, but store all the texts and formatting somehow in a JSON file and somehow be able to parse the JSON file and render it as text on the page. I think this will be a cool feature and an interesting challenge. At the same time, it will provide me a lot of flexibililty once implemented; I just need to make changes inside a JSON file rather than go into the code to make changes.
          </li>
        </ul>
        
      </Container>
    );
  }
}