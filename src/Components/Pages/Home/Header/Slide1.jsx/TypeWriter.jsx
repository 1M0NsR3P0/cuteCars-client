import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './banner.css'

// npm i typewriter-effect to install module
const TypeWriter = () => {
    const [start,setStart] = useState(false)
    return (
        <div className='text-5xl'>
        <div className='flex gap-4'>
            <Typewriter
                options={{
                    cursor:'',
                    autoStart: true,
                    delay: 5,
                    loop: false,
                    
                }}
                
                onInit={(typewriter) => {
                    typewriter.typeString(`<p class="fontStyle">Race into Fun: </p>`)
                    .callFunction(() => {
                        // console.log('')
                        setStart(true)
                      })
                    .start();
                }}
                />
            {
                
            }
            <Typewriter
                
                options={{
                    cursor:'',
                    strings: ['<p class="fontStyle">Welcome to our<br/> <span class="text-pink-700">Cute-Car Shop</span></p>','<p class="fontStyle">Discover the Ultimate <br/> Toy Car Collection!</p>', '<p class="fontStyle">Explore a thrilling <br/>world of miniature vehicles</p>','<p class="fontStyle">From sleek sports<br/> cars to rugged off-roaders</p>'],
                    autoStart: start?true:false,
                    delay: 20,
                    deleteSpeed: 10,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString()
                    // typewriter.pasteString('whats up')
                    .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
        
        </div>
    );
};

export default TypeWriter;