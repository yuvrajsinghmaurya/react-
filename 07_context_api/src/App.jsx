import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  

    // now here some intersteing things we can do with coming value for context provider suppose we have 3 value (themeMode and more) , and we do not know what is this value define in this but with exact same name we can create here different method and it will work 
    const [themeMode , setThemeMode] = useState('light')

    const darkTheme=()=>{
      setThemeMode('dark')
    }

    const lightTheme = ()=>{
      setThemeMode('light')
    }

    // actual change in theme 
    useEffect(()=>{
      document.querySelector('html').classList.remove('light' , 'dark')

      document.querySelector('html').classList.add(themeMode)
    },[themeMode])

  return (

    <>
     <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>

     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theams component */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>

       </ThemeProvider>

    </>
  )
}

export default App
