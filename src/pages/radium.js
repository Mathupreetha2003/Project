import Radium from 'radium';
import React from 'react';
  
function Radium1() {
    const style={
        ':hover':{
          backgroundColor: 'green'
        }
      }
  return(
<div>

<button style={style}>example of radium</button>
</div>


  )
}
  
export default Radium(Radium1);