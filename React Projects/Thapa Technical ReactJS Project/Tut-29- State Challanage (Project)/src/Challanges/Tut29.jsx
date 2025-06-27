import { useState } from "react";

export const Tut29Challange = () => {
    const users = [ 
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 }
    ];

    let [counter,setCounter]=useState(0)

    function looper(){
        setCounter(()=> counter + 1 )
    }

    return (
        // Through Loop
        <>
        {/* <div>
            <h1>User List</h1>
            {users.map((studentList, index) => (
                <div key={index}>
                    <p>Name: {studentList.name}</p>
                    <p>Age: {studentList.age}</p>
                </div>
            ))}
        </div> */}


        {/* // Through useStateHook */}
        <div>
            <h1>User List</h1>
            <p>Name : {users[counter].name}</p>
            <p>Age: {users[counter].age}</p>
            <button onClick={looper} class="bg-slate-500" >Increase student List</button>
        </div>
            </>
    );
};


