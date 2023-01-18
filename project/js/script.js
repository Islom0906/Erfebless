  // paralax
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll(".paralax-image").forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        layer.style.transform = `translate(${x}px  ) `
    });
}

document.addEventListener("mousemove" , parallaxY);
function parallaxY(e){
    this.querySelectorAll(".paralaxXY").forEach(layer => {
        const speed = layer.getAttribute('data-speed')
    
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageX*speed)/100

        layer.style.transform = `translate(${x}px , ${y}px ) `
    });
}
