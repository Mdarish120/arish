import React from 'react';
const ShadeInput=(props)=>{

    return(
        <>
        <div className="shadeSearch">
          <div className="Emoji"  >  π» πΌ π½   </div>
      
              <input type="text"  className="shade-Input"  
              
              value={props.color}
              onChange={(e)=>{props.ChangeColor(e.target.value)}}

              placeholder="Enter the color name"
              />

         

          <div className="Emoji"  >   πΎπΌ πΏ   </div>

        

        </div>
        </>
    );
}

export default ShadeInput;