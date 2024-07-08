import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({childrem}) => {
  return (
    <div>
      const {theme} = useContext(ThemeContext);
      return <div className={theme}>
        {children}
      </div>
    </div>
  )
}

export default ThemeProvider
