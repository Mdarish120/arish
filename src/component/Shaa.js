
import React, {useState,useEffect} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Shaa=({vi})=>{
  const [copied,setCopied] =useState(false);

  useEffect(()=>{
      let interval;
      if(copied===true){
          interval=setInterval(()=>{
              setCopied(false);
          },1200);

          return ()=>{
              clearInterval(interval);
          }
      }
  },[copied])

    const action=()=>{
        setCopied(true);
      
    }
    return(
        <>
        <CopyToClipboard text={vi.hexString()} onCopy={()=>action()}>

        <div className="shade"  style={{backgroundColor:vi.hexString()}}>

            {
                copied?(<span className="copied">copied</span>):(  <span>  { vi.hexString()}</span>) 
            }
     

         </div>
        </CopyToClipboard>
       
        </>
    );
}

export default Shaa;