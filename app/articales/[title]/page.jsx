import React from 'react';


export default function comingArticales(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center font-bold '>
        <p>comingArticales</p>
        <p className='font-thin mt-5'>{props.params.title}</p>
        </div>
    )
}