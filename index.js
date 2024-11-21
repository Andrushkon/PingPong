const sectionscontainers=document.getElementsByClassName("sectioncontainer")
for (let index = 0; index < sectionscontainers.length; index++) {
    sectionscontainers[index].onmouseover=function(){
    sectionscontainers[index].style.animation="Boxhover 0.5s" 
    sectionscontainers[index].style.boxShadow="white 0px 0vh 25vh"
    sectionscontainers[index].style.scale="1.1 1.1"
}
sectionscontainers[index].onmouseleave=function(){
    sectionscontainers[index].style.animation="Boxnothover 0.5s" 
    sectionscontainers[index].style.boxShadow="2vh 2vh 2vh black"
    sectionscontainers[index].style.scale="1 1"
} 
}