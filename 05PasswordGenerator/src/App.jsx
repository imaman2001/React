import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);   // length of the password
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  
  // useRef hook
  const passwordRef = useRef(null);
  // useRef is used to directly access the DOM element, here we are using it to copy the password to clipboard
  
  const copyPasswordToClipboard = useRef( () => {
    // this function will copy the password to clipboard and 
    passwordRef.current?.select(); // select the optional chaining operator (?.) is used to avoid errors if passwordRef.current is null
    passwordRef.curent?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  } , [password])


  const passwordGenerator = useCallback( ()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i=0; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    
    setPassword(pass);

  } , [length, numberAllowed, charAllowed, setPassword]) // [] is a dependency array, it depends on these variables


  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // whenever these variables change, password will be generated again
  

  return (
    <>
      <div className='text-orange-500 bg-gray-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-8'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password} 
          className=' w-full outline-none py-1 px-2 bg-gray-100'
          placeholder='Password'
          readOnly
          ref={passwordRef}  // attaching the ref to the input field
          />

          <button 
          onClick={copyPasswordToClipboard }
          className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:cursor-pointer'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-3'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='curson-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
            />

            <label htmlFor="length"> Length : {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberAllowed"
              onChange={()=> {
                setNumberAllowed((prev) => !prev);  // true/false flip hote rahenge
              }}
            />

            <label htmlFor="numberInput">Number</label>
          </div>
          
          <div className='flex item-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed} 
              id='charAllowed'
              onChange={ ()=> {
                setCharAllowed((prev) => !prev);  // click hone par iski value change ho jaigi checked or not
              }}
            />

            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>    
    </>
  )
}

export default App
