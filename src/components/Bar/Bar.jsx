import React, { useState , useEffect} from 'react'
import './Bar.css'


export const Bar = ({label}) => {
    const[progres , setProgres] = useState(0)

//      // Load progress from localStorage when the component mounts
//   useEffect(() => {
//     const savedProgres = localStorage.getItem(`progres-${label}`);
//     if (savedProgres) {
//       setProgres(parseInt(savedProgres, 10));
//     }
//   }, [label]);

//   // Save progress to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(`progres-${label}`, progres);
//   }, [progres, label]);

    const handelPlus =()=>{
        if(progres<100){
            setProgres(progres+5);
        }
    }
    const handelReset = () => {
           setProgres(0);
        }

    const getcolor=()=>{
        if(progres<30){
            return "#ff0000" ;  
        }
        else if(progres<60){
            return "#FFA500";
        }
        else{
            return "#008000";
        }
    }
  return (
    <>
        <div className='container'>
            <div className='box'>
                <div className='progres-bar'>
                    <div className='progres-bar-filler'
                            style={{ width:`${progres}%` , background: getcolor()}}>
                    </div>
                    <div className='progres-label'>{label}: {progres}%

                    </div>
                    <button className='btn' onClick={handelPlus}> Progress</button>
                    <button className='btn'  onClick={handelReset}> Reset</button>

                </div>
            </div>
        </div>

    </>
  )
}
