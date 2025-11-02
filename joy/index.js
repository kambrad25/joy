const { log } = console;

window.addEventListener("load", (e) => {
    window.scroll({ top: 0, behavior: 'smooth'})

    document.documentElement.style.overflow = "hidden";


    setTimeout(() => {
        document.documentElement.style.overflow = "scroll";
    }, 7000);
})

document.addEventListener("DOMContentLoaded", (e) => {
    const navLogo = [...document.querySelectorAll(".logo > div > h1")];
    const abKeys = [...document.querySelectorAll(".ab > h4")];
    const bioInfo = [...document.querySelectorAll(".bio-info > div")];
    const bioImg = document.querySelector(".bio-img");
    const bioImgI = [...bioImg.querySelectorAll(".img")];
    const menu = document.querySelector(".mobile-menu");

    const justiceHeaderTop = document.querySelector(".injustice-header-top");
    const justiceHeaderBottom = document.querySelector(".injustice-header-bottom");


    const injusticeSec = document.querySelector(".injustice");
    const injusticeSecImg = document.querySelectorAll(".iji")
    const injusticeTxt = [...document.querySelectorAll(".injustice-txt")];

    const action = document.querySelector(".action");


    let getTxtOne = injusticeTxt.filter((u, idx) => idx === 0);
    let getTxtTwo = injusticeTxt.filter((u, idx) => idx === 1);
    

    // getTxtOne = getTxtOne[0];

    // getTxtTwo = getTxtTwo[0];



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


    let c = 0;
    const init = () => {

        let y = window.pageYOffset || document.documentElement.scrollTop;

        let justiceHeader = document.querySelector(".injustice-header");
        let justiceHeaderSpan = [...justiceHeader.querySelectorAll("h1 > span")];

        let justiceHeaderTop = ( y - (justiceHeader.parentElement.offsetTop - window.innerHeight)) / (justiceHeader.offsetHeight)

        justiceHeaderTop = justiceHeaderTop < 0 ? justiceHeaderTop : justiceHeaderTop > 1 ? 1 : justiceHeaderTop;

        if (justiceHeaderTop >= 1) {
            justiceHeaderSpan.map((u, idx) => {
                u.style.transform = `translate3d(0px, 0%, 0px)`;
            })
        }


        let injusticeSecTop = ( y - (injusticeSec.offsetTop - window.innerHeight)) / (injusticeSec.offsetHeight)


        if (injusticeSecTop > .8 && injusticeSecTop < 1) {
            injusticeSecImg[0].style.opacity = 1;

            [...getTxtOne[0].children].map((u, idx) => {
                let span = [...u.querySelectorAll("span")];
                span.map((u, idx) => {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0px,0%,0px)`;
                    }, idx * 500);
                })
            })
        }


        if (injusticeSecTop >= 1) {
            injusticeSecImg[injusticeSecImg.length - 1].style.opacity = 1;

              [...getTxtTwo[0].children].map((u, idx) => {
                let span = [...u.querySelectorAll("span")];
                span.map((u, idx) => {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0px,0%,0px)`;
                    }, idx * 500);
                })
            })
        }
        


        let actionTop = 1 - ((action.offsetTop + action.offsetHeight) -y) / window.innerHeight;

        if (actionTop >= 0) {
            action.querySelector(".action-header").style.transform = `translate(-50%, -50%) scale(1)`;
        }


        let actionSec = document.querySelector(".action-text");

        let actionSecTop = 1 - ((actionSec.offsetTop + actionSec.offsetHeight) - y) / window.innerHeight;

        if (actionSecTop >= 0) {
            document.querySelectorAll(".action-sec").forEach((u) => {
                let text = u.querySelectorAll("h1 >span");
                [...text].map((u, idx) => {
                    setTimeout(() =>{
                        u.style.transform=`translate3d(0px, 0%, 0px)`;
                    }, idx * 150);
                })
            })
        }


        const sliders = document.querySelector(".sliders");


        let slidersTop = ( y - (sliders.offsetTop - window.innerWidth)) / (sliders.offsetWidth) - .40;
        

        slidersTop = slidersTop <= 0 ? 0 :  slidersTop > (window.innerWidth * 2 / 1000) ? (window.innerWidth * 2 / 1000): slidersTop;

        
        slidersTop = slidersTop * 1000;

        document.querySelector(".slider").style.transform=`translate3d(${-slidersTop}px, 0px, 0px)`;

    
        const story = document.querySelector("section");
        let storyTop = ( y - (story.offsetTop - window.innerHeight)) / (story.offsetHeight);

        let storyImg = [...document.querySelectorAll(".st")];

        storyImg.map((i, idx, arr) => {
           
              if (idx == 0) {
                 if (storyTop >= .5) {
                    i.style.opacity = 0;
                  }  else {
                    i.style.opacity = 1;
                  }
                } 

                if (idx == 1) {
                    if (storyTop >= .8) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }
            
        })

        window.requestAnimationFrame(init);
    }
    
    
    init()
})