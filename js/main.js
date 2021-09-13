document.querySelectorAll('ul li a').forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault();
        e.target.parentElement.querySelector('.project-info').classList.toggle('project-info--show')
    })
})
