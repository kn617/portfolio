const about = document.getElementById("about");
let options1 = {threshold:0.5};
const observer1 = new IntersectionObserver(callback1,options1);
observer1.observe(about);
function callback1(entries) {

if(entries[0].isIntersecting) {

    elm1.classList.add("huwa");
}

}