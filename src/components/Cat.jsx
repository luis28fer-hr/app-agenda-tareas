import { useState } from "react";

const Cat = () =>{

    const [cat, setCat] = useState({
        name: 'Snow',
        year: 3
    });

    const handleClick = () =>{
        //setCat({...cat, year: cat.year + 1})
        setCat((prev) => ({ ...prev, year: cat.year + 1 }));
    };


    return (
        <>
            <h2>{cat.name} - {cat.year}</h2>
            <button onClick={handleClick} className="btn btn-dark mb-4">Update yeae</button>
        </>
    );
}

export default Cat;