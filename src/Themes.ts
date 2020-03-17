import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
    
    colors: {
        bgColor: '#ffffff',
        primaryTextColor: '#282828',
        secondaryTextColor: '#8c8c8c',
        secondaryColor: '#ececec',
    }
}

const darkTheme: DefaultTheme = {

    colors: {
        bgColor: '#282828',
        primaryTextColor: '#ececec',
        secondaryTextColor: '#8c8c8c',
        secondaryColor: '#3a3a3a',
    }
}

const Themes: { [name: string]: DefaultTheme } = {
    lightTheme: lightTheme,
    darkTheme: darkTheme
};

export default Themes;