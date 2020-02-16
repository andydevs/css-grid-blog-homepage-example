function onBodyLoad() {
    let element = document.getElementsByTagName('h1')[0]
    console.log(element)
    element.addEventListener('click', function(event) {
        element.classList.add('bigboi');
        element.innerHTML = 'OYEEEEE';
    })
}