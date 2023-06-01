import React from "react";

export const Person = ({ person }) => (
   <section className="Person">
        <h2 className={person.name}>{`My name is ${person.name}`}</h2>

        {person.age && (<p className={person.age}>{`I am ${person.age}`}</p>)}

        {!person.isMarried && (<p className="Person__partner">I am not married</p>)}

        {person.isMarried && (person.sex === 'm' 
            ? (<p className="Person__partner">{person.partnerName} is my wife</p>) 
            : (<p className="Person__partner">{person.partnerName} is my husband</p>)
        )}
    </section>
);
