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


            setTimeout(() => {
                li.style.transform=`translate3d(0,${d}%,0)`;
                setTimeout(() => {
                    li.style.transform=`translate3d(0,${d1}%,0)`;
                    setTimeout(() => {
                        ti.style.fontSize = `clamp(${d2}rem, 2.4vw, 4rem)`;
                        ti.style.top = `${d3}%`;
                        setTimeout(()=> {
                            tii.style.transform=`skew(-${d4}deg)`;

                            // setTimeout(() => {
                            //   
                            // })

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
            log (n);
            if (n < 100) { 
                requestAnimationFrame(updln);
            }
        } 


        updln()

    }


    preLoad()
    preA();




    // setTimeout(() => {
    //     preA2()
    // }, 2700)

    log (document.querySelector(".th").offsetTop - document.querySelector(".ti").offsetTop)


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




window.addEventListener("load", () => {
    init();
})
// document.addEventListener("DOMContentLoaded", init);
