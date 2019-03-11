import React from 'react';


export default function EventPhases(props) {
    function clickHandler(event) {
      console.log(`event.target.className: ${event.target.className}`);
      console.log(`event.currentTarget.className: ${event.currentTarget.className}`);

      setTimeout(() => {
        event.currentTarget.
      }, 500);
    }

    const styles = {
        'outer': {
            'width':'8em',
            'height':'8em',
            'backgroundColor':'red'
        },
        'inner':{
            'width':'5em',
            'height':'5em',
            'backgroundColor':'blue'
        }
    }

    return  (
      <div className="outer" onClick={clickHandler} style={styles.outer}>
        <div className="inner" onClick={clickHandler} style={styles.inner}></div>
      </div>
    )
  }