const body = document.querySelector("body");
const button = document.querySelector(".button");
const title1 = document.querySelector(".text-top div span");
const title2 = document.querySelector(".text-bottom div span");
const fsmContainer = document.querySelector(".fsm-container");
const fsm = document.querySelector(".fsm .modal-content img");
const hamburger = document.querySelector(".left-hamburger");
const about = document.querySelector("#scrolling-container");
// const homeBtn = document.querySelector('.home-btn');
// const projectIMG = document.querySelector('.fsm .modal-content img');

// button.addEventListener("click", function () {
//     title1.classList.add("closeTopText");
//     title2.classList.add("fadeOut");
//     button.classList.add("btnFadeOut");
//     body.classList.add("changeBackground");
//     // homeBtn.classList.add("home-btn-transition");
//     hamburger.classList.add('btnFadeOut')
//     fsmContainer.classList.add("containerFadeIn");
//     if (button.classList.contains("btnFadeIn")) {
//         button.classList.remove("btnFadeIn");
//     }

//     if (fsmContainer.classList.contains("containerFadeOut")) {
//         fsmContainer.classList.remove("containerFadeOut");
//     }

//     if (fsmContainer.classList.contains("containerFadeOut")) {
//         fsmContainer.classList.remove("containerFadeOut");
//     }

//     if (title1.classList.contains("fadeInTopText")) {
//         title1.classList.remove("fadeInTopText");
//     }

//     if (title2.classList.contains("fadeInBottomText")) {
//         title2.classList.remove("fadeInBottomText");
//     }

//     if (hamburger.classList.contains('btnFadeIn')) {
//         hamburger.classList.remove('btnFadeIn');
//     }
// });

// homeBtn.addEventListener("click", function () {
//     hamburger.classList.add('btnFadeIn');
//     title1.classList.add("fadeInTopText");
//     title2.classList.add("fadeInBottomText");
//     button.classList.remove("btnFadeOut");
//     button.classList.add("btnFadeIn");
//     fsmContainer.classList.add("containerFadeOut");
//     body.classList.remove("changeBackground");
//     if (button.classList.contains("btnFadeOut")) {
//         button.classList.remove("btnFadeOut");
//     }

//     if (title1.classList.contains("fadeOut")) {
//         title1.classList.remove("fadeOut");
//     }

//     if (title2.classList.contains("fadeOut")) {
//         title2.classList.remove("fadeOut");
//     }

//     if (fsmContainer.classList.contains("containerFadeIn")) {
//         fsmContainer.classList.remove("containerFadeIn");
//     }

//     if (title2.classList.contains("removeDelay")) {
//         title2.classList.remove("removeDelay");
//     }

//     if (fsmContainer.classList.contains("containerFadeIn")) {
//         fsmContainer.classList.remove("containerFadeIn");
//     }

//     if (title1.classList.contains("closeTopText")) {
//         title1.classList.remove("closeTopText");
//     }

//     if (homeBtn.classList.contains("home-btn-transition")) {
//         homeBtn.classList.remove('home-btn-transition');
//     }
// });

document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

   ripple.style.animation = "ripple-effect .4s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);
}

// Setup
var fsmActual = document.createElement("div");
fsmActual.setAttribute("id", "fsm_actual");
document.body.appendChild(fsmActual);
var $fsm = document.querySelectorAll(".fsm");
var $fsmActual = document.querySelector("#fsm_actual");
var fsmImg = document.querySelector("#fsm_actual .modal-content");
$fsmActual.style.position = "absolute";

var position = {};
var size = {};

// Modal action stuffs
var openFSM = function (event) {
    var $this = event.currentTarget;
    // var $children = $this.querySelector('.modal-content img');
    position = $this.getBoundingClientRect();
    size = {
        width: window.getComputedStyle($this).width,
        height: window.getComputedStyle($this).height,
    };

    $fsmActual.style.position = "absolute";
    $fsmActual.style.top = position.top + "px";
    $fsmActual.style.left = position.left + "px";
    $fsmActual.style.height = size.height;
    $fsmActual.style.width = size.width;
    $fsmActual.style.margin = $this.style.margin;

    setTimeout(function () {
        $fsmActual.innerHTML = $this.innerHTML;
        $childrenLogo = fsmActual.querySelector(".modal-content img");
        $childrenHeader = fsmActual.querySelector(".modal-content .header");
        $childrenDescription = fsmActual.querySelector(".modal-content .description");
        $childrenContainerButton = fsmActual.querySelector(".modal-content .buttonBox a");
        $childrenButton = fsmActual.querySelector('.modal-content .preview__back');
        var classes = $this.classList.value.split(" ");
        for (var i = 0; i < classes.length; i++) {
            $fsmActual.classList.add(classes[i]);
        }
        $fsmActual.classList.add("growing");
        $childrenLogo.classList.add("growing");
        $childrenHeader.classList.add("growing");
        $childrenDescription.classList.add("growing");
        $childrenButton.classList.add("growing");
        $childrenContainerButton.classList.add("growing");
        $fsmActual.classList.add("no-hover");
        // $children.classList.add('active');
        $fsmActual.style.height = "100vh";
        $fsmActual.style.width = "100vw";
        $fsmActual.style.top = "0";
        $fsmActual.style.left = "0";
        $fsmActual.style.margin = "0";
    }, 1);

    setTimeout(function () {
        $childrenLogo.classList.remove("growing");
        $childrenLogo.classList.add("full-screen");
        $childrenHeader.classList.remove("growing");
        $childrenHeader.classList.add("full-screen");
        $childrenDescription.classList.remove("growing");
        $childrenDescription.classList.add("full-screen");
        $childrenButton.classList.remove('growing');
        $childrenButton.classList.add('full-screen');
        $childrenContainerButton.classList.remove("growing");
        $childrenContainerButton.classList.add("full-screen");
    }, 1000);

    setTimeout(function () {
        $fsmActual.classList.remove("growing");
        $fsmActual.classList.add("full-screen");
    }, 50);
};

