import Radium from 'radium'
import React from 'react'
import { ClearFix } from 'material-ui'

import Burger from './Burger';
import WrapPresets from './WrapPresets';
import Widget1x1 from './Widget1x1';
import Widget2x1 from './Widget2x1';
import Widget3x1 from './Widget3x1';
import Widget3x1Full from './Widget3x1Full';

class Wrapper extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>

        <Burger />

        <ClearFix style={styles.widgetContainer}>
          <Widget3x1Full />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <WrapPresets />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />

          <Widget2x1 />
          <Widget2x1 />

          <Widget1x1 />
          <Widget3x1 />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <WrapPresets />
        </ClearFix>

        <ClearFix style={styles.widgetContainer}>
          <Widget3x1Full />
        </ClearFix>

      </div>
    )
  }
}

let styles = {
  wrapper: {
    display: 'block',
    padding: '16px',
    marginLeft: '0px',

    '@media (min-width: 1054px)': {
      marginLeft: '300px',
    },
  },
  widgetContainer: {
    margin: '0 -8px',
  }
}

module.exports = Radium(Wrapper)
