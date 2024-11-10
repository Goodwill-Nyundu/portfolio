var typed = new Typed(".text", {
    strings: ["Backend Developer","Frontend Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function getAge() {
    var today = new Date();
    var birthDate = new Date("02/05/1999");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    let element = document.getElementById("age");
    element.innerHTML = age;
}