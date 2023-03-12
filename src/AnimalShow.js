import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg'
import { useState } from 'react';
import './AnimalShow.css';

// if key and value names are same then we can just use key instead of key:value in javascript map
const svgMap = 
{
    bird ,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
};

function AnimalShow({type}){

    const [click, setClick] = useState(0);

    function handleClick()
    {
        setClick(click+1);
    }

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className='animal'  src={svgMap[type]} alt="animal logo" />
            <img 
                className='heart'
                src={heart}
                width={10 + 10*click+'px'} 
                alt="heart"
            />
        </div>
    )
}

export default AnimalShow;