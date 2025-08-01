// import React from 'react'

// function ColGen() {

//     function genHexCol() {
//          let [color,setColor] = useState()
//         let hexChars = '0123456789ABCDEF'
//         let hexColor = '#'
//         for(let i = 0; i<=5; i++){
//             hexColor += hexChars[Math.floor(Math.random()*16)]
//         }
//         setColor(hexColor)
        
//     }

//   return (
//     <section className='h-screen w-screen flex column justify-center mt-12 text-center'>
//         <div>
//             <button className='my-5 bg-red-400 py-4 px-5 border rounded text-white text-xl' onClick={genHexCol}>Generate Color</button>
//             <div className='h-[350px] w-[350px] mb-8' style={{backgroundColor:color}}></div>
//             <h2 className='text-xl'>HexCode:</h2>
//         </div>
//     </section>
//   )
// }

// export default ColGen



// 
import React, { useState } from 'react';

function ColGen() {
    const [color, setColor] = useState('#808080'); // Initialize state

    function genHexCol() {
        let hexChars = '0123456789ABCDEF';
        let hexColor = '#';
        for (let i = 0; i < 6; i++) { // Generate hex color
            hexColor += hexChars[Math.floor(Math.random() * 16)];
        }
        setColor(hexColor); // Update state
    }

    return (
        <section className='h-screen w-screen flex flex-col justify-center items-center mt-12 text-center'>
            <div>
                <button 
                    className='my-5 bg-red-400 py-4 px-5 border rounded text-white text-xl' 
                    onClick={genHexCol}
                >
                    Generate Color
                </button>
                <div 
                    className='h-[350px] w-[350px] mb-8 border border-black' 
                    style={{ backgroundColor: color }} // Use state variable correctly
                ></div>
                <h2 className='text-xl'>HexCode: <span className='font-bold'>{color}</span></h2> {/* Display color */}
            </div>
        </section>
    );
}

export default ColGen;
