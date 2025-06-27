import { useState } from "react";
export const CustomLocalStorage=()=>{
    // 5️⃣ useLocalStorage - Store State in Local Storage
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    const setValue = (value) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
};
const [theme, setTheme] = useLocalStorage("theme", "light");
    return(
        <>
 {/* useLocalStorage */}
 <h2 className="mt-4">Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="border px-2 py-1">
        Toggle Theme
      </button>
        </>
    )
}