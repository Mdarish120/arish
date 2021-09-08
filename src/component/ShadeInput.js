import React from 'react';
const ShadeInput=(props)=>{

    return(
        <>
        <div className="shadeSearch">
          <div className="Emoji"  >  🗻 🗼 🗽   </div>
      
              <input type="text"  className="shade-Input"  
              
              value={props.color}
              onChange={(e)=>{props.ChangeColor(e.target.value)}}

              placeholder="Enter the color name"
              />

         

          <div className="Emoji"  >   🗾🗼 🗿   </div>

        

        </div>
        </>
    );
}

export default ShadeInput;