var closeFSM = function (event) {
    var $this = event.currentTarget;
    $childrenLogo = fsmActual.querySelector(".modal-content img");
    $childrenHeader = fsmActual.querySelector(".modal-content .header");
    $childrenDescription = fsmActual.querySelector(".modal-content .description");
    $childrenContainerButton = fsmActual.querySelector(".modal-content .buttonBox a");
    $childrenButton = fsmActual.querySelector('.modal-content .preview__back.full-screen');

    setTimeout(function () {
        $childrenLogo.classList.remove("full-screen");
    }, 500);

    $childrenHeader.classList.add('fadeOutText');
    $childrenDescription.classList.add('fadeOutText');
    $childrenContainerButton.classList.add("fadeOutText");
    $childrenButton.classList.add('fadeOutText');

    // setTimeout(function() {
    //     $fsmActual.addEventListener("click", removeChild);
    // }, 1000);

    setTimeout(function () {
        $this.style.height = size.height;
        $this.style.width = size.width;
        $this.style.top = position.top + "px";
        $this.style.left = position.left + "px";
        $this.style.margin = "0";
    }, 1500);
    // $children.classList.add('growing');
    // $this.classList.remove("full-screen");
    // $this.classList.add("shrinking");

    setTimeout(function () {
        while ($this.firstChild) $this.removeChild($this.firstChild);
        var classList = $this.classList;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }
        $this.style = "";
    }, 2500);
};

for (var i = 0; i < $fsm.length; i++) {
    $fsm[i].addEventListener("click", openFSM);
}

// $childButton = fsmActual.querySelector(".modal-content .preview_back");

// $childButton.addEventListener("click", closeFSM);

$fsmActual.addEventListener("click", closeFSM);

// small dot cursor
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor-small");

const initCursor = () => {
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

// outer cursor circle
let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor-canvas");
    const shapeBounds = {
        width: 75,
        height: 75
    };
    paper.setup(canvas);
    const strokeColor = "#fff";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    const noiseScale = 150;
    const noiseRange = 4;
    let isNoisy = false;

    // the base shape for the noisy circle
    const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
    );

    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;

    polygon.smooth();
    group = new paper.Group([polygon]);
    group.applyMatrix = false;

    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];

    const lerp = (a, b, n) => {
        return (1-n) * a + n * b;
    };

    const map = (value, in_min, in_max, out_min, out_max) => {
        return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    };

    paper.view.onFrame = event => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
    }

    // magnetic and noisy
    paper.view.onFrame = event => {
    if (!isStuck) {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
    } else if (isStuck) {
        lastX = lerp(lastX, stuckX, 0.2);
        lastY = lerp(lastY, stuckY, 0.2);
        group.position = new paper.Point(lastX, lastY);
    }
    
    if (isStuck && polygon.bounds.width < shapeBounds.width) {
        polygon.scale(1.08);
    } else if (!isStuck && polygon.bounds.width > 30) {
        if (isNoisy) {
            polygon.segments.forEach((segment, i) => {
                segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
            });
            isNoisy = false;
            bigCoordinates = [];
        }
        const scaleDown = 0.92;
        polygon.scale(scaleDown);
    }

    if (isStuck && polygon.bounds.width >= shapeBounds.width) {
        isNoisy = true;
        if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
                bigCoordinates[i] = [segment.point.x, segment.point.y];
            });
        }
        
        polygon.segments.forEach((segment, i) => {
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
            const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

            const newX = bigCoordinates[i][0] + distortionX;
            const newY = bigCoordinates[i][1] + distortionY;

            segment.point.set(newX, newY);
        });
    }
    polygon.smooth();
};

};

initCanvas();

