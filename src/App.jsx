import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import Card from './components/Card'
import NothemeBtn from './components/NothemeBtn'



function App() {
  const [themeMode , setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }
  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark" , "light")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeContextProvider value={{themeMode , lightMode , darkMode}}>
     
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <NothemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeContextProvider>

  )
}

export default App
