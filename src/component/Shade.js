import React ,{useState,useEffect} from 'react';
import Values from "values.js";
import isColor from "is-color";
import Shaa from  './Shaa';

const Shade=({color})=>{ 
 

    const [shade,setShade]=useState([]);
    useEffect(()=>{

        if(isColor(color)){
            create() ; 
        }
    
      },[color]);

          const create=()=>{
              const val=new Values(color).shades(1);
              setShade(val);
          }

         
  
    return(<>
    <div className="shades"> 
   
    { shade.map((vi)=>{
        return  (   <Shaa  vi={vi}   />
);
    })
    
    
    
    }
     
    </div>
    </>);
}

export default Shade; 