// hover state
const initHovers = () => {
    const handleMouseEnter = e => {
        const navItem = e.currentTarget;
        const navItemBox = navItem.getBoundingClientRect();
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
        stuckY = Math.round(navItemBox.top + navItemBox.width / 2);
        isStuck = true;
    };

    const handleMouseLeave = () => {
        isStuck = false;
    };

    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });
};

initHovers();

document.fonts.ready.then(function() {
    document.getElementById("scrolling-container").addEventListener('scroll', function ( event ) {

        var height = $(document.getElementById("scrolling-container")).scrollTop();

        if (height > 885) {
            document.getElementById("scrolling-container").scrollTop = 885;
        }

        if (height < 75) {
            document.getElementById("scrolling-container").scrollTop = 75;
        }

        var isSentenceOne = true;
        var isSentenceTwo = true;
        var isSentenceThree = true;
        var isSentenceFour = true;

        if (height <= 75) {
            isSentenceOne = true;
            isSentenceTwo = false;
            isSentenceThree = false;
            isSentenceFour = false;
        } else if (height == 345) {
            isSentenceOne = false;
            isSentenceTwo = true;
            isSentenceThree = false;
            isSentenceFour = false;
        } else if (height == 615) {
            isSentenceOne = false;
            isSentenceTwo = false;
            isSentenceThree = true;
            isSentenceFour = false;
        } else if (height >= 885) {
            isSentenceOne = false;
            isSentenceTwo = false;
            isSentenceThree = false;
            isSentenceFour = true;
        }

        document.getElementsByClassName("sentenceOne")[0].style.color = isSentenceOne ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        document.getElementsByClassName("sentenceOne")[1].style.color = isSentenceOne ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';

        document.getElementsByClassName("sentenceTwo")[0].style.color = isSentenceTwo ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        document.getElementsByClassName("sentenceTwo")[1].style.color = isSentenceTwo ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';

        document.getElementsByClassName("sentenceThree")[0].style.color = isSentenceThree ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        document.getElementsByClassName("sentenceThree")[1].style.color = isSentenceThree ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';

        // document.getElementsByClassName("sentenceFour")[0].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.getElementsByClassName("sentenceFour")[1].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';

        // document.querySelectorAll("#scrolling-container ul li a")[0].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.querySelectorAll("#scrolling-container ul li a")[1].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.querySelectorAll("#scrolling-container ul li a")[2].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.querySelectorAll("#scrolling-container ul li a")[3].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.querySelectorAll("#scrolling-container ul li a")[4].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.querySelectorAll("#scrolling-container ul li a")[5].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';

        // document.querySelectorAll('#scrolling-container ul li a')[0].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.querySelectorAll('#scrolling-container ul li a')[1].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.querySelectorAll('#scrolling-container ul li a')[3].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.querySelectorAll('#scrolling-container ul li a')[2].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.querySelectorAll('#scrolling-container ul li a')[4].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';
        // document.querySelectorAll('#scrolling-container ul li a')[5].style.color = isSentenceFour ? 'rgba(174, 149, 86, 1)' : 'rgba(174, 149, 86, 0.1)';

        // document.getElementsByTagName("a")[0].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.getElementsByTagName("a")[1].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.getElementsByTagName("a")[2].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.getElementsByTagName("a")[3].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.getElementsByTagName("a")[4].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
        // document.getElementsByTagName("a")[5].style.color = isSentenceFour ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)';
    }, false);
})

let burgerOpen = false;
hamburger.addEventListener('click', function() {
    if(!burgerOpen) {
        hamburger.classList.remove('close');
        hamburger.classList.remove('close2');
        hamburger.classList.add('open');
        document.getElementById('background-item').style.visibility = 'visible';
        document.getElementById('background-item').style.opacity = '1';
        document.querySelector('.animated-icons').style.filter = 'blur(20px)';
        document.querySelector('.animated-title').style.filter = 'blur(20px)';
        document.getElementById('darken').style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
        document.getElementById('darken').style.zIndex = '9999';
        setTimeout(function() {
            hamburger.classList.add('open2')
        }, 500)
        burgerOpen = true;
    } else {
        hamburger.classList.remove('open');
        hamburger.classList.remove('open2');
        hamburger.classList.add('close');
        document.getElementById('background-item').style.visibility = 'hidden';
        document.getElementById('background-item').style.opacity = '0';
        document.querySelector('.animated-icons').style.filter = 'blur(0px)';
        document.querySelector('.animated-title').style.filter = 'blur(0px)';
        document.getElementById('darken').style.backgroundColor = 'rgba(18, 18, 18, 0)';
        document.getElementById('darken').style.zIndex = '0';
        setTimeout(function() {
            hamburger.classList.add('close2')
        }, 500);
        burgerOpen = false;
        }
    })
    
    /* SCROLL ANIMATIONS */
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const leftHiddenElements = document.querySelectorAll('.left');
    const rightHiddenElements = document.querySelectorAll('.right');
    leftHiddenElements.forEach((el) => observer.observe(el));
    rightHiddenElements.forEach((el) => observer.observe(el));