import React, { useEffect, useState } from 'react'

const SignUp = () => {
    const [login, setLogin]  = useState(true);
    useEffect(() => {
        setTimeout(() => {setLogin(false)}, 2000);
    }, []);
  return (
    <>
    {login  ?
    <button onClick={() => {}}>Welcome</button>
     : <button onClick={() => {}}>SIgn Up</button>}
    </>
  )
}

export default SignUp