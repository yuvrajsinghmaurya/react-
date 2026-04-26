import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  // some values to manage the password
  const [length, setLength] = useState(8)
  const [allowNumbers, setAllowNumbers] = useState(false)
  const [allChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState('')

  //  to copy the password useRef
  const passwordRef = useRef(null)

  //  function to generate password
  const passwordGenerator = useCallback(() => {
    // now take to var 
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // now conditation 
    if (allowNumbers) str += '0123456789'
    if (allChar) str += "!@#$%^&*()_+-="

    // now get random value from str var
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)



    }
    console.log(pass)
    //  now password is generate now set this password
    setPassword(pass)

  }, [length, allChar, allowNumbers, setPassword])



  //useeffect
  useEffect(() => {
    // now call the function to geterate the pass
    passwordGenerator()
  }, [length, allowNumbers, allChar, passwordGenerator])


  // copy the password to clip 
  // direct way 
  //  const  copypasswordToclip=useCallback(()=>{
  //     window.navigator.clipboard.writeText(password)
  //  },[password])

  // another way 
  const copypasswordToclip = useCallback(() => {
    passwordRef.current?.select();   // select text
    navigator.clipboard.writeText(password);  // copy
    console.log("Copied:", password);
  }, [password]);

  return (
    <div className='h-screen'>
      <h1 className='text-3xl font-bold text-center'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copypasswordToclip()}
            className='outline-none bg-blue-500 text-white px-3'>

            Copy
          </button>

        </div>



        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gapx-1'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label >length : {length}</label>
          </div>
          <input type="checkbox" name="" id="numberInput"
            defaultChecked={allowNumbers}
            onChange={() => {
              setAllowNumbers((prev) => !prev)
            }}
          />
          <label >Numbers</label>


          <input type="checkbox" name="" id="charInput"
            defaultChecked={allChar}
            onChange={() => {
              setAllowChar((prev) => !prev)

            }}

          />

          <label htmlFor="">char</label>
        </div>

        <button
          onClick={() => {
            passwordGenerator()
          }}
          className='bg-green-500 text-white px-4 py-2 rounded'>
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
