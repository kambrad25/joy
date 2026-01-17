const { log } = console;
let pr = [...document.querySelectorAll(".pr")];
let pres= document.querySelector(".pre");
let fs = document.querySelector(".f > * > * > h1");
let ts = document.querySelectorAll(".t > * > h1");
let tll = [...document.querySelectorAll(".tl * > * > a")];
let tt = document.querySelector(".tt > * > *");
let yy = document.querySelector(".yy > * > *");
let oph = [...document.querySelectorAll(".oph > * > * > h2")]


function splitWords (ele) {
    let s = ele.textContent.split("");
    fs.innerHTML = "";
    s.map((u) => {
        let sp = document.createElement("span");
        sp.textContent = u;
        sp.className="fsf"


        fs.appendChild(sp);
    })


    if (fs.children.length > 1) {
        setTimeout(() => {
        let id;
        let s;

        function a (t) {
            if (!s) s = t;
            let m = Math.min(Math.max(0, (t-s)/1200), 1);
            let m2 = Math.min(Math.max(0, (t-s)/1800), 1);
            let e = easings()[3](m);
            let e2 = easings()[1](m2);
            let e3 = easings()[5](m2);
            let d = 110 + (0 - 110) * e;
            let d2 = 1 + (0 - 1) * e3;
        

            if (m < 2) {
                [...document.querySelectorAll(".fsf")].map((u, idx) => {
                    u.style.transform=`translate3d(0,${d}%,0)`
                })

                ts.forEach((u, idx) => {
                    u.style.transform=`translate3d(0,${d}%,0)`
                });


                tll.map((u) => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                })

                tt.style.transform=`translate3d(0,${d}%,0)`
                yy.style.transform=`translate3d(0,${d}%,0)`;



                setTimeout(() => {
                    oph.map((u, idx) => {
                        setTimeout(() => {
                            u.style.transform=`translate3d(0,${d}%,0)`;
                        }, idx * 150);
                    });

                setTimeout(() => {
                        document.querySelector(".oph").style.opacity = d2;
                    }, 1800);
                }, 100);

                id=requestAnimationFrame(a);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(a)


            setTimeout(() => {
                cancelAnimationFrame(id)
            }, 2000);
        }
    }, 1600)
    }

}

splitWords(fs)

function easings () {
    function easeOutCirc(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }


    function easeInCirc(x) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }


    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }

    function easeInSine(x) {
        return 1 - Math.cos((x * Math.PI) / 2);
    }
    return [easeOutCirc, easeInCirc, easeInOutCubic, easeOutCubic, easeInOutQuint, easeInSine];
}

function animate () {
    let id;
    let s;

    function pre (t) {
        if (!s) s = t;
        let m = Math.min(Math.max(0, (t-s)/550), 1);
        let m2 = Math.min(Math.max(0, (t-s)/1000),1);
        let e = easings()[2](m);
        let e2 = easings()[easings().length - 2](m2);
        let d = 100 + (0 - 100) * e;
        let d2 = 0 + (50 - 0) * e2;
        let d3 = 0 + (100 - 0) * e2;


        if (m < 2) {
            pr.map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                }, idx * 60);
            })


            setTimeout(() => {
                    pres.style.clipPath=`inset(0% ${d2}%)`;

                    setTimeout(() => {
                        pr.map((u) => {
                            u.style.transform=`translate3d(0,${d3}%,0)`
                        })
                    }, 50)
            }, 1000);
            id = requestAnimationFrame(pre);
        }
    }

    if (id !== null) {
        id = requestAnimationFrame(pre);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 1050)
    }
}

function init() {
   animate()
}

document.addEventListener("DOMContentLoaded", init)