// CHANGE LIST DIRECTION

const columnProductButton = document.querySelector(".column-show-image");
const lineProductButton = document.querySelector(".line-show-image");
const productField = document.querySelector(".catalog-page-column-products");
const productItem = document.querySelectorAll(".new-product-item");

columnProductButton.addEventListener("click", () => {
    productField.classList.remove("line-direction-property");
    productField.classList.add("column-direction-property");

    
    columnProductButton.classList.add('active-direction-button');
    lineProductButton.classList.remove('active-direction-button');


    productItem.forEach((element) => {
        element.classList.remove("line-direction-product");
        element.classList.remove("line-direction-product-hide");
    });
});

lineProductButton.addEventListener("click", () => {
    productField.classList.remove("column-direction-property");
    productField.classList.add("line-direction-property");

    lineProductButton.classList.add('active-direction-button');
    columnProductButton.classList.remove('active-direction-button');

    productItem.forEach((element, index) => {
        element.classList.add("line-direction-product");
        element.id = index;
        if(element.id > 3) {
            element.classList.add("line-direction-product-hide");
        };
    });
});



//MOBILE FILTERS

const mobileFilterButtonOpen = document.querySelector(".catalog-page-mobile-filter-button");

mobileFilterButtonOpen.addEventListener("click", () => {
    const mobileFilterMenu = document.querySelector(".catalog-page-main-part-left-side");
    mobileFilterMenu.classList.add("catalog-mobile-active-filters");

    const body = document.querySelector("body");
    body.classList.add("body-overflow");
});

const mobileFilterClose = document.querySelector(".catalog-page-mobile-filter-close-button");

mobileFilterClose.addEventListener("click", () => {
    const mobileFilterMenu = document.querySelector(".catalog-page-main-part-left-side");
    mobileFilterMenu.classList.remove("catalog-mobile-active-filters");

    const body = document.querySelector("body");
    body.classList.remove("body-overflow");
});



// FILTERS OPEN AND CLOSE


const filterInner = document.querySelectorAll(".filters-item-inner");

filterInner.forEach((e, index) => {
     e.id = "inner" + index;
});

const filterHeadingArrow = document.querySelectorAll(".filter-heading-arrow");

    filterHeadingArrow.forEach((element, index) => {
        element.id = "filterArrow" + index;
    });

const filterHeading = document.querySelectorAll(".filters-item-heading");

filterHeading.forEach((element, index) => {
    element.addEventListener("click", () => {
        const filterInnerItem = document.querySelector(`#inner${index}`);
        if(filterInnerItem.classList.contains("deactive-filters-item-inner")) {
            filterInnerItem.classList.remove("deactive-filters-item-inner");
        } else {
            filterInnerItem.classList.add("deactive-filters-item-inner");
        };

        const filterHeadingArrowItem = document.querySelector(`#filterArrow${index}`);
        if(filterHeadingArrowItem.classList.contains("deactive-filter-arrow")) {
            filterHeadingArrowItem.classList.remove("deactive-filter-arrow");
        } else {
            filterHeadingArrowItem.classList.add("deactive-filter-arrow");
        };
    });
});


// COLOR FILTER

const colorFilter = document.querySelectorAll(".filter-color-item-wrapper-border");

colorFilter.forEach((element, index) => {
    element.id = "color" + index;
    element.addEventListener("click", () => {
        const colorItem = document.querySelector(`#color${index}`);
        if(colorItem.classList.contains("active-filter-color-item")) {
            colorItem.classList.remove("active-filter-color-item");
        } else {
            colorItem.classList.add("active-filter-color-item");
        }
    });
});