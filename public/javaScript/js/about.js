export function createRelationDiv (){
    let firstP = document.querySelector(".about-first-p");
    let secondP = document.querySelector(".about-second-p");

    let countOfLetter = 120;
    const windowWidth = window.screen.width;
    
    if (windowWidth >= 576 && windowWidth <= 768) {
        countOfLetter = 330;
    } else if (windowWidth >= 769 && windowWidth <= 992) {
        countOfLetter = 505;
    } else if (windowWidth >= 993 && windowWidth <= 1200) {
        countOfLetter = 637;
    }else if (windowWidth >= 1201) {
        countOfLetter = 770;
    }

    let firstPContent = firstP.textContent;

    if(firstPContent.length > countOfLetter){
        firstP.textContent = firstPContent.substring(0,countOfLetter);
        const amountSubtract = firstPContent.length - countOfLetter;
        secondP.textContent = firstPContent.substring(countOfLetter,(amountSubtract + countOfLetter));
    }
        
};

