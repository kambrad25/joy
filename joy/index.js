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
            document.querySelector(".mh").style.pointerEvents = "all";
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

    let done = false, done2 = false;
    function rve (ele, style, dur, easing, from, to, dx=0) {
        let s, id;
        function a (t) {
            // if (done) return;
            if(!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[easing](m);
            let d = lerp(from, to, e);


            if (style == "opacity") {
                // [...document.querySelectorAll(ele)].map((u, idx) => {
                //     setTimeout(() => {
                //         ele.style.opacity = d;
                //     }, idx * dx);
                // })
                    ele.style.opacity = d
            } 

            if (style == "transformX") {
                ele.style.transform = `translate3d(${d}%,-15px,0)`;
            }

            if (style == "transformY") {
                ele.style.transform=`translate3d(0,${d}%,0)`;
            }

            if (m < 1.5) {
                id=requestAnimationFrame(a);
            }
            // done = true;
        }

        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur += 1000);
    }

    function rv () {
        let trt=document.querySelector(".tr").getBoundingClientRect().top;

        let mth = document.querySelector(".mthimg > *");
        let mth2 = document.querySelector(".mthhimg > *");

        let mtht = mth.getBoundingClientRect().top;
        let mtht2 = mth2.getBoundingClientRect().top;


        let mthh = mth.getBoundingClientRect().height;
        let mthht2 = mth2.getBoundingClientRect().height;

        let del1 = (trt - mtht) / mthh;
        let del2 = (trt - mtht2) / mthht2;

        if (del1 > 0 && !done) {
            done = true;
            rve(mth,"opacity", 350, 0,0,1)
        } 
        // if (del1 < 0 && done) {
        //     // mth.style.opacity=0;
        //     rve(mth, "opacity", 350, 0,1,0);
        //     done = false
        // }

        if (del2 > 0 && !done2) {
            done2 = true;
            rve(mth2,"opacity", 350, 0,0,1)
        }
    }

    let mtfdone=false, mtfdone2 = false;
    function rv2 () {
        let tr = document.querySelector(".tr");
        let mtfsl = document.querySelector(".mtfsl");
        let mtfhit = document.querySelector(".mtfthi");
        let trt = tr.getBoundingClientRect().top;
        let mtfhitt = mtfhit.getBoundingClientRect().top;


        let mtf = document.querySelector(".mtf");
        let mtft = mtf.getBoundingClientRect().top;

        let del = (trt - mtft) / mtf.getBoundingClientRect().height;
        let del2 = (trt - mtfhitt) / mtfhit.getBoundingClientRect().height;

        if (del > 0 && !mtfdone) {
            mtfdone=true;
            rve(mtfsl, "transformX", 300, 0, -100, 0)
        }

        if (del2 > 0 && !mtfdone2) {
            mtfdone2 = true;
            rv_mtfimg(2000, 2);
        }
    }

    function rv_mtfimg(dur, easing) {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[easing](m);
            let dx1 = lerp(-500, 0, e);
            let dx2 = lerp(-500, 0, e);
            let dx3 = lerp(500, 0, e);
            let dx4 = lerp(500, 0, e);

            let dy1 = lerp(-150, 20, e);
            let dy2 = lerp(150, 0, e);
            let dy3 = lerp(-150, 0, e);
            let dy4 = lerp(150, -20, e);

            let op = lerp(100, 0, e);

            document.querySelector(".mtfthimg:nth-child(1)").style.transform=`translate3d(${dx1}%,${dy1}%,0) rotate(-25deg)`;
            document.querySelector(".mtfthimg:nth-child(2)").style.transform=`translate3d(${dx2}%,${dy2}%,0) rotate(-25deg)`;
            document.querySelector(".mtfthimg:nth-child(3)").style.transform=`translate3d(${dx3}%,${dy3}%,0) rotate(25deg)`;
            document.querySelector(".mtfthimg:nth-child(4)").style.transform=`translate3d(${dx4}%,${dy4}%,0) rotate(25deg)`;

            setTimeout(() => {
                [...document.querySelectorAll(".mtfthimg > *")].map((u) => {
                    u.style.filter=`grayscale(${op}%)`;
                })
            }, 1000);
            if (m < 1) {
                id = requestAnimationFrame(a);
            }



        }

        id = requestAnimationFrame(a);


        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 5000);
    }


    function move_y (y) {
        let mtfo = document.querySelector(".mtffo");
        let mtcur = 0;

        let tr = document.querySelector(".tr");
        let trt = tr.getBoundingClientRect().top;
        

        let mtfot = mtfo.getBoundingClientRect().top;

        let del = (trt - mtfot) / mtfo.getBoundingClientRect().height;

        
        mtcur = lerp(mtcur, 50, del);

        mtcur += 20;

        if(mtcur < 0) {
            mtcur = 0;
        }

        if (mtcur >= 100) {
            mtcur = 100;
        }
        

        mtfo.style.transform=`translate3d(0,${mtcur}px,0)`;


    }

    function rv_mtfthq (dur, ese, tx=0) {
        let s, id;
        function a (t) {
            if(!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[ese](m);
            let d1 = lerp(200, 0, e);
            let d2 = lerp(0, 1, e);

            [...document.querySelectorAll(".quo > * > *")].map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d1}%,0)`;
                }, tx * idx);
            })
            setTimeout(() => {
                document.querySelector(".mtfyear").style.opacity=d2
            }, 500);

            if (m < 1) {
                id = requestAnimationFrame(a);
            }
        }

        id = requestAnimationFrame(a);


        setTimeout(() => {
            cancelAnimationFrame(a);
        },  dur + 500);
    }


    let tqd = false;

    function rv3() {
        let trt = document.querySelector(".tr").getBoundingClientRect().top;

        let { top, height } = document.querySelector(".mtffo").getBoundingClientRect();

        let del = (trt - top) / height;

        log (del);

        if (del > -.1 && !tqd) {
            tqd = true;
            rv_mtfthq(2000,3, 100);
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



            rv();
            rv2();
            rv3();
            // rv_mtfthq(1000,)
            // move_y(s);

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
