window.addEventListener('mousemove', (event) =>{

    const localiza = document.getElementById('position')

    let posicaox = document.getElementById('posicaox')
    let posicaoy = document.getElementById('posicaoy')

    localiza.style.top = event.clientY + 'px'
    localiza.style.left = event.clientX + (5) + 'px'

    posicaoy.innerText = event.clientY + 'px'
    posicaox.innerText = event.clientX + 'px'
})