import React from "react";
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "bottom: 56.25%",
        postition: "relative",
        dispaly: "block",
        width: "100%",
    },
    frame: {
        postition: "absolute",
        top: '0',
        left: '0',
        border: 'none',
    }
}));

function WidgetSky () {
    const classes = useStyles ();
  return (
    <>
      <div className={classes.root} id="Container">
        
        <Iframe id="ViostreamIframe" className={classes.frame}
            width="100%" 
            height="100%"
            src="https://embed.flightaware.com/commercial/integrated/web/delay_map.rvt"
            frameborder="0" 
            allowfullscreen="">
        </Iframe>
    </div>
    </>
  );
}

export default WidgetSky;
