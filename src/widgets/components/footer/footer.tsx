import * as React from 'react';
import './footer.css';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
export class Footer extends React.Component {
  render () {
    return (
          <Header as="h3" block={true} inverted={true} className="footer-container">
            <div className="footer-start">
              <div>Contact Information</div>
            </div>
            <div className="footer-middle">
              <div>Email: achen7x7@gmail.com</div>
            </div>
            <div className="footer-end">
              <div>Cell: 778-929-9381</div>
            </div>
          </Header>
    );
  }
}