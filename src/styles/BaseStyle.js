import { Dimensions } from 'react-native';

export const dimensions = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
};

export const colors = {
    primary: '#125e8a',
    secondary: '#0fa3b1',
    dark: '#19647e',
    accent: '#61E294',
    white: 'white',
    black: 'black',
    red: 'red',
    grey: 'B0B0B0',
};

export const fonts = {
    sm: 12,
    md: 18,
    lg: 28,
};

export default {
    containerMain: {
        flex: 1,
        backgroundColor: colors.white,
    },

    inputText: {
        color: colors.primary,
    },

    disable: {
        color: colors.grey,
        fontWeight: 'bold',
    },

    colorText: {
        color: colors.primary,
    },
};


