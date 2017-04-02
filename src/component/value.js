import React from 'react';
import { Col, Button, FormGroup } from 'react-bootstrap';

import Switch from 'react-bootstrap-switch';


export class Animate extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      animate: true
    };
  }

  _clickToggle(){
    console.log("jjjjjjj");

    this.setState({
      animate: !this.state.animate
    });
  }

  render(){
    return (
      <Col xs={6} md={4}>
        <h3>Animate</h3>
        
        <form>
          <FormGroup>
            <Switch  value={this.state.animate}/>
          </FormGroup>
          <FormGroup>
            <Button onClick={this._clickToggle.bind(this)} >Toggle</Button>
          </FormGroup>
        </form>
      </Col>
    );
  }
}