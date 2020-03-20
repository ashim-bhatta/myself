const nxtBtn = document.getElementById('nxtBtn')
const option = document.getElementById('option')
const coffee = document.getElementById('for-coffee')
const hire = document.getElementById('for-hire')
const project = document.getElementById('for-project')
const close = document.getElementById('close')
let x = ''
var error = ''


nxtBtn.addEventListener('click', e => {
    e.preventDefault()
    if (x === '') {
        alert('Please choose one of the options...')
    } else {
        option.style.display = 'none'
        close.style.display = 'flex'
        nxtDiv(x)
        console.log(x)
    }

})

/*************function to pick user value and display form */
const nxtDiv = (x) => {
    if (x === 'coffee') {
        coffee.style.display = 'flex'
    } else if (x === 'hire') {
        hire.style.display = 'flex'
    } else {
        project.style.display = 'flex'
    }
}

/*****************************close  */

const closeOption = () => {
    console.log('aaa')
    option.style.display = 'flex'
    coffee.style.display = 'none'
    hire.style.display = 'none'
    project.style.display = 'none'
    close.style.display = 'none'
}