// COUNTER

const counterValue = document.querySelector(".right-part-upper-links-counter-value");
const counterUpArrow = document.querySelector(".right-part-upper-links-counter-item-arrow-up");
const counterDownArrow = document.querySelector(".right-part-upper-links-counter-item-arrow-down");

counterUpArrow.addEventListener("click", () => {
    +counterValue.textContent++;
});

counterDownArrow.addEventListener("click", () => {
    if(+counterValue.textContent <= 1) {
    } else {
        +counterValue.textContent--;
    }
});



//MOBILE COUNTER

const mobileCounterValue = document.querySelector(".mobile-right-part-upper-links-counter-value");
const mobileCounterUpArrow = document.querySelector(".mobile-right-part-upper-links-counter-item-arrow-up");
const mobileCounterDownArrow = document.querySelector(".mobile-right-part-upper-links-counter-item-arrow-down");

mobileCounterUpArrow.addEventListener("click", () => {
    +mobileCounterValue.textContent++;
});

mobileCounterDownArrow.addEventListener("click", () => {
    if(+mobileCounterValue.textContent <= 1) {
    } else {
        +mobileCounterValue.textContent--;
    }
});



// SWIPER 

const productPageMainImageSwiper = new Swiper('.product-page-main-image-swiper', {
    // If we need pagination
    pagination: {
      el: '.product-page-main-image-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});



//COLORS CHECK

const colorButtons = document.querySelectorAll(".filter-color-item-wrapper-border");

colorButtons.forEach((element, index) => {
    element.id = "color-button" + index;

    element.addEventListener("click", () => {

        const colorButtonItem = document.querySelector(`#color-button${index}`);
        if(colorButtonItem.classList.contains("active-filter-color-item")) {
            colorButtonItem.classList.remove("active-filter-color-item");
        } else {
            colorButtonItem.classList.add("active-filter-color-item");
        };

        const colorButtonLength = colorButtons.length;
        for(i = 0; i <= colorButtonLength - 1; i++) {
            if(i === index) {
                continue;
            };
            
            const otherColorButtons = document.getElementById(`color-button${i}`);
            if(otherColorButtons.classList.contains("active-filter-color-item")) {
                otherColorButtons.classList.remove("active-filter-color-item");
            };
        };
    });    
});



//LEFT SIDE INFORMATION

const leftSideVariations = document.querySelectorAll(".product-part-slide");
const upperVariationButtons = document.querySelectorAll(".upper-links-list-item");

leftSideVariations.forEach((element, index) => {
    element.id = "product-part-slide" + index;
});

upperVariationButtons.forEach((element, index) => {
    element.id = "upper-links-list-item" + index;
});

upperVariationButtons.forEach((element,index) => {
    element.addEventListener("click", () => {
        const upperVariationButtonItem = document.getElementById(`upper-links-list-item${index}`)
        upperVariationButtonItem.classList.add("active-upper-links-list-item");

        const upperVariationButtonsLenght = upperVariationButtons.length;
        for(i = 0; i <= upperVariationButtonsLenght - 1; i++) {
            if(i === index) {
                continue;
            };

            const otherUpperVariationButtonItems = document.getElementById(`upper-links-list-item${i}`);
            if(otherUpperVariationButtonItems.classList.contains("active-upper-links-list-item")) {
                otherUpperVariationButtonItems.classList.remove("active-upper-links-list-item");
            };
        };



        const leftSideVariationItem = document.getElementById(`product-part-slide${index}`);
        leftSideVariationItem.classList.add("active-product-part");

        const leftSideVariationsLenght = leftSideVariations.length;
        for(i = 0; i <= leftSideVariationsLenght - 1; i++){
            if(i === index) {
                continue;
            };

            const otherLeftSideVariationItems = document.getElementById(`product-part-slide${i}`);
            if(otherLeftSideVariationItems.classList.contains("active-product-part")) {
                otherLeftSideVariationItems.classList.remove("active-product-part");
            };
        };
    });
});


//MOBILE LEFT SIDE INFORMATION

const mobileUpperVariationButtons = document.querySelectorAll(".mobile-upper-links-list-item");

mobileUpperVariationButtons.forEach((element, index) => {
    element.id = "mobile-upper-links-list-item" + index;
});

mobileUpperVariationButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        const mobileUpperVariationButtonItem = document.getElementById(`mobile-upper-links-list-item${index}`)
        mobileUpperVariationButtonItem.classList.add("active-mobile-upper-links-list-item");

        const mobileUpperVariationButtonsLenght = mobileUpperVariationButtons.length;
        for(i = 0; i <= mobileUpperVariationButtonsLenght - 1; i++) {
            if(i === index) {
                continue;
            };

            const otherMobileUpperVariationButtonItems = document.getElementById(`mobile-upper-links-list-item${i}`);
            if(otherMobileUpperVariationButtonItems.classList.contains("active-mobile-upper-links-list-item")) {
                otherMobileUpperVariationButtonItems.classList.remove("active-mobile-upper-links-list-item");
            };
        };

        const leftSideVariationItem = document.getElementById(`product-part-slide${index}`);
        leftSideVariationItem.classList.add("active-product-part");

        const leftSideVariationsLenght = leftSideVariations.length;
        for(i = 0; i <= leftSideVariationsLenght - 1; i++){
            if(i === index) {
                continue;
            };

            const otherLeftSideVariationItems = document.getElementById(`product-part-slide${i}`);
            if(otherLeftSideVariationItems.classList.contains("active-product-part")) {
                otherLeftSideVariationItems.classList.remove("active-product-part");
            };
        };
    });
});



//VARIATION CHECK

const variantList = document.querySelectorAll(".left-side-product-variations-item");
variantList.forEach((element, index) => {
    element.id = "variantItem" + index;
    
    element.addEventListener("click", () => {
        const variantItem = document.getElementById(`variantItem${index}`);
        variantItem.classList.add("active-left-side-product-item");

        const variantListLength = variantList.length;
        for(i = 0; i <= variantListLength - 1; i++) {
            if(i === index) {
                continue;
            };

            const variantOtherItems = document.getElementById(`variantItem${i}`);
            if(variantOtherItems.classList.contains("active-left-side-product-item")) {
                variantOtherItems.classList.remove("active-left-side-product-item");
            };
        };
    });
});