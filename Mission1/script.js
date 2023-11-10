/** 
 * retourne un objet qui représente l'élément HTML correspondant : 
 * un id : '#id' 
 * une classe : '.maclasse' 
 * une balise : 'h1' 
 * @type {Element} 
 */ 
const oH1Entete=document.querySelector('#entete')
// capture de l'évènement click et appel de la fonction onClick 
oH1Entete.addEventListener('click',onClick)
/** 
* fonction de capture d'évènement 
* l'évènement est passé en paramètre 
* @param e 
*/ 
function onClick(e){ 
    e.preventDefault() //annule l'événement par default 
    // Regardez ce que renvoie e.target 
    console.log('evenement',e.target) 
    e.target. textContent="WORLD" 
}

const img=document.querySelector('#img')
img.addEventListener('click',onClick)
/**
 * @param i
 */
function onClick(i){ 
    i.preventDefault() //annule l'événement par default 
    // Regardez ce que renvoie e.target 
    console.log('evenement',i.target.src) 
}
