import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary:string,
      secondary: string,
      secondaryBright: string,
      white: string,
      black: string,
      grey: string,
      background: string,
      text: string,
    },
  }
}
