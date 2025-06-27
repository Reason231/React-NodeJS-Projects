// Notes
// If you show this, explain what you used and why, e.g.:
// 1. "useState controls the UI toggle"
// 2. "useEffect keeps the theme saved in localStorage"
// 3. "localStorage lets the theme persist after page refresh"
// 4. "Could use Context if this was a bigger app"

import { useState, useEffect } from "react";

export const Tut69ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme ? "dark" : "light");
    }, [theme]);

    const themeToggle = () => setTheme(prev => !prev);

    return (
        <main className={`h-screen flex justify-center items-center ${theme ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className="flex flex-col gap-y-6 items-center">
                <div className="text-xl">Dark Light Mode Website</div>
                <p>Hello!! My React v19 Fans</p>
                <button className="bg-blue-600 p-3 rounded-md text-xl" onClick={themeToggle}>
                    Switch to {theme ? "Light" : "Dark"} Mode
                </button>
            </div>
        </main>
    );
};
