// import React, { useState } from 'react';

// export function ClickCounter() {
//   // Declare a state variable 'count' with initial value 0 and 'setCount' to update it
//   const [count, setCount] = useState(0);

//   // Handle the button click, which updates the count
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       {/* Display the current count */}
//       <p>Clicks: {count}</p>
      
//       {/* Button that increments the count */}
//       <button onClick={handleClick}>Click me!</button>
//     </div>
//   );
// }

// export default ClickCounter;

// import React, { useState, useEffect } from 'react';

// import { ThemeContext, themes } from "./themeContext";



// export function ClickCounter() {
//  const [count, setCount] = useState(0);

//  const handleClick = () => {
//    setCount(count + 1);
//  };

//  useEffect(() => {
//    document.title = `You clicked ${count} times`;
//  }, [count]);

//  return (
//    <div>
//      <p>Clicks: {count}</p>
//      <button onClick={handleClick}>Click me!</button>
//    </div>
//  );
// }

// // Wrapper component to provide context
// function ToggleTheme() {
//     const [currentTheme, setCurrentTheme] = useState(themes.light);
   
//     const toggleTheme = () => {
//       setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
//     };
   
//     return (
//       <ThemeContext.Provider value={currentTheme}>
//         <button onClick={toggleTheme}> Toggle Theme </button>
//         <ClickCounter />
//       </ThemeContext.Provider>
//     );
// }
   
// export default ToggleTheme;
   
   

import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  // Use the theme context
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  // Update the document title based on the count
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
    >
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: theme.foreground, color: theme.background }}
      >
        Click me!
      </button>
    </div>
  );
}

// This function only toggles the color of click counter
// Wrapper component to provide context and toggle theme
export function ToggleTheme() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ClickCounter />
    </ThemeContext.Provider>
  );
}




// Favorite notes function
export function useListFavorite() {
    const [favorite, setFavorite] = useState<string[]>([]);
  
    // // Clicking to add/unadd favorite notes
    // const clickFavorite = (noteID: string) => {
    //   setFavorite((currentState) => {
    //     //check if note is already in the favorite note list
    //     if (currentState.includes(noteID)) {
    //       console.log(`Remove from favorite list: ${noteID}`);
    //       return currentState.filter((title) => title !== noteID);
    //     } else {
    //       console.log(`Add to favorite list: ${noteID}`);
    //       return [...currentState, noteID];
    //     }
    //   });
    // };

    
    // Clicking to add/unadd favorite notes
    const clickFavorite = (noteID: string) => {
        if (favorite.includes(noteID)) {
            setFavorite(favorite.filter(id => id !== noteID));
        }
        else {
            setFavorite([...favorite, noteID]);
        }
    }

    useEffect(() => {
      console.log(`Favorite list: ${favorite}`);
    }, [favorite]);
  
    return {
      favorite,
      clickFavorite,
    };
}

