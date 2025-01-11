





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


main.addEventListener('click', function(event){
    const pocket = event.target;

    if(!pocket.closest('.imgpock')) {
        return
    };

    addBlockOfReciep(pocket)
})




let paperInPocket = null;
function appearDisappearPaperInPocket(cardInPocket){

    const classListCard = cardInPocket.classList;

    if (paperInPocket != null){

        if (classListCard.contains('paperApear')){
            classListCard.remove('paperApear')
        }

    
        getPocketByClassName.querySelector('#' + paperInPocket).lastElementChild.classList.replace('paperDisapear', 'paperApear')
        classListCard.add('paperDisapear');

        paperInPocket = cardInPocket.parentElement.id

    }


    else{
        paperInPocket = cardInPocket.parentElement.id;
        classListCard.add('paperDisapear');

    };

}

function appearDisappearReciepes(reciepCard) {
    let pocketsElementById = Array.from(getPocketByClassName.children);

    const lastPocket = pocketsElementById.at(-1);

    if (lastPocket.classList.contains('appearReciep')){

        lastPocket.classList.replace('appearReciep', 'disappearReciep');
        reciepCard.classList.add('appearReciep');
        pocketsModule.append(reciepCard)

        setTimeout(() => {
            lastPocket.remove();
        }, 1000);

    }



    else{


        reciepCard.classList.add('appearReciep');
        pocketsModule.append(reciepCard)
    }


};



function addBlockOfReciep(pocket){


    let parentElem = pocket.parentElement;
    let parentID = Number(parentElem.id.at(-1));
    let flipContainer = document.createElement('div')

    let miniCardInPocket = pocket.nextElementSibling




    flipContainer.className = 'pocket flip-container'

    let imageFront = recipes[parentID][0];
    let imageBack = recipes[parentID][1];


    flipContainer.innerHTML = `
    <div class="flip-card" id="animation">
    <div class="flip-card-front"></div>
    <div class="flip-card-back"></div>
    </div>`;

    let flipCardFront = flipContainer.querySelector('.flip-card-front')
    let flipCardBack = flipContainer.querySelector('.flip-card-back')

    flipCardFront.innerHTML = `<img src='img/recepies/${imageBack}' alt="Front Image" />`
    flipCardBack.innerHTML = `<img src='img/recepies/${imageFront}' alt="Front Image" />`


    appearDisappearReciepes(flipContainer);

    appearDisappearPaperInPocket(miniCardInPocket);



    setTimeout(() => {
        flipContainer.addEventListener('click', function() {
            this.querySelector('.flip-card').classList.toggle('flipped');
        });
    }, 1000);


};
