import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  isHamburgerActive: true,
  changeHamburgerActive: () => {},
  changeTheme: () => {},
})

export default ThemeContext
