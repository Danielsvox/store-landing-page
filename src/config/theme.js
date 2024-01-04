import { createTheme } from '@mui/material'

const darkerColor = '#24272A'
const primaryColor = '#D8AD3D'
const secondaryColor = '#009CD9'

const theme = createTheme({
    palette: {
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
    },

    shape: { borderRadius: 10 },

    typography: {
        fontFamily: 'Open Sans',

        formLabel: {
            fontWeight: '700',
            fontSize: '13px',
        },

        body2: {
            fontSize: '14px',
        },

        h1: {
            fontSize: '120px',
            fontFamily: 'Caveat',
            color: darkerColor,
            lineHeight: '6rem',
        },

        h2: {
            fontSize: '80px',
            fontFamily: 'Caveat',
            color: darkerColor,
        },

        h5: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: darkerColor,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.contact': {
                        borderRadius: 50,
                        padding: '1rem 4rem',
                        color: 'white',
                        boxShadow: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: secondaryColor,
                        },
                    },
                },
            },
        },
    },
})

export default theme