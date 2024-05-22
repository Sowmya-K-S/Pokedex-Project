import {useState, useEffect} from 'react'

//--------------CONCEPT OF USE EFFECT----------------------
        
// UseEffect(Callback, dependency array)
// Call back tells what to execute
//dependency array tells when to execute
// -> When dependency array is not passed, then the callback executes when each and every component in the page re-renders
// -> when dependency array is passed empty, then the callback executes only when any component renders first time
// -> when dependency array is passed with some state variables to track, then the callback executes only when those state variables render and re-render


function PokemonList()
{
        //----------EXAMPLE FOR CONCEPT OF USE EFFECT------------

        // let [x,setx] = useState(0)
        // let [y,sety] = useState(0)

        // useEffect(()=>{ console.log("Hello")

        // },[x])

        // return(

        //         <>
        //         <div>
        //                 x: {x}
        //                 <button onClick={()=>setx(x+1)}>inc</button>
        //         </div>
            
        //         <div>
        //                 y: {y}
        //                 <button onClick={()=>sety(y+1)}>inc</button>
        //         </div>
        //      </>
        // )          
         
   
        
}

export default PokemonList