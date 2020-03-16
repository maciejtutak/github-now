import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            bgColor: string,
            primaryTextColor: string,
            secondaryTextColor: string,
            primaryColor: string,
            secondaryColor: string,
        }
    }
}