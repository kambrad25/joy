const { log } = console;


function init () {
    let s =0, c = 0, ms=false;


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
        let trr = document.querySelector(".trr").getBoundingClientRect().top;
        let mtfsl = document.querySelector(".mtfsl");
        let mtfhit = document.querySelector(".mtfthi");
        let trt = tr.getBoundingClientRect().top;
        let mtfhitt = mtfhit.getBoundingClientRect().top;


        let mtf = document.querySelector(".mtf");
        let mtft = mtf.getBoundingClientRect().top;

        let del = (trr - mtft) / mtf.getBoundingClientRect().height;
        let del2 = (trt - mtfhitt) / mtfhit.getBoundingClientRect().height;

        // log (del);

        if (del >= .05 && !mtfdone) {
            mtfdone=true;
            rve(mtfsl, "transformX", 300, 0, -100, 0)
        }

        // log (del2);
        if (del2 > -.5 && !mtfdone2) {
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

        function rv_mtffiv (dur, ese, tx=0) {
        let s, id, f = document.querySelector(".mtffivline");

        let st = {
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderRight: '1px solid'
        }

        for (let i in st) {
            f.style[i] = st[i];
        }
        function a (t) {
            if(!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[ese](m);
            let d1 = lerp(0, 95, e);
            let d2 = lerp(0, 200, e);

            f.style.maxWidth = `${d1}%`;
            
            setTimeout(() => {
                f.style.height=`${d2}px`;
            }, 1000);



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
    let tqdd = false;

    function rv3() {
        let trt = document.querySelector(".tr").getBoundingClientRect().top;

        let trrt = document.querySelector(".trr").getBoundingClientRect().top;
        let { top, height } = document.querySelector(".mtffo").getBoundingClientRect();

        let del = (trrt - top) / height;

        // log (del);

        if (del > 0 && !tqd) {
            tqd = true;
            rv_mtfthq(2000,3, 100);
        }
    }

    function rv4() {
        let trr = document.querySelector(".trr").getBoundingClientRect().top;
        let mtfiv = document.querySelector(".mtffiv");

        let t = mtfiv.getBoundingClientRect().top;
        let h = mtfiv.getBoundingClientRect().height;

        let del = (trr - t) / h;

        if (del > -.5 && !tqdd) {
            tqdd = true;
            rv_mtffiv(1000, 0)
        }
    }


    let rvp_flag = false, rvt_flag=false;

    function rvp_a (dur,ea) {
        let ps = document.querySelector("#path").getTotalLength();
        let id, s;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[ea](m);
            let d = lerp(parseInt(ps), 0, e);
            let d2 = lerp(.5, 1, e);

            document.querySelector(".mtffivf").style.opacity=d2;

            document.querySelector("#path").style.strokeDashoffset = d;
            if (m < 1) {
                id=requestAnimationFrame(a);
            }
        }

        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur +500);
    }

    function rvp () {
        let t = document.querySelector(".mtffivline");
        let tp = t.getBoundingClientRect().top;
        let ht = t.getBoundingClientRect().height;
        
        let ed = tp + ht;


        let trr = document.querySelector(".trr").getBoundingClientRect().top;


        let del = (trr - ed) / ht;
        
        if (del >= 0 && !rvp_flag) {
            rvp_flag = true;
            rvp_a(1000, 3);
        }
    }

    function rvt () {
        let t = [...document.querySelectorAll(".mtffivtext > *")];
        let trr = document.querySelector(".trr").getBoundingClientRect().top;

        t.map((u, idx) => {
            let { top, height } = u.getBoundingClientRect();
            let ta = top + height;

            let del = (trr - ta) / height;
            
            if (del > 0) {
                u.style.opacity=1;
            } else {
                u.style.opacity=0;
            }
        })
    }

    let rv6_ = false;
    function rvs_6 (dur, ee) {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[ee](m);
            let d = lerp(parseFloat(document.querySelector(".mtfsvg > * > *").getTotalLength()), 0, e);


            document.querySelector(".mtfsvg > * > *").style.strokeDashoffset=d;

            if (m < 1) {
                id=requestAnimationFrame(a);
            }
        }

        id=requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur+500);
    }

    
    let rv7_ = false;
    function rvs_7 (dur, ee, tx=0) {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease()[ee](m);
            let d = lerp(100, 0, e);


            // document.querySelector(".mtfsvg > * > *").style.strokeDashoffset=d;
            [...document.querySelectorAll(".sevt > *:last-child > *")].map((u, idx) => {
                setTimeout(() => {
                    u.style.clipPath=`inset(0 0 0 ${d})`;
                }, idx * t)
            })
            if (m < 1) {
                id=requestAnimationFrame(a);
            }
        }

        id=requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur+500);
    }


    function rvs6 () {
        let trr = document.querySelector(".trr").getBoundingClientRect().top;
        let { top, height, bottom } = document.querySelector(".mtfsvg").getBoundingClientRect();

        let tb = top + height;

        let del = (trr - tb) / height;


        if (del > 0 && !rv6_) {
            rv6_ = true;
            rvs_6(1000, 2)
        }
    }


    function rv7h () {
        let trr = document.querySelector(".trr").getBoundingClientRect().top;
        let { top, height, bottom } = document.querySelector(".mtfsev").getBoundingClientRect();

        let tb = top + height;

        let del = (trr - tb) / height;


        if (del > 0 && !rv7_) {
            rv7_ = true;
               [...document.querySelectorAll(".sevt > *:last-child > *")].map((u, idx) => {
                setTimeout(() => {
                    u.style.clipPath=`inset(0 0 0 0)`;
                }, idx * 100)
            })
            // rvs_7(500, 2, 10)
        }
    }

      let dm = false;

    function rv_mtfso () {
        let mtfso = [...document.querySelectorAll(".mtfso")];
        let mtfsevth = document.querySelector(".mtfsevth");
        let trr = document.querySelector(".trr").getBoundingClientRect();

        let trrt = trr.top;

      
        
        mtfso.map((u, idx) => {
            let { top, height } = u.getBoundingClientRect();

            let del = (trrt - top) / height;

            if (del > .5) {
                u.style.opacity = 1;
            } else {
                u.style.opacity=0;
            }
        })


        function mtfsa (dur, ee) {
            let s,id;
            function a(t) {
                if (!s) s=t;
                let m = Math.min((t-s)/dur,1);
                let e = ease()[ee](m);
                let d1 = 200 + (0 - 200) * e;
                let d2 = 0 + (1 - 0) * e;

                document.querySelector("#mtfsevthh").style.opacity=d2;
                setTimeout(() => {
                    [...document.querySelectorAll(".point_o")].map((u, idx) => {
                        setTimeout(() => {
                            u.style.opacity=d2;

                        }, idx*80)  
                    })
                }, 50)

                setTimeout(() => {
                    [...document.querySelectorAll(".mtfsevth > *:last-child > * ")].map((u, idx) => {
                        setTimeout(() => {
                            u.style.strokeDashoffset=d1;
                        }, idx * 500)
                    })
                }, 100);

                

                if (m < 1) {
                    id=requestAnimationFrame(a);
                }
            }

            id=requestAnimationFrame(a);
            setTimeout(() => {
                cancelAnimationFrame(id);
            }, dur +1000)
        }


        if (((trrt - mtfsevth.getBoundingClientRect().top) / mtfsevth.getBoundingClientRect().height) > .5 && !dm) {
            dm = true;
            mtfsa(1000, 3);
        }
    }



    let dm2 = false;

     function rv_eith () {
        let mtfeig = document.querySelector(".mtfeig");
        let eiht = document.querySelector(".eiht");
        let trr = document.querySelector(".trr").getBoundingClientRect();

        let trrt = trr.top;

        let del1 = (trrt - (eiht.getBoundingClientRect().top + eiht.getBoundingClientRect().height)) / eiht.getBoundingClientRect().height;

        function mtfsa (dur, ee) {
            let s,id;
            function a(t) {
                if (!s) s=t;
                let m = Math.min((t-s)/dur,1);
                let e = ease()[ee](m);
                let d1 = 1180 + (0 - 1180) * e;
                let d2x = lerp(130, 50, e);
                let d2y = lerp(100, 50, e);
                let d3x = lerp(60, -50, e);
                let d3y = lerp(-110, 50,e);
                let sc = lerp(.2,1,e);
            

                document.querySelector(".eiht > *:last-child > path").style.strokeDashoffset = d1;


                [...document.querySelectorAll(".eit")].map((u, idx) => {
                    setTimeout(() => {
                        if (idx == 0) {
                            u.style.transform=`translate3d(${-d2x}%,${-d2y}%,0) scale(${sc})`;
                        } else {
                            u.style.transform=`translate3d(${d3x}%,${d3y}%,0) scale(${sc})`;
                        }
                    }, idx * 100);
                })


                

                if (m < 1) {
                    id=requestAnimationFrame(a);
                }
            }

            id=requestAnimationFrame(a);
            setTimeout(() => {
                cancelAnimationFrame(id);
            }, dur +1000)
        }


        if ( del1 > 0 && !dm2) {
            dm2 = true;
            mtfsa(2000, 1);
        }
    }









    
    function scroll () {
        let tstart, tcurr, velocity=0;
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
            ms=true;
            requestAnimationFrame(a);
        })

        function a () {
            // velocity *= .95;
            // s+=velocity;

            if (s < 0) {
                s = 0;
            }
            if (s > 1215) {
                s = 1215;
            }
            c = lerp(c, s, .3);

            velocity *= .95;
            s+=velocity;



            rv();
            rv2();
            rv3();
            rv4();
            rvp();
            rvt();
            rvs6();
            rv7h();
            rv_mtfso();
            rv_eith()

         
            // rv_mtfthq(1000,)
            // move_y(s);

            document.querySelector(".mh").style.transform=`translate3d(0,${-c}%,0)`
            if (Math.abs(velocity) > .0001) {
                id =requestAnimationFrame(a);
            }
        }
    }


    let dy = 0;

    function sc() {
        document.addEventListener("wheel", (e) => {
            if (ms) {
            let y = e.deltaY / 15;
               
            c+=y * .3;

            if (c < 0) {
                c = 0;
            }
            if (c > 1215) {
                c = 1215;
            }


            
            rv();
            rv2();
            rv3();
            rv4();
            rvp();
            rvt();
            rvs6();
            rv7h();
            rv_mtfso();
            rv_eith()


            document.querySelector(".mh").style.transform=`translate3d(0,${-c}%,0)`;

                


            }

        
            // if (y < 0) {
            //     dy++;
            // } else {
            //     dy--;
            // }

            // c = dy;
            // log (dy, c);
            // dy +=  s;

            // document.querySelector(".mh").style.transform=`translate3d(0,${s}%,0)`;
        })
    }
 



    preLoad()
    preA();
    enter();
    scroll()
    sc()




    // setTimeout(() => {
    //     preA2()
    // }, 2700)

    // log (document.querySelector(".th").offsetTop - document.querySelector(".ti").offsetTop)
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

