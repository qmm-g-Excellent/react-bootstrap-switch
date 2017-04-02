import React from 'react';
import {Col, FormGroup, FormControl} from 'react-bootstrap';

import Switch from 'react-bootstrap-switch';


export class HandleWidth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 100
    };
  }

  // componentDidMount() {
  //   document.getElementById('switch-width').value = this.state.width;
  // }

  _onChange(e) {
    console.log("kkkk");

    const width = parseInt(e.target.value, 10);

    if (isNaN(width))
      return;

    this.setState({
      width
    });
    this.width.value = this.state.width;

  }

  render() {
    return (
        <Col xs={6} md={4}>
          <h3>Handle Width</h3>

          <form>
            <FormGroup>
              <Switch handleWidth={this.state.width}/>
            </FormGroup>

            <FormGroup>
              <FormControl id="switch-width" type="text"
                           onChange={this._onChange.bind(this)}
                           value={this.state.width}/>
            </FormGroup>
          </form>
        </Col>
    );
  }
}