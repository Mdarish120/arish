
import React ,{useState,useEffect} from 'react';
import Shade from './component/Shade';
import ShadeInput from './component/ShadeInput';
import   './App.css';
import randomColor from "randomcolor";



const  App=()=>{
 
    const [color,setColor]=useState("#000");

    useEffect(()=>{

        setColor(randomColor);
    },[]);
     
    const ChangeColor=(val)=>{
        setColor(val)
    }
    return( 
        <>
        <div className="App">
        <ShadeInput  color={color} ChangeColor={ChangeColor}/>
        <Shade  color={color}/>
     

        </div>
      
        </>
    );
}

export default App;