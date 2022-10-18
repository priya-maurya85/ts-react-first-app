import React, { useEffect, useMemo, useState } from 'react'

const AppMemo = () => {
    const [numberVal, setNumber] = useState<number>(5);
    const [dark, setDark] = useState<boolean>(true);
    
    const funcNum = useMemo(()=> 
    {return bigFunction(numberVal)
    }, [numberVal]) ;
    const themeObj = useMemo(() => {
        return {
            color: dark? "white" :"black",
            backgroundColor: dark ? "black" : "grey"
        }
    }, [dark]);

   
    useEffect(() => {
        console.log("theme changed")
    }, [themeObj])
  
    const toggleTheme = () => {
        setDark(!dark);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number.parseInt(e.target.value));
    }
  return (
   <>
   <input type="number" value={numberVal} onChange={handleInputChange}/>
   <button onClick={toggleTheme}>Change theme</button>
   <div style={themeObj}>Value of the big number {funcNum}</div>
   </>
  )
}
const bigFunction = (num:number) => {
    console.log("calling slow function");
    for(let i=0; i< 100; i++) {

    }
    return num *2;
}
export default AppMemo
