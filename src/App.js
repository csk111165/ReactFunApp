import { useState } from "react";
import AnimalShow from "./AnimalShow";
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import './App.css'

function getRandomAnimal() {

    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

function App(){

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // console.log("Button was clicked!")
        //setCount(count+1);
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderAnimals = animals.map((animal, index) => {
            return <AnimalShow type={animal} key={index} />
    }
    );

    return (

       <div className="app">
            <Button variant="primary" onClick={handleClick}>Add Animal</Button>
            <Alert key="info" variant="info">
            Click here to generate animals 🙂
        </Alert>
            <div className="animal-list">
                {renderAnimals}
            </div>
       </div>
    )
}

export default App;