import * as React from 'react';
import './hobbies.css';
import { Container, Header, Table } from 'semantic-ui-react';

export class Hobbies extends React.Component {
  render () {
    return (
      <Container>
        <Header as="h2">Hobbies</Header>
        <p>In my spare time, aside from learning/reading up new technology, I like to play badminton.</p>

        <Header as="h4">Badminton</Header>
        <p>I like playing badminton because I think it's fun and it's a good way to work up a sweat. Currently, I'm getting coached. At the moment, I'm learning the proper footwork technique and trying to use the proper footwork to move to the birdie in a natural way. What I hope to master one day is to be able to:</p>
        <ul>
          <li>Do a cross court net shot</li>
          <li>Do a backend smash</li>
          <li>Do a backend cross court (drop) shot</li>
        </ul>
        <p>For now, I will just be patient continue to learn the proper fundamentals.</p>

        <Header as="h5">Racket(s) I'm using / I've used:</Header>
        <Table celled={true} padded={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Racket Name</Table.HeaderCell>
              <Table.HeaderCell>String</Table.HeaderCell>
              <Table.HeaderCell>Pounds of Tension</Table.HeaderCell>
              <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Yonex ArcSaber 10</Table.Cell>
            <Table.Cell>BG65</Table.Cell>
            <Table.Cell>35 lbs.</Table.Cell>
            <Table.Cell>The frame is very very light and combined with the BG65 it makes controlling the birdie very easy. Also, I sort of like how my sweet spot's area is pretty large. One thing I don't like is that the repulsion is soft. This means that when I smash, the birdie doesn't go fast enough.</Table.Cell>
          </Table.Row>
      </Table.Body>
        </Table>
      </Container>
    );
  }
}