"use strict";

const { log } = console;


// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.stop();


window.addEventListener("load", (e) => {
    window.scroll({ top: 0, behavior: 'smooth'})


    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    document.documentElement.style.overflow = "hidden";


    setTimeout(() => {
        document.documentElement.style.overflow = "scroll";
        lenis.start();
    }, 7000);
})


const appendNewChild = () => {
    let info = [...document.querySelectorAll(".info-text > .text")];

    let infoOne = info.filter((u, idx) => Number(idx) === 0);
    let infoTextOne = "";
    infoOne.map((u, idx) => {
        let txt = u.querySelectorAll("p");
        if (idx == 0) {
            let tTxt = txt[idx].textContent.split(" ")
            tTxt.map(u => {
                infoTextOne += `<span>${u}</span>`;
            })

            info[idx].querySelector("p").innerHTML = infoTextOne
        }

    let infoP = [...info[0].querySelectorAll("p")];
    let infoTextTwo = "";
    infoP.map((u, idx) => {
        if (idx == 1) {
            let tTxt = u.textContent.split(" ");

            tTxt.map(u => {
                infoTextTwo += `<span>${u}</span>`
            })

            infoP[idx].innerHTML = infoTextTwo
        }
    })

    })
}
const facts = [...document.querySelectorAll(".facts > p")];
const appendChild = () => {
    facts.map((u, idx) => {
        let text = [...u.textContent.split(" ")]
        let txt = "";

        if (idx == 0) {
            text.forEach(u => {
                txt += `<span>${u}</span>`
            })

            facts[idx].innerHTML = txt;
        }

         if (idx == 1) {
            text.forEach(u => {
                txt += `<span>${u}</span>`
            })

            facts[idx].innerHTML = txt;
        }

         if (idx == 2) {
            text.forEach(u => {
                txt += `<span>${u}</span>`
            })

            facts[idx].innerHTML = txt;
        }
         if (idx == 3) {
            text.forEach(u => {
                txt += `<span>${u}</span>`
            })

            facts[idx].innerHTML = txt;
        }
    })
}

appendChild();


