const { log } = console;


document.addEventListener("DOMContentLoaded", (e) => {
    const navLogo = [...document.querySelectorAll(".logo > div > h1")];
    const abKeys = [...document.querySelectorAll(".ab > h4")];
    const bioInfo = [...document.querySelectorAll(".bio-info > div")];
    const bioImg = document.querySelector(".bio-img");
    const bioImgI = [...bioImg.querySelectorAll(".img")];
    const menu = document.querySelector(".mobile-menu");

    navLogo.forEach((i, idx) => {
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
            if (counter > 2) {
                counter = 0;
            }

            if (counter == 0) {
                counter = 0;
                abKeys[0].classList.remove("active");
                abKeys[1].classList.add("active");
                abKeys[2].classList.remove("active");
            }
            if (counter == 1) {
                abKeys[0].classList.add("active");
                abKeys[1].classList.remove("active");
                abKeys[2].classList.remove("active"); 
            }
            if (counter == 2) {
                abKeys[0].classList.remove("active");
                abKeys[1].classList.remove("active");
                abKeys[2].classList.add("active");           
            }
            
            }, 2500);

    }, 2000);


    

    setTimeout(() => {
        let bioInfoEleOne = [...bioInfo[0].querySelectorAll("span > p")];
        let bioInfoEleTwo = [...bioInfo[1].querySelectorAll("span > p")];
        let bioInfoEleThree = [...bioInfo[2].querySelectorAll("span > p")];



        bioInfoEleOne.map((i, idx) => {
            setTimeout(() => {
                i.style.transform=`translate3d(0px, 0%, 0px)`;
            }, idx * 250);
        })

        setTimeout(() => {
            bioInfoEleTwo.map((i, idx) => {
            setTimeout(() => {
                i.style.transform=`translate3d(0px, 0%, 0px)`;
            }, idx * 250)
        })
        }, 1600);


        setTimeout(() => {
            bioInfoEleThree.map((i, idx) => {
            setTimeout(() => {
                i.style.transform=`translate3d(0px, 0%, 0px)`;
            }, idx * 250)
        })
        }, 3000);
    }, 6000);


    bioImgI.map((i, idx) => {
        if (idx == 0) {
            setTimeout(() => {
                i.style.opacity = 1;
            }, 7500);
        }
        if (idx == 1) {
            setTimeout(() => {
                i.style.opacity = 1;
            }, 9000);
        }
        if (idx == bioImgI.length - 1) {
            setTimeout(() => {
                i.style.opacity = 1;
            }, 10500);
        }
    })

    
    document.querySelector(".nav-menu").addEventListener("click", (e) => {
        menu.style.display= "block";

        setTimeout(() => {
            menu.style.opacity=1;
        }, 100)
    })

    document.querySelector(".close-menu-btn").addEventListener("click", (e) => {
        menu.style.opacity = 0;
        
        setTimeout(() => {
            menu.style.display="none";
        }, 500)
    })
    
})