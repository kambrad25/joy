const { log } = console;
log ('yeah')

document.addEventListener("DOMContentLoaded", (e) => {
    init()
});


function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInOutCirc(x) {
    return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}


function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}
function easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}
function init() {
    function pre () {
        let navcontent = [...document.querySelector("nav").children];
        let precontent = [...document.querySelector(".pre").children];
    

        let s;
        let id;
        let showView = true;
        let isClickedView = false;

        function pa (t) {
            if (!s)s=t;
            let c=Math.min((t-s)/1000, 1);
            let e = easeInOutCirc(c);
            let e2 = easeOutQuint(c);
            let d = 110 + (0 - 110) * e;
            let cd = 50 + (0 - 50) * e;
            let od = 500 + (0 - 500) * e2;
            if (c < 2) {
                navcontent.map((u,idx) => {
                    if (idx <= 0) {
                        let h = u.querySelector("h2");
                        h.style.transform=`translate3d(0,${d}%,0)`
                    } else {
                        setTimeout(() => {
                            let a = [...u.querySelectorAll("a")];
                            a.map((u, idx) => {
                                setTimeout(() => {
                                    u.style.transform=`translate3d(0,${d}%,0)`
                                },idx*80);
                            })
                        },60);
                    }
                })
                precontent.map((u,idx)=>{
                    if (idx == 1) {
                        u.children[0].style.clipPath = `inset(${cd}% ${cd}%)`;
                    } else if (idx == 0){
                        u.children[0].style.transform=`translate3d(0,${d}%,0)`
                    } else if (u.className!="bg"){
                        setTimeout(() => {
                            u.children[0].style.transform=`translate3d(-50%, ${od}%, 0)`
                        },400)
                    }
                })




                id=requestAnimationFrame(pa);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(pa);
            setTimeout(()=>{
                cancelAnimationFrame(id)
            },1200)
        }

        function resizepa() {
            if (window.innerWidth > 400) {
                showView = false;
            } else {
                showView = true;
            }

            if (!showView) {
                document.querySelector(".views > button").style.opacity=0;
            }

            if (showView) {
                document.querySelector(".views > button").style.opacity=1;
            }
        }

        function click () {
            document.querySelector(".views > button").addEventListener("click", (e) => {
                isClickedView = true;
                let id;
                let s;
                function va (t) {
                    if (!s) s = t;
                    let c = Math.min((t-s)/1000,1);
                    let c2 = Math.min((t-s)/500,1);
                    let c3 = Math.min((t-s)/1050,1)
                    let e = easeOutCirc(c);
                    let e2 = easeOutQuint(c2);
                    let e3 = easeInOutBack(c3);
                    let e4 = easeInOutSine(c2);
                    let op = 0 + (0.7 - 0) * e;
                    let pop = 1 + (0.9 - 1) * e;
                    let uop = 100 + (0 - 100) * e;
                    let top = 0 + (-100 - 0) * e2;
                    let iop = 0 + (1 - 0) * c;
                    let top2 = 20 + (30 - 20) * e3;
                    let top3 = 60 + (30 - 60) * e3;
                    let ins = 25 + (100 - 25) * e4;
                    


                    if (c<2) {
                        document.querySelector(".bg").style.opacity =op;
                        document.querySelector(".logo > h2").style.transform=`translate3d(0,${top}%,0)`;
                        document.querySelectorAll(".links > a").forEach((u) => u.style.transform=`translate3d(0,${top}%,0)`);


                        setTimeout(() => {
                            document.querySelector(".head-c > * > *").style.transform=`translate3d(0,${uop}%,0)`;

                            document.querySelector(".exit > * > *").style.transform=`translate3d(0,${uop}%,0)`;


                            document.querySelectorAll(".img-c > *").forEach((u, idx) => {
                                setTimeout(()=>{
                                    u.style.opacity=iop;
                                }, idx * 300);

                                  setTimeout(() => {
                                        if (idx % 2 == 0) {
                                            u.style.top=`${top2}%`
                                        }  else {
                                            u.style.top=`${top3}%`
                                        }

                                        setTimeout(() => {
                                            document.querySelectorAll(".img-c").forEach((u) => {
                                                u.style.flex=`0 0 ${ins}%`;
                                            })
                                        }, 1500);
                                        // u.style.top=idx % 3 == 0 ? `${top2}%` : `${top3}%`
                                    },1500);
                            })
                        },1000)
                        setTimeout(() => {
                            document.querySelector(".pre").style.transform=`scale(${pop})`;
                            setTimeout(() => {
                                document.querySelector(".content").style.transform=`translate3d(0,${uop}%,0)`;
                            }, 10);
                        }, 80);


                        id=requestAnimationFrame(va);
                    }
                }

                if (id !== null) {
                    id = requestAnimationFrame(va);
                    setTimeout(() => {
                        document.querySelector(".bg").style.opacity=0;
                        cancelAnimationFrame(id);
                    }, 1090);
                }
            })
        }


        window.addEventListener("resize", resizepa);

        let pos = document.scrollingElement.scrollTop;
        document.addEventListener("wheel", (e) => {
            if (!isClickedView) return;

            let img = document.querySelectorAll(".img-c")[0];
            let imgW = img.clientWidth;
            let totalImg = imgW * document.querySelectorAll(".img-c").length;
            // log (totalImg);

            pos += (e.deltaY / 120 * 20) / 5;

            // pos = Math.min(0, pos);
            pos = Math.min(Math.max(0, pos), 900)

            document.querySelector(".slider").style.transform=`translate3d(${-pos}%,0%,0)`;
        })


        window.addEventListener("wheel", (e) => {
            // log(e)
        })
      
       
        click()

    }

    function gal () {
        function back () {

        }
        back();
    }

    pre();
    gal();
}





const horizontalContainer = document.querySelector('.slider');

// 2. Define the options for the observer
const options = {
  root: null, // Set the container as the root
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the target is visible
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`${entry.target.id} is now visible horizontally!`);
    } else {
      console.log(`${entry.target.id} is no longer visible.`);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

  horizontalContainer.querySelectorAll(".img-c").forEach(u => {
    observer.observe(u)
  })




