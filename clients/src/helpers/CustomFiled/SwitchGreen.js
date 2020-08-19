import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Switch } from '@material-ui/core';
function SwitchGreen(props) {
    const PurpleSwitch = withStyles({
        switchBase: {
          color: "white",
          '&$checked': {
            color: green[500],
          },
          '&$checked + $track': {
            backgroundColor: green[500],
          },
        },
        checked: {},
        track: {},
      })(Switch);
    return (
        <PurpleSwitch {...props} />
        
    )
}
export default SwitchGreen;
