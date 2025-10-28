const { log } = console;


document.addEventListener("DOMContentLoaded", (e) => {
    const navLogo = [...document.querySelectorAll(".logo > div > h1")];
    const aboutKeys = [...document.querySelectorAll(".ab-keys > span")];
    const aboutKeysParent = aboutKeys[0].parentElement;

    navLogo.forEach((i, idx) => {
        log (i);
        setTimeout(() => {
            setTimeout(() => {
                i.style.transform = `translate3d(0px,0%,0px)`;
            })
            setTimeout(() => {
                document.querySelector(".nav-socials").style.opacity = 1;
            }, 100)
        }, 6200);
    })



  const aboutKeysHeader = () => {
    let counter = 0;
    setTimer = setInterval(() => {
        counter++;

        if (counter > 1) {
            counter = 0;
        }
        let txt = "";
        let txt2 = "";
        let keys = ["Pastor", "Activist"];
        let idxOne, idxTwo;

        if (keys.includes(keys[0]) && keys.includes(keys[1])) {
            idxOne = keys[keys.indexOf("Pastor")].split("");
            idxTwo = keys[keys.indexOf("Activist")].split("");
        }

        if (counter == 0) {
            idxOne.map((u, idx) => {
                txt += `<span>${u}</span>`;

                aboutKeysParent.innerHTML = txt;
            })
        }
        if (counter == 1) {
                    idxTwo.map((u, idx) => {
                txt2 += `<span>${u}</span>`;

                aboutKeysParent.innerHTML = txt2;
            })
        }
        log (counter);
    }, 8000)
  }  

  setTimeout(aboutKeysHeader, 6500);
    


    
})