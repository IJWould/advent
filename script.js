





// for (let pocket of pockets){
    //     pocket.addEventListener('click', function(event){
        //         let pocketBlock = pocket;
        //         let parentID = Number(pocketBlock.parentElement.id);
        //         let parentElem = pocketBlock.parentElement;
        //         let imageFront = recipes[parentID[0]];
        //         let imageBack = recipes[parentID[1]]
        //         let flipContainer = document.createElement('div')



        //         console.log(parentElem)

        //         flipContainer.className = "flip-container"

        //         flipContainer.innerHTML = '<div class="flip-card">' +
        //         '<div class="flip-card-front">' +
        //         '</div>'+
        //         '<div class="flip-card-back">'+
        //         '</div>'+
        //         '</div>'


        //         console.log(recipes[parentID])

        //         flipContainer.childNodes[0].firstChild.innerHTML = `<img src='img/recepies/${imageFront}' alt="Front Image" />`
        //         flipContainer.childNodes[0].lastChild.innerHTML = `<img src='img/recepies/${imageBack}' alt="Front Image" />`
        //         console.log(flipContainer.childNodes[0].firstChild)

        //         parentElem.append(flipContainer)

        //     })
        // }


const pocketsModule = document.querySelector('.pockets')
const getPocketByClassName = document.getElementById('getById')
const recipes = [['1.jpg','1back.jpg'],['2.png','2back.png']]

let paperInPocket;

main.addEventListener('click', function(event){
    const pocket = event.target;

    if(!pocket.closest('.imgpock')) {
        return
    };

    addBlockOfReciep(pocket)
})


function appearDisappearPaperInPocket(){}

function appearDisappearReciepes(reciepCard, recepieInPocket) {
    let pocketsElementById = Array.from(getPocketByClassName.children);
    let indexOfPocket = recepieInPocket;


    if (pocketsElementById.at(-1).classList.contains('appearReciep')){
        indexOfPocket.classList.replace('disappearReciep', 'appearReciep');
        pocketsElementById.at(-1).classList.replace('appearReciep', 'disappearReciep');
        reciepCard.classList.add('appearReciep');
        pocketsModule.append(reciepCard)

        setTimeout(() => {
            pocketsElementById.at(-1).remove();
        }, 1000);

        }

        else{
            reciepCard.classList.add('appearReciep');
            pocketsModule.append(reciepCard)
            indexOfPocket.classList.add('disappearReciep');
        }

}



function addBlockOfReciep(pocket){


    let parentElem = pocket.parentElement;
    let parentID = Number(parentElem.id);
    let flipContainer = document.createElement('div')
    let paper = pocket.nextElementSibling


    flipContainer.className = 'pocket flip-container'

    let imageFront = recipes[parentID][0];
    let imageBack = recipes[parentID][1];

    flipContainer.innerHTML = '<div class="flip-card" id="animation">' +
    '<div class="flip-card-front">' +
    '</div>'+
    '<div class="flip-card-back">'+
    '</div>'+
    '</div>'

    let flipCardFront = flipContainer.querySelector('.flip-card-front')
    let flipCardBack = flipContainer.querySelector('.flip-card-back')

    flipCardFront.innerHTML = `<img src='img/recepies/${imageBack}' alt="Front Image" />`
    flipCardBack.innerHTML = `<img src='img/recepies/${imageFront}' alt="Front Image" />`

    appearDisappearReciepes(flipContainer, paper);





    setTimeout(() => {
        flipContainer.addEventListener('click', function() {
            this.querySelector('.flip-card').classList.toggle('flipped');
        });
    }, 1000);


};
