document.querySelectorAll('#projects li a').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('#projects li').forEach(allEl => {
            allEl.classList.remove('project--show')
        })
        e.target.parentElement.classList.toggle('project--show')
    })
})
