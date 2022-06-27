const buttmode = document.querySelector(".buttmode")
const modback = document.getElementById('modback')
const modbox = document.getElementById('modbox')

buttmode.addEventListener('click', function(event){
    event.preventDefault()
    modback.classList.add('show')
    modbox.classList.add('show')
})

const buttclose = document.querySelector('.buttclose')
    buttclose.addEventListener('click', function(event){
    modback.classList.remove('show')
    modbox.classList.remove('show')
})

const buttaccept = document.querySelector('.buttaccept')
buttaccept.addEventListener('click', function(event){
    modback.classList.remove('show')
    modbox.classList.remove('show')
})