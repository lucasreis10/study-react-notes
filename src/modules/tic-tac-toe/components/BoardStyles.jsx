
const BoardStyles = () => ({

    first:{
        textAlign: 'center',
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },

    piece: {
        backgroundColor: '#dcdcdc',
        width: '75px',
        height: '75px',
    },

    winner: {
        backgroundColor: 'green',
    },

    draw: {
        backgroundColor: 'yellow',
    }

})

export default BoardStyles