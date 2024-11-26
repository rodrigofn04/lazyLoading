const imagens = document.querySelectorAll(".image-container img")

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting) return

        const image = entry.target

        image.src = image.dataset.src

        image.classList.remove("lazy-load")

        observer.unobserve(image)
    });
}, {})


imagens.forEach((image) =>{
    observer.observe(image)
})