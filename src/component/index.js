import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row} from 'react-bootstrap';
import "../style/bootstrap3/react-bootstrap-switch.min.css";

import {InternalState} from './internal-state';
import {ExternalState} from './external-state';
import {Disabled} from './disabled';
import {Inverse} from './inverse';
import {Tristate} from './tristate';
import {OnText} from './on-text';
import {OffText} from './off-text';
import {HandleWidth} from './handle-width';
import {Size} from './size';
import {Readonly} from './readonly';
import {OnColor} from './on-color';
import {LabelWidth} from './label-width';
import {Animate} from './value';
import {Indeterminate} from './indeterminate';
import {OffColor} from './off-color';
import {LabelText} from './label-text';

import SimpleExplain from "./complex-example";


class Examples extends React.Component {
  render() {
    return (
        <Grid>
          <Row>
            <h1>Examples</h1>
          </Row>
          <Row>
            <SimpleExplain />

            <InternalState />
            <Size />
            <Animate />

            <ExternalState />
            <Disabled />
            <Readonly />

            <Inverse />
            <OnColor />
            <OffColor />

            <LabelText />
            <OnText />
            <OffText />

            <Indeterminate />
            <HandleWidth />
            <LabelWidth />

            <Tristate />
          </Row>
        </Grid>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));