const tabletFooterColumnItem = document.querySelectorAll(".tablet-arrow");
const linksList = document.querySelectorAll(".footer-information-links-list");
const footerLinkArrow = document.querySelectorAll(".footer-tablet-arrow");

linksList.forEach((element, index) => {
    element.id = index;
});

footerLinkArrow.forEach((element, index) => {
    element.id = 'arrow' + (index);
})

tabletFooterColumnItem.forEach((element, index) => {
    element.addEventListener('click', () => {

        const linkListItem = document.getElementById(`${index}`);
        if(linkListItem.classList.contains("tablet-footer-information-active")){
            linkListItem.classList.remove("tablet-footer-information-active");
        } else {
            linkListItem.classList.add("tablet-footer-information-active");
        };

        const footerLinkArrowItem = document. getElementById(`arrow${index}`);
        if(footerLinkArrowItem.classList.contains("footer-active-arrow")) {
            footerLinkArrowItem.classList.remove("footer-active-arrow");
        } else {
            footerLinkArrowItem.classList.add("footer-active-arrow");
        };

        const tabletFooterColumnItemLength = tabletFooterColumnItem.length;
        for(let i = 0; i <= tabletFooterColumnItemLength - 1; i++) {
            if(i === index) {
                continue;
            };

            const otherLinksListItems = document.getElementById(`${i}`);
            if(otherLinksListItems.classList.contains("tablet-footer-information-active")) {
                otherLinksListItems.classList.remove("tablet-footer-information-active");
            };

            const otherFooterLinksArrow = document.getElementById(`arrow${i}`)
            if(otherFooterLinksArrow.classList.contains("footer-active-arrow")) {
                otherFooterLinksArrow.classList.remove("footer-active-arrow");
            };
        };
    });
});