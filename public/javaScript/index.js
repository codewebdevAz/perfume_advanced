// ! About start

// function createRelationDiv(){
//     let firstP = document.querySelector(".about-first-p");
//     let secondP = document.querySelector(".about-second-p");

//     let countOfLetter = 120;
//     const windowWidth = window.screen.width;
    
//     if (windowWidth >= 576 && windowWidth <= 768) {
//         countOfLetter = 330;
//     } else if (windowWidth >= 769 && windowWidth <= 992) {
//         countOfLetter = 505;
//     } else if (windowWidth >= 993 && windowWidth <= 1200) {
//         countOfLetter = 637;
//     }else if (windowWidth >= 1201) {
//         countOfLetter = 770;
//     }

//     let firstPContent = firstP.textContent;

//     if(firstPContent.length > countOfLetter){
//         firstP.textContent = firstPContent.substring(0,countOfLetter);
//         const amountSubtract = firstPContent.length - countOfLetter;
//         secondP.textContent = firstPContent.substring(countOfLetter,(amountSubtract + countOfLetter));
//     }
        
// };
// createRelationDiv();

function isActiveBasketAbout(th){
    const aboutBasketClass = [...th.classList]
    
    const isActiveBasket = aboutBasketClass.some(classname => classname === "about-active");

    if(isActiveBasket){
        th.classList.remove("about-active");
    }else if(!isActiveBasket){
        th.classList.add("about-active");
    }
}
function isActiveHeartAbout(th){
    const aboutHeartClass = [...th.classList]
    
    const isActiveHeart = aboutHeartClass.some(classname => classname === "about-active");

    if(isActiveHeart){
        th.classList.remove("about-active");
    }else if(!isActiveHeart){
        th.classList.add("about-active");
    }
}

// ! About end

//! Card start

function isActiveBasket(th){
    
    const cardBasketClass = [...th.classList]
    
    const isActiveBasket = cardBasketClass.some(classname => classname === "card-active");

    if(isActiveBasket){
        th.classList.remove("card-active");
    }else if(!isActiveBasket){
        th.classList.add("card-active");
    }

};
function isActiveHeart(th){
    
        const cardHeartClass = [...th.classList];

        const isActiveHeart = cardHeartClass.some(classname => classname === "card-active");

        if(isActiveHeart){
            th.classList.remove("card-active");
        }else if(!isActiveHeart){
            th.classList.add("card-active");
        }
    
};

// ! Card end

//! Search Start

function searchDivShow(){
    const searchDiv = document.querySelector(".nav-search-div");
    const searchDivClass = [...searchDiv.classList];

    const isHidden = searchDivClass.some(classname => classname === "display-none");

    if(isHidden){
        searchDiv.classList.remove("display-none");
    }else if(!isHidden){
        searchDiv.classList.add("display-none");
    }

}

// ! Search end

//! Basket start

const allBasket = document.querySelectorAll('.all-basket');

for (let i = 1; i <= allBasket.length; i++) {
    const btnSubtract = document.querySelector(`#basket_subtract_${i}`);
    const btnPlus = document.querySelector(`#basket_plus_${i}`);
    const btnInp = document.querySelector(`#basket_inp_${i}`);
    const basketTotally = document.querySelector(`#basket_totally_${i}`);
    const basketTotallyContent = basketTotally.textContent;

    let btnInpValue =btnInp.value;
    
    btnPlus.addEventListener('click', ()=>{
        btnInpValue ++;
        btnInp.value = btnInpValue;
        basketTotally.textContent = (basketTotallyContent * btnInpValue).toFixed(2);
        totallyPriceEnd()
    });
    btnSubtract.addEventListener('click', ()=>{
        if(btnInpValue != 1){
            btnInpValue --;
            btnInp.value = btnInpValue;
            basketTotally.textContent = (basketTotallyContent * btnInpValue).toFixed(2);
            totallyPriceEnd()
        }
    });
};

const totallyPrice = document.querySelector('.all-product-price');

function totallyPriceEnd(){
    let totally = 0
for (let i = 1; i <= allBasket.length; i++) {

    const basketTotally = document.querySelector(`#basket_totally_${i}`);
    const basketTotallyContent = basketTotally.textContent;
 
    totally += Number(basketTotallyContent); 
    
    totallyPrice.textContent = totally.toFixed(2);
    
};
};
totallyPriceEnd();

// ! Basket end
// start

function showDeleteDiv(th){
    const adminDeleteDiv = document.querySelector(".admin-delete-div");
    const adminDeleteProductName = document.querySelector(".admin-delete-product");
    const adminDeleteDivClass = [...adminDeleteDiv.classList];

    const isHidden = adminDeleteDivClass.some(classname => classname === "display-none");

    if(isHidden){
        adminDeleteDiv.classList.remove("display-none");
        adminDeleteProductName.textContent = th.name;
    }
};

function hiddenDeleteDiv(){
    const adminDeleteDiv = document.querySelector(".admin-delete-div");
    const adminDeleteDivClass = [...adminDeleteDiv.classList];

    const isHidden = adminDeleteDivClass.some(classname => classname === "display-none");

    if(!isHidden){
        adminDeleteDiv.classList.add("display-none");
    }
};

// end