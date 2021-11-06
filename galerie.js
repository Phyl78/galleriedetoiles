const retour = document.querySelector(".RetourEnHaut");

window.addEventListener("scroll", ()=>{

    if (window.pageYOffset>100){
        retour.classList.add("active");
    } else {
        retour.classList.remove("active");

    }
})



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


