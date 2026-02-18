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

    function preA () {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1000,1);
            let m2 = Math.min((t-s)/650, 1);
            let e = ease()[3](m);
            let e2 = ease()[4](m);
            let e3 = ease()[2](m2)
            let d = 110 + (0 - 110) * e;
            let d1 = 0 + (-100 - 0) * e2;
            let d2 = 10 + (2 - 10) * e2;
            let d3 = 50 + (13 - 50) * e2;
            let d4 = 0 + (20 + 0) * e3;


            setTimeout(() => {
                li.style.transform=`translate3d(0,${d}%,0)`;
                setTimeout(() => {
                    li.style.transform=`translate3d(0,${d1}%,0)`;
                    setTimeout(() => {
                        ti.style.fontSize = `clamp(${d2}rem, 2.4vw, 4rem)`;
                        ti.style.top = `${d3}%`;
                        setTimeout(()=> {
                            tii.style.transform=`skew(-${d4}deg)`;
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

    function preA2 (){
        let s, id;
        function a (t){
            if (!s) s = t;
            let m=Math.min((t-s)/650, 1);
            let e=ease()[0](m);
            let d = 110 + (0 - 110) * e;

            [...document.querySelectorAll(".th > * > *")].map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                }, idx * 50);
            })
            
            if (m < 1) {
                id = requestAnimationFrame(a);
            }
        }

        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 1500);
    }

    preA();
    setTimeout(() => {
        preA2()
    }, 2700)

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






window.addEventListener("load", () => {
  document.addEventListener("DOMContentLoaded", init);
})

