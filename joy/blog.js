const { assert, error, log} = console;
let bl = document.querySelector(".pre > * > h4");
let hd = document.querySelector(".hd")
let pgg = [...document.querySelectorAll(".pgg")];
let lo = [...document.querySelectorAll(".log > * > h3")];
let li = [...document.querySelectorAll(".lin > * > * > * > a")];
let pggs = [...document.querySelectorAll(".pgg > *")];



let pre = () => {
    let blf = bl.getBoundingClientRect();

    function s1() {
        let bs;
        let bid;
        function bf (t) {
            if (!bs) bs = t;
            let m = Math.min((t-bs)/850,1);
            let mo = Math.min((t-bs)/800, 1);

            let e = ease()[4](m);
            let e2 = ease()[1](mo);

            let d = 110 + (0 - 110) * e;
            let o = 0 + (1-0) *e2;

            bl.style.transform=`translate3d(0,${d}%,0)`

            setTimeout(() => {
                pgg.map((u, idx) => {
                    setTimeout(() => {
                        u.style.opacity =o 
                    }, idx * 100);
                })
            }, 500)
            if (m < 1) {
                bid = requestAnimationFrame(bf);
            }
        }

        setTimeout(() => {
            bid = requestAnimationFrame(bf);
            setTimeout(() => {
                cancelAnimationFrame(bid);
            },1000);
        }, 150)

    
        let bll = bl.getBoundingClientRect();


        let bli = blf.top - bll.top;

        bl.style.transform=`translate3d(0,${bli}%,0)`;
        bl.style.transform="";
    }
    function s2 (){
        let hdf = hd.getBoundingClientRect();

        let id, s;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1500, 1);
            let e = ease()[4](m);
            let d = 50 + (5 - 50) * e;

            hd.style.top = `${d}%`;

            if (m < 1) {
                id = requestAnimationFrame(a);
            }

        }

        id = requestAnimationFrame(a);
        setTimeout(() => {
            cancelAnimationFrame(id)
        }, 1500)


        let hdl = hd.getBoundingClientRect();


        let hinv = hdf.top - hdl.top;

        hd.style.top=`${hinv}rem`;
        hd.style.top='';




        pgg.map((u, idx) => {
            let uf = u.getBoundingClientRect();

            let s;
            function ufu (t) {
                if (!s) s = t;
                let m = Math.min((t-s)/1050, 1);
                let e = ease()[4](m);
                let x = 0 + ((window.innerWidth / 2.5 - 10) - 0) * e;
                let y = 0 + ((window.innerHeight / 2.5 + 10) - 0) * e
                setTimeout(() => {
                    u.style.transform=`translate3d(${-x}px, ${y}px,0)`;
                    u.style.background='black'
                }, idx * 150)
                
                if(m < 1) {
                    requestAnimationFrame(ufu);
                }

            }

            requestAnimationFrame(ufu);
            let ul = u.getBoundingClientRect();

            let uivl =uf.left - ul.left;
            let uivt = uf.top - ul.top;

            u.style.transform=`translate3d(${uivl}px, ${uivt}px, 0)`;
            u.style.transform='';



        })
    }

    function s3 (){
        let id;
        let s;

        function iio (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/650, 1);
            let e = ease()[4](m);
            
            let logd, lid, pggsd;

            logd = 110 + (0 - 110) * e;
            lid = 150 + (0 - 150) * e;

            lo.map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${logd}%,0)`
                }, idx * 50);
            })

            li.map((u, idx) => {
                setTimeout(()=> {
                    u.style.transform=`translate3d(0,${lid}%,0)`
                }, idx * 50);
            })

            

            if (m < 2) {
                id = requestAnimationFrame(iio);
            }

        }

        id = requestAnimationFrame(iio);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 1000)
    }

    s1()
    setTimeout(() => {
        s2();
        setTimeout(() => {
            s3()
        }, 600);
    },1800);
}


function update() {
    let resizeTimeout;
    let animationFrameId;

    function handleResizeRAF() {
    // Cancel any pending animation frame
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Request a new frame for the actual work (e.g., recalculating layout)
    animationFrameId = requestAnimationFrame(() => {
        console.log('Performing resize calculations...');
        pgg.map((u) => {
            u.style.transform=`translate3d(${-window.innerWidth / 2.5}px,${window.innerHeight / 2.3}px,0)`;
        })

        if (window.innerWidth < 400) {
            pgg.map((u) => {
                u.style.transform=`translate3d(-${window.innerWidth / 3}px, ${window.innerHeight / 2.3}px, 0)`;
            })
        }
        animationFrameId = null; 
    });
    }
    window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        handleResizeRAF();
    }, 50);
});

}




function init() {
    pre();
    update();
}

function ease () {
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }
    function easeInOutCubic(x){
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }
    function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
   function easeInOutCirc(x) {
        return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }

    return [easeOutCubic,easeInOutCubic,easeOutQuint,easeInOutQuint,easeInOutCirc]
    
}

document.addEventListener("DOMContentLoaded", init);













