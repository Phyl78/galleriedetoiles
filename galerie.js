const retour = document.querySelector(".RetourEnHaut");

window.addEventListener("scroll", ()=>{

    if (window.pageYOffset>100){
        retour.classList.add("active");
    } else {
        retour.classList.remove("active");

    }
})

// window.onload=function(){
//     var s=document.getElementById("t").innerHTML; 
//     alert(s);
// }

let imgElement=document.getElementById('imgDisplay');

async function loading(){
    imgElement.src=await getFile ('data/2.jpeg'); 
}





const txtAnim=document.querySelector('h3');

 new Typewriter( txtAnim, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('Bonjour, moi c\'est Daisy')
.pauseFor(300)
.typeString('<strong>, l\'autrice des toiles de peintures ci-dessous dont les fonds recoltés seront reversés auprès')
.pauseFor(4000)
.typeString('<span style="color:maroon"> : Des associations carritatives </span>')
.pauseFor(1000)
.deleteChars(32)
.typeString('pour venir en aide aux enfants démunis <span style="color:blue"> au Congo </span> ')
.pauseFor(1000)
.typeString(',')
.pauseFor(800)
.typeString( " Je vous remercie d\'avance pour votre participation !" )

.start()




let survol1 = document.getElementById("im2");

survol1.addEventListener('mouseover', function (e) {

    this.setAttribute('src', 'tofs/43.jpeg');
} );

survol1.addEventListener('mouseout', function (e){
    this.setAttribute('src', 'tofs/10.jpeg');
});



let survol2 = document.getElementById("im4");

survol2.addEventListener('mouseover', function (e) {

    this.setAttribute('src', 'tofs/37.jpeg');
} );

survol2.addEventListener('mouseout', function (e){
    this.setAttribute('src', 'tofs/11.jpeg');
});
    

let survol3 = document.getElementById("im11");

survol3.addEventListener('mouseover', function (e) {

    this.setAttribute('src', 'tofs/34.jpeg');
} );

survol3.addEventListener('mouseout', function (e){
    this.setAttribute('src', 'tofs/23.jpeg');
});
    

