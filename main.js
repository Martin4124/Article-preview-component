const Share = document.querySelector("aside")
const Share_add = document.querySelector("#Share-add")
const Share_remove = document.querySelector("#Share-remove")
const footer = document.querySelector("footer")
const x = window.matchMedia("(min-width: 700px)")

Share_add.addEventListener("click", share1);
Share_remove.addEventListener("click", share2);
x.addListener(media);
function share1(e){
    if(x.matches){
        
    }
    else{
        e.preventDefault();

        footer.classList.add("hidden");
        Share.classList.add("flex");

        Share.classList.add("animation-in")
        setTimeout(function(){
            Share.classList.remove("animation-in")
        }, 1100)
    }
}
function share2(e){
    if(x.matches){
        
    }
    else{
        e.preventDefault();

        footer.classList.remove("hidden");
        Share.classList.remove("flex");

        footer.classList.add("animation-in")
        setTimeout(function(){
            footer.classList.remove("animation-in")
        }, 1100) 
    }
}
function media(x){
    if(footer.classList.contains("hidden")){
    footer.classList.remove("hidden");
    Share.classList.remove("flex");

    footer.classList.add("animation-in")
        setTimeout(function(){
            footer.classList.remove("animation-in")
        }, 1100) 
    }
}