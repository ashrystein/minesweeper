const cell = {
    unClicked:'0',
    cleared:'',
    mine:'*',
}

const dims = {
    rows:9,
    columns:9
}

const minesNumber = 10;

const colors = {
    brand:'#1C202C',
    cellLight:'#5A627B',
    cellDark:'#303442',
    white:'#fff',
    red:'#E53935',
    black:'#000',
    gold:'#FFC107'
}

const animationConfig = {
    up:1.4,
    down:1
}

const messages = {
    win:'You Win',
    lose:'You Lose'
}

const countsColors = [
    '#fff',
    '#00FF00',
    '#FFCA28'
]

const fonts = {
    large:30,
    medium:20,
    small:10
}

export {
    cell,
    dims,
    minesNumber,
    colors,
    animationConfig,
    messages,
    countsColors,
    fonts
}