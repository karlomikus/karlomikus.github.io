document.querySelectorAll('#projects li a').forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault();
        e.target.parentElement.classList.toggle('project--show')
    })
})
