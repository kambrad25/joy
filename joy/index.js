const { log } = console;


document.addEventListener("DOMContentLoaded", (e) => {
    const navLogo = [...document.querySelectorAll(".logo > div > h1")];
    const abKeys = [...document.querySelectorAll(".ab > h4")];

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

    let counter = 0;
    // abKeys.map((u, idx) => {
    //     if (!u.className.includes("active")) {
    //         u.style.display = "none";
    //     } else {
    //         u.style.display = "block";

    //     }
    // })

    setTimeout(() => {
    setInterval(() => {
        counter++;
        log (counter);
        if (counter > 1) {
            counter = 0;
        }

        if (counter == 0) {
            counter = 0;
            abKeys[0].classList.remove("active");
            abKeys[1].classList.add("active");
        }
        if (counter == 1) {
            abKeys[1].classList.remove("active");
            abKeys[0].classList.add("active");   
        }

        // abKeys.map((u) => {
        //     if (counter == 1) {
        //         if (u.className.includes("active")) {
        //             u.classList.remove("active");
        //         } else {
        //             u.classList.add("active");
        //         }
        //     }
        // })
           
        }, 5000);

    }, 4000);

    
})