function lerp (start, end, t) {
    return start + (end - start) * t;
} 

function aaa() {
    function ao (dur, ee) {
        let s = 0, mx=.3, tr=0, end=.99, tt = 0;
        function o (t) {
            s += Math.min((1 * .5) / 100, 1);
            

            let d = lerp(1, 0, s);

            [...document.querySelectorAll(".simg")].map((u, idx) => {
                if (idx == tr) {
                    u.style.opacity= tt;
                }
            })

            if (s > end) {
                tr += 1;
                s = 0;
            }

            if (tr > 2) {
                tr = 0;
                [...document.querySelectorAll(".simg")].map((u, idx) => {
                    u.style.opacity=1;
                 }) 
            }

            if (tr > 1.5) {
                setTimeout(() => {
                    [...document.querySelectorAll(".simg")].map((u, idx) => {
                        if (idx == 0) {
                            u.style.opacity=1;
                        }
                 }) 
                },0);   
            }

         
            // log (tr);

            // log (s);

            requestAnimationFrame(o);
            
        }
        requestAnimationFrame(o);

       


         
    }

    ao(1000, 3);


}




window.addEventListener("load", () => {
    init();
    aaa();

})

document.querySelectorAll(".sevt > *:last-child > *").forEach((u, idx) => log (u.getTotalLength()))

// document.addEventListener("DOMContentLoaded", init);


// log (document.querySelector(".mtfsvg > * > *").getTotalLength())
