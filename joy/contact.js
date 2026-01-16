const { log } = console;
let pr = [...document.querySelectorAll(".pr")];
let pres= document.querySelector(".pre");
let fs = document.querySelector(".f > * > * > h1");
let ts = document.querySelectorAll(".t > * > h1");


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
            let e = easings()[3](m);
            let d = 110 + (0 - 110) * e;

            if (m < 2) {
                [...document.querySelectorAll(".fsf")].map((u, idx) => {
                    // setTimeout(() => {
                        u.style.transform=`translate3d(0,${d}%,0)`
                    // }, idx * 10)
                })

                ts.forEach((u, idx) => {
                    // setTimeout(() => {
                        u.style.transform=`translate3d(0,${d}%,0)`
                    // }, idx *200);
                })

                id=requestAnimationFrame(a);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(a)
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

    return [easeOutCirc, easeInCirc, easeInOutCubic, easeOutCubic, easeInOutQuint];
}

function animate () {
    let id;
    let s;

    function pre (t) {
        if (!s) s = t;
        let m = Math.min(Math.max(0, (t-s)/550), 1);
        let m2 = Math.min(Math.max(0, (t-s)/1000),1);
        let e = easings()[2](m);
        let e2 = easings()[easings().length - 1](m2);
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
        }, 950)
    }
}

function init() {
   animate()
}

document.addEventListener("DOMContentLoaded", init)