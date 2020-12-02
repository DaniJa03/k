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

let cardTypes=[]
for (let index = 0; index < 8; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
console.log(cardTypes)
cardTypes = shuffle(cardTypes)
console.log(cardTypes)