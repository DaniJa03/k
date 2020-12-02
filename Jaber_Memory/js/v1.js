
const numberCards = 16
let openedCards = []
let cardTypes=[]
for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}

function flipp(event){
        openCard(this)
}
function openCard(c){

   if(openedCards.length<2){
        c.classList.toggle('flipped')
        openedCards.push(c)
        if(openedCards.length == 2){
            if(openedCards[0].type == openedCards[1].type){
                //alert('gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('found')
                        openedCards.pop().classList.toggle('found')
                    },
                    1500
                )
            
            }
            else{
                //alert('nicht gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipped')
                        openedCards.pop().classList.toggle('flipped')
                    },
                    1000
                )
            }
        }

   }
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}