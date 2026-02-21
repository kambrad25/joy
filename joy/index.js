const { log } = console;


function init () {


    function pre () {

    }

    // function preA () {
    //     function a () {

    //     }
    // }

    let li = document.querySelector(".li");
    let ti = document.querySelector(".ti");
    let tii = document.querySelector(".ti > * > *");
    let lo_n = document.querySelector(".lo-n > * > *");
    let lo_m = document.querySelector(".lo-m > * > *");
    let op = [...document.querySelectorAll(".op")];
    let dsth = [...document.querySelectorAll(".dsth > h1")];
    let ent = document.querySelector(".ent");

    let touched = false;

    function preA () {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1000,1);
            let m2 = Math.min((t-s)/650, 1);
            let e = ease()[3](m);
            let e2 = ease()[4](m);
            let e3 = ease()[2](m2);
            let e4 = ease()[0](m2);
            let d = 110 + (0 - 110) * e;
            let d1 = 0 + (-100 - 0) * e2;
            let d2 = 10 + (2 - 10) * e2;
            let d3 = 50 + (14 - 50) * e2;
            let d4 = 0 + (20 + 0) * e3;
            let d5 = 0 + (-100 - 0) * e3;
            let d6 = 110 + (0 - 110) * e3;
            let d7 = 110 + (0 - 110) * e4;
            let d8 = 0 + (1 - 0) * e3; 
            let d9 = 100 + (0 - 100) * e3;



            setTimeout(() => {
                li.style.transform=`translate3d(0,${d}%,0)`;
                setTimeout(() => {
                    li.style.transform=`translate3d(0,${d1}%,0)`;
                    setTimeout(() => {
                        ti.style.fontSize = `clamp(${d2}rem, 2.4vw, 4rem)`;
                        ti.style.top = `${d3}%`;
                        setTimeout(()=> {
                            tii.style.transform=`skew(-${d4}deg)`;

                            setTimeout(() => {
                                 [...document.querySelectorAll(".th > * > *")].map((u, idx) => {
                                    setTimeout(() => {
                                        u.style.transform=`translate3d(0,${d7}%,0)`;
                                    }, idx * 50);
                                })


                                  lo_n.style.transform=`translate3d(0,${d5}%,0)`;
                                  lo_m.style.transform=`translate3d(0,${d6}%,0)`;

                                  [...document.querySelectorAll(".op")].map((u) => {
                                    u.style.opacity=d8
                                  })


                                  setTimeout(() => {
                                    dsth.map((u, idx) => {
                                        setTimeout(() => {
                                            u.style.transform=`translate3d(0,${d7}%,0)`;
                                        }, idx * 100)
                                    });

                                    setTimeout(() => {
                                        if (document.querySelector(".dsthl")) {
                                            document.querySelector(".dsthl").style.transform=`translate3d(${-d9}%,0,0)`
                                        }
                                    }, 500);
                                }, 100);

                            }, 150);
                        }, 500);
                    }, 1000);
                }, 1000);
            }, 100);
            if (m < 1) {
                id = requestAnimationFrame(a);
            }

        }

        id = requestAnimationFrame(a);


        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 3000);  
    }

    // function preA2 (){
    //     let s, id;
    //     function a (t){
    //         if (!s) s = t;
    //         let m=Math.min((t-s)/650, 1);
    //         let e=ease()[0](m);
    //         let d = 110 + (0 - 110) * e;

           
            
    //         if (m < 1) {
    //             id = requestAnimationFrame(a);
    //         }
    //     }

    //     id = requestAnimationFrame(a);

    //     setTimeout(() => {
    //         cancelAnimationFrame(id);
    //     }, 1500);
    // }

    function preLoad () {
        let ln = document.querySelector(".lo-n > * > *");

        let n = 0;
        function updln () {
            n = n + 1 * .7;
            n = Math.ceil(n)

            ln.textContent = `${n}%`
            // log (n);
            if (n < 100) { 
                requestAnimationFrame(updln);
            }
        } 


        updln()

    }

    

    function enter () {
        function an (ele,style, dur, easing, from, to, dx=0) {
            let s, id;
            function a (t) {
                if (!s) s = t;
                let m = Math.min((t-s)/dur, 1);
                let e = ease()[easing](m);
                let d = from + (to - from) * e;


                if (style == "transform") {
                    [...document.querySelectorAll(ele)].map((u, idx) => {
                        setTimeout(() => {
                            u.style.transform=`translate3d(0,${d}%,0)`;
                        }, idx * dx);
                    })
                }
                
                if (style == "opacity") {
                    [...document.querySelectorAll(ele)].map((u, idx) => {
                        setTimeout(() => {
                            u.style.opacity = d;
                        }, idx * dx);
                    })
                }

                if (m < 1) {
                    id = requestAnimationFrame(a);
                }
            }

            id = requestAnimationFrame(a);

            setTimeout(() => {

            }, dur + 500);
        }
        ent.addEventListener("click", (e) => {
            touched=true;
            an(".ent", "transform", 350, 0, 0, -110);

            setTimeout(() => {
                an(".bg", "opacity", 1000, 3, 0, .3)
                an(".u", "transform", 1000, 3, 110,0);

                setTimeout(() => {
                    an(".mf > * > *", "transform", 1000, 3, 110, 0, 50);

                    setTimeout(() => {
                        an(".ms > * > *", "transform", 1000, 3, 150, 0, 80)
                    }, 250);
                }, 250)
            }, 100);
        })
    }

    let done = false;
    function rve (ele, style, dur, easing, from, to, dx=0) {
        let s, id;
        function a (t) {
            // if (done) return;
            if(!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[easing](m);
            let d = lerp(from, to, e);


            if (style == "opacity") {
                [...document.querySelectorAll(ele)].map((u, idx) => {
                    setTimeout(() => {
                        u.style.opacity = d;
                    }, idx * dx);
                })
            } 

            if (m < 1) {
                id=requestAnimationFrame(a);
            }
            // done = true;
        }

        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur += 500);
    }

    function rv (s) {
        let { top } = document.querySelector(".tr").getBoundingClientRect();
        let ele = document.querySelector(".mth").getBoundingClientRect().top;
        let eleh = document.querySelector(".mth").getBoundingClientRect().height;

        let del = (top - ele) / eleh;

        if (del > 0 && !done) {
            done=true;
            rve(".mthimg > *", "opacity", 500, 3, 0, 1);
            
            // document.querySelector(".mthimg > *").style.opacity=1;
        }
    }

    function scroll () {
        let tstart, tcurr, velocity=0,s=0, c = 0;
        let ttstart, ttcur, id;
        
        document.addEventListener("touchstart", (e) => {
            if (!touched) return;
            tstart = e.touches[0].screenY;
            ttstart = new Date();
            if (id) cancelAnimationFrame(id)
        });

        document.addEventListener("touchmove", (e) => {
            if (!touched) return;
            tcurr = e.touches[0].screenY;
            let del = tstart - tcurr;
            ttcur = new Date();

            let ttdelta = ttcur - ttstart;

            if (ttdelta > 5) {
                velocity = del / ttdelta;
                ttstart = new Date();
            }

            tstart =  tcurr;
        });

        document.addEventListener("touchend", (e) => {
            requestAnimationFrame(a);
        })


        function a () {
            // velocity *= .95;
            // s+=velocity;

            if (s < 0) {
                s = 0;
            }
            c = lerp(c, s, .3);

             velocity *= .95;
            s+=velocity;



            rv(s);

            document.querySelector(".mh").style.transform=`translate3d(0,${-c}%,0)`
            if (Math.abs(velocity) > .0001) {
                id =requestAnimationFrame(a);
            }
        }
    }

    preLoad()
    preA();
    enter();
    scroll()




    // setTimeout(() => {
    //     preA2()
    // }, 2700)

    // log (document.querySelector(".th").offsetTop - document.querySelector(".ti").offsetTop)


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
}



let scaled = true;

[...document.querySelectorAll(".dsi > img")].map((u) => {
    u.addEventListener("click", (e) => {
        // if (!scaled) scaled=true;
        let { top, left, width, height } = e.target.getBoundingClientRect();


        let x = (window.innerWidth / 2) - (left + (width / 2));
        let y = (window.innerHeight / 2) - (top + (height / 2));

        if (scaled == true) {
            e.target.style.transform=`translate3d(${x}px, ${y}px, 0) scale(9)`;
            e.target.style.transition = 'transform 650ms ease'
        } else {
            e.target.style.transform=`translate3d(0,0,0) scale(1)`;
            e.target.style.transition = 'transform 650ms ease'
        }

        scaled = false;
        
        
    })
})

function lerp (start, end, t) {
    return start + (end - start) * t;
} 




window.addEventListener("load", () => {
    init();
})
// document.addEventListener("DOMContentLoaded", init);
