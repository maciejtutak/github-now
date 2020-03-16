import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
    
    colors: {
        bgColor: '#ffffff',
        primaryTextColor: '#282828',
        secondaryTextColor: '#8c8c8c',
        primaryColor: '',
        secondaryColor: '#ececec',
    }
}

const darkTheme: DefaultTheme = {

    colors: {
        bgColor: '#373737',
        primaryTextColor: '#ececec',
        secondaryTextColor: '#8c8c8c',
        primaryColor: '#b7a1df',
        secondaryColor: '#4c4c4c',
    }
}

const Themes: { [name: string]: DefaultTheme } = {
    lightTheme: lightTheme,
    darkTheme: darkTheme
};

export default Themes;