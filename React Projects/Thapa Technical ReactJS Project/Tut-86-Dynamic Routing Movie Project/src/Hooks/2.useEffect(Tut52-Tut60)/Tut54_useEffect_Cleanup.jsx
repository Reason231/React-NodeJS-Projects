import { useEffect, useState } from "react";

export const Tut54CleanUpFunction = () => {
  const [count, setCount] = useState(0);

  // Method 1:We shouldn't use this as it creates the multiple intervals every second, you can see the real example
  // setInterval(()=>{
  //         setCount(count+1)
  // },1000)

  // Method 2: useEffect but while parents being the empty dependencies the child is still running the code.
  // useEffect(()=>{
  //     setInterval(()=>{
  //         setCount((prev)=>prev+1)
  //     },1000)
  // },[])

  // Method 3: useEffect with the cleanUp function
  // Explanation give in readme.md file
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev)=>prev+1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <div>
          <p>My Subscriber on Youtube</p>
          <div>{count}</div>
          <h3>
            Subscriber <br></br>RealTime Counter
          </h3>
        </div>
      </div>
    </>
  );
};
