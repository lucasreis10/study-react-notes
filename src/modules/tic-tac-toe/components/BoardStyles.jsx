
const BoardStyles = () => ({

    first:{
        textAlign: 'center',
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },

    btnContainer: {
        marginTop: '10px',
    },

    piece: {
        backgroundColor: '#dcdcdc',
        width: '75px',
        height: '75px',

        clipPath: 'polygon(6% 0, 95% 0, 100% 11%, 100% 93%, 94% 100%, 6% 100%, 0 89%, 0 9%)'
    },

    winner: {
        backgroundColor: `#00E676`,
    },

    draw: {
        backgroundColor: '#FFC400',
    },

    fontPiece: {
        fontFamily: ['Stick', 'sans-serif'],
        fontSize: '50px',
        color: '#424242',
        align: 'center',
    },

    fontBtn: {
        fontFamily: ['Stick', 'sans-serif'],
    }

})

export default BoardStyles