const { log } = console;


document.addEventListener("DOMContentLoaded", (e) => {
    const navLogo = [...document.querySelectorAll(".logo > div > h1")];


    // navLogo.map((u, idx) => {
    //     let navLogoText = u.textContent.split("");
    //     let txt = "";
    //     // navLogo[idx].parentElement.innerHTML = '';

    //     for (let i = 0; i < navLogoText.length; ++i) {
    //         txt += `<h1>${navLogoText[i]}</h1>`
    //     }

    //     if (idx == 0) {
    //         navLogo[idx].parentElement.innerHTML = (txt)
    //     }
    // })


    navLogo.forEach((i, idx) => {
        log (i);
        setTimeout(() => {
            setTimeout(() => {
                i.style.transform = `translate3d(0px,0%,0px)`;
            })
            setTimeout(() => {
                document.querySelector(".nav-socials").style.opacity = 1;
            }, 100)
        }, 6200);
    })
})