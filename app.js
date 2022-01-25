const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#e74c3c', '#8e44ad', '#3498db',
                '#e67e22', '#2ecc71', '#0bb6b9', 
                '#ed5904', '#5804ed', '#ed049c', 
                '#eced04', '#ed3c04', '#baed04',
                '#04ed71', '#04bded', '#ed04d0']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = "#1d1d1d"
    square.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}