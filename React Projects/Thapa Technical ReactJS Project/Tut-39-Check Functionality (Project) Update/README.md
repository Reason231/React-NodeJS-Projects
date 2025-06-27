## Creating the check and uncheck functionality in the ToDo
## Note: We have changed so much thing in seperation of concern and ToDoForm file


1. First ma hami lea modify garna paryo "ToDoForm" ma for the help of check and uncheck functionality.
   Code => 
   Before: 
    const handleInputChange = (value) => {
    setInputValue(value);
    };

   After:
   const handleInputChange = (value) => {
        setInputValue({id:value,content:value,checked:false});
        };


2. After that, we will have to change in the "ParentComponet" as we have change the handleInputChange into object.
- Go to the Seperation of Concern.jsx file
- Go to the "handleFormSubmit" function
- Destructure the object and update it

