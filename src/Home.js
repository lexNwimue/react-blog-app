import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('lex');
    const handleClick = () => {

        // Set the name to a random name picked from the name array
        let nameArray = ['James', 'John', 'Luke', 'Shekpe'];
        setName(nameArray[Math.floor(Math.random() * nameArray.length)]);
    }


    return ( 
        <div>
            <p>My name is: {name}</p>
            <button onClick={handleClick}>Change Name</button>
        </div>

     );
}
 
export default Home;