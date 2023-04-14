document.addEventListener('DOMContentLoaded', function(){

    
    creer_element("button" , "bouton1" , "Découvrez nos formations."); /* Création du Bouton 1 */
    creer_element("button" , "bouton2" , "Continuer l'inscription"); /* Création du Bouton 2 */
    creer_element("video" , "video1");/* Création de la vidéo */
    vérif_btn();

    /* Fonction qui vas initaliser et déclarer les boutons et la vidéo */
    function creer_element(element , element_id , value){
        var form = document.createElement(element);/* Initialisation des balise html */
        form.id = element_id;/* Ajout de la méthode id */
        if(element == "button"){
            form.innerHTML = value;
        }
        document.getElementById(element).appendChild(form);
    }

    /* Fonction qui vas vérifier les éléments */
    function vérif_btn(){
        var btn1= document.getElementById("bouton1");
        var btn2= document.getElementById("bouton2");
        var video= document.getElementById("video1");
        btn1.style.display='block';/* Méthode qui vas faire disparaitre ou afficher notre élément */
        btn2.style.display='none';
        video.style.display='none';

    /* Condition qui vas afficher la vidéo */
    if(video != null){
        video.setAttribute("src", "http://tecfa.unige.ch/guides/html/html5-video/videos/state-of-wikipedia-480x272.ogv");
        video.setAttribute("type", "video/ogg");
        video.setAttribute("controls", '');
    }
    
    /* Condition qui vas gérer les évènements des boutons */
    if(btn1 !=null){
    btn1.addEventListener("click",function(){
        if(btn2 !=null){
        btn1.style.display='none';
        btn2.style.display='block';
        video.style.display='block';
        }
    })}
    if(btn2 !=null){
    btn2.addEventListener("click",function(){
        btn1.style.display='block';
        btn2.style.display='none';
        video.style.display='none';
    })}
    
    }


});