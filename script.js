// var crsr = document.querySelector(".cursor");
// var blur= document.querySelector(".cursor-blur");
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.pageX + "px";
//     crsr.style.top = dets.pageY + "px";
//     blur.style.left = dets.pageX -150 + "px";
//     blur.style.top = dets.pageY -150+ "px";
// });
var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (event) {
    // Adjust coordinates for scroll position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    crsr.style.left = mouseX + "px";
    crsr.style.top = mouseY + "px";
    blur.style.left = mouseX - 150 + "px";
    blur.style.top = mouseY - 150 + "px";
});

gsap.to(".nav", {
    backgroundColor: "black",
    height:"100px",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 2,
    }


})
gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller:"body",
        markers: true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2,
}
})
