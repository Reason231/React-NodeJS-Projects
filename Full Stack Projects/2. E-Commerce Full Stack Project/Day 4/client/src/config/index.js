// We define the configuration here because instead of repeating the same form layout code again and again (for login, register, contact, etc.), we define just the form structure once, and pass in different configurations for each form.
// We are using this code in src => components => common => form.jsx
export const registerFormControls=[
    {
        name:"userName",
        label:"User Name",
        placeholder:"Enter your user name",
        componentType:"input",
        type:"text"
    },
      {
        name:"email",
        label:"Email",
        placeholder:"Enter your email",
        componentType:"input",
        type:"email"
    },
      {
        name:"password",
        label:"Password",
        placeholder:"Enter your password",
        componentType:"input",
        type:"password"
    },
]

export const loginFormControls=[
      {
        name:"email",
        label:"Email",
        placeholder:"Enter your email",
        componentType:"input",
        type:"email"
    },
      {
        name:"password",
        label:"Password",
        placeholder:"Enter your password",
        componentType:"input",
        type:"password"
    },
]