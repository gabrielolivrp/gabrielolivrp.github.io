import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from 'hooks'

const THEME_KEY = 'THEME_DATA'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextData {
  theme: Theme
  toggleTheme: () => void
}

export const themeContextDefaultValues: ThemeContextData = {
  theme: Theme.LIGHT,
  toggleTheme: () => { }
}

export const ThemeContext = createContext<ThemeContextData>(
  themeContextDefaultValues
)

export interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] =
    useLocalStorage<Theme>(THEME_KEY, Theme.LIGHT)

  const handleChangeTheme = (newTheme: Theme) => {
    const root = document.documentElement
    const oldTheme = newTheme === Theme.DARK
      ? Theme.LIGHT
      : Theme.DARK
    root.classList.remove(oldTheme)
    root.classList.add(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK
      ? Theme.LIGHT
      : Theme.DARK
    setTheme(newTheme)
  }

  useEffect(
    () => handleChangeTheme(theme),
    [theme]
  )

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
