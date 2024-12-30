let pockets = document.querySelectorAll('.imgpock')



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


const recipes = [['1.jpg','1back.jpg'],['2.png','2back.png']]
main.addEventListener('click', function(event){

    let pocketBlock = event.target;
    let parentID = Number(pocketBlock.parentElement.id);
    let parentElem = pocketBlock.parentElement;
    let imageFront = recipes[parentID][0];
    let imageBack = recipes[parentID][1];
    let flipContainer = document.createElement('div')

    if(!pocketBlock.closest('.pocket')) {
        return
    };





    flipContainer.className = "flip-container"

    flipContainer.innerHTML = '<div class="flip-card">' +
    '<div class="flip-card-front">' +
    '</div>'+
    '<div class="flip-card-back">'+
    '</div>'+
    '</div>'

    let flipCardFront = flipContainer.querySelector('.flip-card-front')
    let flipCardBack = flipContainer.querySelector('.flip-card-back')


    flipCardFront.innerHTML = `<img src='img/recepies/${imageBack}' alt="Front Image" />`
    flipCardBack.innerHTML = `<img src='img/recepies/${imageFront}' alt="Front Image" />`
    console.log(parentElem)

    parentElem.append(flipContainer)
    // parentElem.innerHTML = '';
    // parentElem.append(flipContainer);
    flipContainer.querySelector('flip-card').innerHTML = '';

    flipContainer.addEventListener('click', function(event) {




        this.querySelector('.flip-card').classList.toggle('flipped');


    });

})



function addBlockOfReciep(id){





};