appendNewChild()

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
        document.documentElement.style.overflow="hidden";
        menu.style.display= "block";

        setTimeout(() => {
            menu.style.opacity=1;
        }, 100)
    })

    document.querySelector(".close-menu-btn").addEventListener("click", (e) => {
        document.documentElement.style.overflow="scroll";

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



        let slidersTop = 1 - (((sliders.offsetTop + sliders.offsetHeight) - y)- sliders.offsetHeight) / window.innerHeight - .50;

        // log (slidersTop - .50)
        slidersTop = slidersTop <= 0 ? 0 : slidersTop > 2 ? 2 : slidersTop;


        
        slidersTop = (slidersTop * window.innerWidth) * .1;
        

        // let slidersTop = ( y - (sliders.offsetTop - window.innerWidth)) / (sliders.offsetWidth) - .50;
        

        // slidersTop = slidersTop * 100;

        // log (slidersTop * 100);
        // slidersTop = slidersTop <= 0 ? 0 : slidersTop >= 66 ? 66 : slidersTop;
        // slidersTop = slidersTop <= 0 ? 0 :  slidersTop > (window.innerWidth * 2 / 1000) ? (window.innerWidth * 2 / 1000): slidersTop;

        
        // slidersTop = slidersTop * 1000;


        document.querySelector(".slider").style.transform=`translate3d(${-slidersTop * 10}px, 0px, 0px)`;

    
        const story = document.querySelector("section");
        let storyTop = ( y - (story.offsetTop - window.innerHeight)) / (story.offsetHeight);

        let storyImg = [...document.querySelectorAll(".st")];

        storyImg.map((i, idx, arr) => {
           
              if (idx == 0) {
                 if (storyTop >= .2) {
                    i.style.opacity = 0;
                  }  else {
                    i.style.opacity = 1;
                  }
                } 

                if (idx == 1) {
                    if (storyTop >= .3) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }

                
                if (idx == 2) {
                    if (storyTop >= .4) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }

                
                if (idx == 3) {
                    if (storyTop >= .5) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }

                
                if (idx == 4) {
                    if (storyTop >= .6) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }

                if (idx == 5) {
                    if (storyTop >= .7) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }
                
                if (idx == 5) {
                    if (storyTop >= .85) {
                        i.style.opacity = 0;
                    } else {
                        i.style.opacity = 1;
                    }
                }
        })
        

        let activism = document.querySelector(".activism");
        let infoText = [...document.querySelectorAll(".info-text > .text > p")];

        let activismTop = ( y - (activism.offsetTop - window.innerHeight)) / (activism.offsetHeight);

        if (activismTop >= .5) {
            document.querySelector(".activism-header").style.opacity = 1;
            // document.querySelector(".text.w > p").style.transform=`translate3d(0,0%,0)`;
            infoText.map((u, idx) => {
                let span = u.querySelectorAll("span");
                document.querySelector(".info-text > .img").style.opacity=1;
                if (idx == 0) {
                    span.forEach((u, idx) => {
                        setTimeout(() => {
                            u.style.opacity = 1;
                        }, idx * 50);
                    })
                }

                if (idx == 1) {
                    setTimeout(() => {
                        span.forEach((u, idx) => {
                            setTimeout(() => {
                                u.style.opacity = 1;
                            }, idx * 50);
                        })   
                    }, 1550);
                }
            })
    }



    const infoFacts = document.querySelector(".info-facts");

    var infoFactsTop = ( y - (infoFacts.offsetTop - window.innerHeight)) / (infoFacts.offsetHeight);


    const lerp = (start, end, delta) => {
        return start + (end - start) * delta;
    }

    let infoFactsTopDelta = Number(lerp(0, 1, infoFactsTop).toFixed(2));

    // SAME AS BELOW
    infoFactsTopDelta = infoFactsTopDelta <= 0 ? 0 : infoFactsTopDelta >= 1 ? 1: infoFactsTopDelta;

    // PREFERRED LOGIC
    let ifd = Math.min(Math.max(0, infoFactsTopDelta), 1);

    let targetHits = [0.25, 0.45, 0.65, 1];

    let targetIdx = null;
    let fP = document.querySelectorAll(".f > p");

    targetHits.map((u, idx) => {
        if (u <= ifd) {
            // targetIdx = idx;
            fP[idx].style.opacity = 1;
        }
    })



    const donate = document.querySelector(".donate");
    let donateTop = (y - (donate.offsetTop - window.innerHeight)) / (donate.offsetHeight);


    let donateStrTarget = ".1,.3";
    donateStrTarget = donateStrTarget.split(",");
    donateStrTarget = donateStrTarget.map(u => Number(u));

    let donateMaxMin = Math.min(Math.max(0, donateTop), 1);


    if (donateMaxMin >= .1) {
        document.querySelector(".donate-header > h1").style.transform = `translate3d(0, 0, 0)`;
    } 



    const dT = [...document.querySelectorAll(".dt")];

    // calculate child's top from parent's top


    dT.map((u, idx) => {
        let dTd = ( 1- ((u.parentElement.parentElement.offsetTop + u.offsetTop + 500) - y) / window.innerHeight)

        let dTdL = lerp(1,0,dTd);

        dTdL = Math.max(Math.min(1, dTdL), 0.5);

        u.style.transform = `scale(${dTdL})`;
    
    })


    let accomp = document.querySelector(".accomp");

    let accompRel = document.querySelector(".accomp-rel");

    // target middle of child element height => 300 / 2
    let accompTop = (y - (accomp.offsetTop - window.innerHeight + (accompRel.offsetHeight / 2) )) / (accomp.offsetHeight);    

    accompTop = Math.min(Math.max(0, accompTop), 1);

    let accompTopScale =(y - (accomp.offsetTop - window.innerHeight + (window.innerHeight / 2) - 200)) / (accomp.offsetHeight); 

    accompTopScale = Math.min(Math.max(0, accompTopScale), 1);


    const  accompHeaders = [...document.querySelectorAll(".accomp-header > h1")];


    let accHDeltaOne = lerp(0,-accompHeaders[0].offsetWidth-accomp.querySelector(".accomp-header").offsetWidth,accompTop);
    let accHDeltaTwo = lerp(0,accompHeaders[0].offsetWidth+accomp.querySelector(".accomp-header").offsetWidth,accompTop);



    accompHeaders[0].style.transform = `translate3d(${accHDeltaOne}px, 0, 0)`;
    accompHeaders[accompHeaders.length - 1].style.transform=`translate3d(${accHDeltaTwo}px,0,0)`;
    


    document.querySelector(".mid").style.transform = `translate(0%, 0%) scale(${accompTopScale})`;

    let midAccomp = document.querySelectorAll(".mid-accomp > h1");

    if (accompTopScale >= .5) {
        midAccomp[0].style.clipPath = `polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)`;
    } else {
        midAccomp[0].style.clipPath = `polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)`;

    }
    if (accompTopScale >= .8) {
        midAccomp[1].style.clipPath = `polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)`;
    } else {
        midAccomp[1].style.clipPath = `polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)`;

    }

        window.requestAnimationFrame(init);
    }
    
    
    init()
})

