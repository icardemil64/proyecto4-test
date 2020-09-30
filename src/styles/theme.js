const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}

export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#000',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    buttonColor: '#d9d8e6',
    foodColor: '#A9A9A9',
    foodColorHover: '#696969',
    movimientoTextColor: '#696969',
    movimientoEntadaTableroColor: '#edfbf2',
    movimientoSalidaTableroColor: '#ffeded',
    bordeProductos: '#dedee9',
    listTitleProductos: '#807D75',
    menuHoverColor: '#faf5c7',
    botonProductos: '#fad2d2',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}