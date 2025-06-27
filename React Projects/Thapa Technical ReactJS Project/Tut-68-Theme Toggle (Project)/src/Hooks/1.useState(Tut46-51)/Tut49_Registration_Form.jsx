import { useState } from "react";

export const Registration = () => {
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:""
  })

  const handleInputChange = (e) => {
    // Read the readme.md file for the tut48 inputHandling unOptimized code
    const {name,value} = e.target 
    // If the user enters the nameField then the "name" key will get the "firstName" from the inputField and checks in the state and updates the "firstName" with value dynamically.
    console.log(name)
    setUser((prev) => ({...prev,[name]:value}))  //Eg:This will be { email: "value" }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  };


  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen">
        <p className="text-center">{`Hello my name is ${user.firstName} ${user.lastName}. My email address is ${user.email} and My phone number is ${user.phoneNumber}`}</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col border-2 border-gray-400 w-[50dvw] gap-5 rounded-lg"
        >
          <div>
            <p className="font-bold text-3xl">Sign Up</p>
            <p className="font-light text-xl">
              Please fill in this form to create an account
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="firstName" className="font-semibold text-xl">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Enter firstName"
                className="text-black h-10 rounded-md placeholder:text-black text-xs font-serif"
                serif
                value={user.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="font-semibold text-xl ">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter lastName"
                required
                className="text-black h-10 rounded-md placeholder:text-black text-xs font-serif"
                value={user.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold text-xl ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                className="text-black h-10 rounded-md placeholder:text-black text-xs font-serif"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="font-semibold text-xl ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                className="text-black h-10 rounded-md placeholder:text-black text-xs font-serif"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="font-semibold text-xl ">
                Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="123456789"
                required
                className="text-black h-10 rounded-md placeholder:text-black text-xs font-serif"
                value={user.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <p className="text-[13px]">
              By creating an account you agree to our
              <span className="text-blue-500">Term and Privacy</span>
            </p>
            <button className="w-full rounded-md text-white bg-black">Sign Up</button>
          </div>
        </form>
      </main>
    </>
  );
};
