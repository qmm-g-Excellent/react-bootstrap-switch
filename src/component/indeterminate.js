import React from 'react';
import { Col, Button, FormGroup } from 'react-bootstrap';

import Switch from 'react-bootstrap-switch';

export class Indeterminate extends React.Component {

  _clickToggle(){
    const val = this.switch.value();
    this.switch.value(val === null ? true : null);
  }

  render(){
    return (
      <Col xs={6} md={4}>
        <h3>Indeterminate</h3>
        
        <form>
          <FormGroup>
            <Switch ref={e => this.switch = e} defaultValue={null}  />
          </FormGroup>

          <FormGroup>
            <Button onClick={this._clickToggle.bind(this)} >Toggle</Button>
          </FormGroup>
        </form>
      </Col>
    );
  }
}