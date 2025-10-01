'use client'
import { ReactNode } from 'react'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material'

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#E7F2EF'
        },
        secondary: {
            main: '#2f2f2f'
        },
        background: {
            paper: '#2f2f2f'
        },
    }
})

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <MUIThemeProvider theme={darkTheme}>
            {children}
        </MUIThemeProvider>
    )
}
