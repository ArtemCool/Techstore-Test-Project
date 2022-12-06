// FIRST HEADER LINKS (TABS OPEN)
const laptopMenuLink = document.querySelector(".first-item");
laptopMenuLink.addEventListener("mouseover", () => {
    const laptopMenu = document.querySelector(".first-item-inner");
    laptopMenu.classList.add("laptop-active");
    const headerLinkHover = document.querySelector(".navigation-links__item-first-link");
    headerLinkHover.classList.add("active_navigation_link_item");

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};


	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// FIRST TABS CLOSE
const tabsField = document.querySelector(".first-item-inner-wrapper");
tabsField.addEventListener("mouseout", () => {
    const laptopMenu = document.querySelector(".first-item-inner");
    laptopMenu.classList.remove("laptop-active");
    const headerLinkHover = document.querySelector(".navigation-links__item-first-link");
    headerLinkHover.classList.remove("active_navigation_link_item");
})





// SECOND HEADER LINKS (TABS OPEN)
const secondMenuLink = document.querySelector(".second-item");
secondMenuLink.addEventListener("mouseover", () => {
    const laptopMenu = document.querySelector(".second-item-inner");
    laptopMenu.classList.add("second-active");
    const headerLinkHover = document.querySelector(".navigation-links__item-second-link");
    headerLinkHover.classList.add("active_navigation_link_item");
	
	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};


	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// SECOND TABS CLOSE
const tabsSecondField = document.querySelector(".second-item-inner-wrapper");
tabsSecondField.addEventListener("mouseout", () => {
    const laptopMenu = document.querySelector(".second-item-inner");
    laptopMenu.classList.remove("second-active");
    const headerLinkHover = document.querySelector(".navigation-links__item-second-link");
    headerLinkHover.classList.remove("active_navigation_link_item");
})





// THIRD HEADER LINKS (TABS OPEN)
const thirdMenuLink = document.querySelector(".third-item");
thirdMenuLink.addEventListener("mouseover", () => {
	const thirdMenu = document.querySelector(".third-item-inner");
	thirdMenu.classList.add("third-active");
	const thirdHeaderLinkHover = document.querySelector(".navigation-links__item-third-link");
	thirdHeaderLinkHover.classList.add("active_navigation_link_item")

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};


	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// THIRD TABS CLOSE
const tabsThirdField = document.querySelector(".third-item-inner-wrapper");
tabsThirdField.addEventListener("mouseout", () => {
	const thirdMenu = document.querySelector(".third-item-inner");
	thirdMenu.classList.remove("third-active");
	const thirdHeaderLinkHover = document.querySelector(".navigation-links__item-third-link");
	thirdHeaderLinkHover.classList.remove("active_navigation_link_item");
});





// FOURS HEADER LINKS (TABS OPEN)
const foursMenuLink = document.querySelector(".fours-item");
foursMenuLink.addEventListener("mouseover", () => {
	const foursMenu = document.querySelector(".fours-item-inner");
	foursMenu.classList.add("fours-active");
	const foursHeaderLinkHover = document.querySelector(".navigation-links__item-fours-link");
	foursHeaderLinkHover.classList.add("active_navigation_link_item")

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// FOURS TABS CLOSE
const tabsFoursField = document.querySelector(".fours-item-inner-wrapper");
tabsFoursField.addEventListener("mouseout", () => {
	const foursMenu = document.querySelector(".fours-item-inner");
	foursMenu.classList.remove("fours-active");
	const foursHeaderLinkHover = document.querySelector(".navigation-links__item-fours-link");
	foursHeaderLinkHover.classList.remove("active_navigation_link_item");
});





// FIVES HEADER LINKS (TABS OPEN)
const fivesMenuLink = document.querySelector(".fives-item");
fivesMenuLink.addEventListener("mouseover", () => {
	const fivesMenu = document.querySelector(".fives-item-inner");
	fivesMenu.classList.add("fives-active");
	const fivesHeaderLinkHover = document.querySelector(".navigation-links__item-fives-link");
	fivesHeaderLinkHover.classList.add("active_navigation_link_item")

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// FIVES TABS CLOSE
const tabsFivesField = document.querySelector(".fives-item-inner-wrapper");
tabsFivesField.addEventListener("mouseout", () => {
	const fivesMenu = document.querySelector(".fives-item-inner");
	fivesMenu.classList.remove("fives-active");
	const fivesHeaderLinkHover = document.querySelector(".navigation-links__item-fives-link");
	fivesHeaderLinkHover.classList.remove("active_navigation_link_item");
});




// SIX HEADER LINKS (TABS OPEN)
const sixMenuLink = document.querySelector(".six-item");
sixMenuLink.addEventListener("mouseover", () => {
	const sixMenu = document.querySelector(".six-item-inner");
	sixMenu.classList.add("six-active");
	const sixHeaderLinkHover = document.querySelector(".navigation-links__item-six-link");
	sixHeaderLinkHover.classList.add("active_navigation_link_item")

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// SIX TABS CLOSE
const tabsSixField = document.querySelector(".six-item-inner-wrapper");
tabsSixField.addEventListener("mouseout", () => {
	const sixMenu = document.querySelector(".six-item-inner");
	sixMenu.classList.remove("six-active");
	const sixHeaderLinkHover = document.querySelector(".navigation-links__item-six-link");
	sixHeaderLinkHover.classList.remove("active_navigation_link_item");
});




// SEVEN HEADER LINKS (TABS OPEN)
const sevenMenuLink = document.querySelector(".seven-item");
sevenMenuLink.addEventListener("mouseover", () => {
	const sevenMenu = document.querySelector(".seven-item-inner");
	sevenMenu.classList.add("seven-active");
	const sevenHeaderLinkHover = document.querySelector(".navigation-links__item-seven-link");
	sevenHeaderLinkHover.classList.add("active_navigation_link_item")

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

// SEVEN TABS CLOSE
const tabsSevenField = document.querySelector(".seven-item-inner-wrapper");
tabsSevenField.addEventListener("mouseout", () => {
	const sevenMenu = document.querySelector(".seven-item-inner");
	sevenMenu.classList.remove("seven-active");
	const sevenHeaderLinkHover = document.querySelector(".navigation-links__item-seven-link");
	sevenHeaderLinkHover.classList.remove("active_navigation_link_item");
});





//TABS
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("mouseover", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}

//TABS NESTING 1
let tabsNestingOne = document.querySelectorAll("._tabs_nesting1");
for (let index = 0; index < tabsNestingOne.length; index++) {
	let tabNestingOne = tabsNestingOne[index];
	let tabs_itemsNestingOne = tabNestingOne.querySelectorAll("._tabs-item_nesting1");
	let tabs_blocksNestingOne = tabNestingOne.querySelectorAll("._tabs-block_nesting1");
	for (let index = 0; index < tabs_itemsNestingOne.length; index++) {
		let tabs_itemNestingOne = tabs_itemsNestingOne[index];
		tabs_itemNestingOne.addEventListener("mouseover", function (e) {
			for (let index = 0; index < tabs_itemsNestingOne.length; index++) {
				let tabs_itemNestingOne = tabs_itemsNestingOne[index];
				tabs_itemNestingOne.classList.remove('_active_nesting1');
				tabs_blocksNestingOne[index].classList.remove('_active_nesting1');
			}
			tabs_itemNestingOne.classList.add('_active_nesting1');
			tabs_blocksNestingOne[index].classList.add('_active_nesting1');
			e.preventDefault();
		});
	}
}

//TABS NESTING 2
let tabsNestingTwo = document.querySelectorAll("._tabs_nesting2");
for (let index = 0; index < tabsNestingTwo.length; index++) {
	let tabNestingTwo = tabsNestingTwo[index];
	let tabs_itemsNestingTwo = tabNestingTwo.querySelectorAll("._tabs-item_nesting2");
	let tabs_blocksNestingTwo = tabNestingTwo.querySelectorAll("._tabs-block_nesting2");
	for (let index = 0; index < tabs_itemsNestingTwo.length; index++) {
		let tabs_itemNestingTwo = tabs_itemsNestingTwo[index];
		tabs_itemNestingTwo.addEventListener("mouseover", function (e) {
			for (let index = 0; index < tabs_itemsNestingTwo.length; index++) {
				let tabs_itemNestingTwo = tabs_itemsNestingTwo[index];
				tabs_itemNestingTwo.classList.remove('_active_nesting2');
				tabs_blocksNestingTwo[index].classList.remove('_active_nesting2');
			}
			tabs_itemNestingTwo.classList.add('_active_nesting2');
			tabs_blocksNestingTwo[index].classList.add('_active_nesting2');
			e.preventDefault();
		});
	}
}




//SEARCHBAR INPUT ACTIVE
const searchbarButton = document.querySelector(".header-searchbar-button");
searchbarButton.addEventListener("click", () =>{
	const linkAndButtonPartOfHeader = document.querySelector(".middle_part_of_bottom");
	linkAndButtonPartOfHeader.classList.add("hidden-links");
	const searchbarInput = document.querySelector(".header-searchbar-input");
	searchbarInput.classList.add("input-active");
	searchbarButton.classList.add("active_searchbar_position");
	const searchbarCloseButton = document.querySelector(".header-searchbar-button-close");
	searchbarCloseButton.classList.add("active-close-button");
});

//SEARCHBAR INPUT DISABLED
const searchbarButtonClose = document.querySelector(".header-searchbar-button-close");
searchbarButtonClose.addEventListener("click", () => {
	const linkAndButtonPartOfHeader = document.querySelector(".middle_part_of_bottom");
	linkAndButtonPartOfHeader.classList.remove("hidden-links");
	const searchbarInput = document.querySelector(".header-searchbar-input");
	searchbarInput.classList.remove("input-active");
	const searchbarButton = document.querySelector(".header-searchbar-button");
	searchbarButton.classList.remove("active_searchbar_position");
	const searchbarCloseButton = document.querySelector(".header-searchbar-button-close");
	searchbarCloseButton.classList.remove("active-close-button");
});





//USER WINDOW ACTIVE
const headerAccounPhoto = document.querySelector(".header-user-photo");
headerAccounPhoto.addEventListener("click", () => {
	const headerAccountLinks = document.querySelector(".header-account-info-links");
	if(headerAccountLinks.classList.contains("info-links-active")){
		headerAccountLinks.classList.remove("info-links-active");
	} else {
		headerAccountLinks.classList.add("info-links-active");
	}

	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	}
});

//USER WINDOW DISABLED
const accountLinksWindow = document.querySelector(".header-account-info-links");
accountLinksWindow.addEventListener("mouseleave", () => {
	accountLinksWindow.classList.remove("info-links-active");
});

//USER WINDOW TABLET ACTIVE
const tabletHeaderAccount = document.querySelector(".tablet-user-account");
tabletHeaderAccount.addEventListener("click", () => {
	const headerAccountLinks = document.querySelector(".header-tablet-account-info-links");
	if(headerAccountLinks.classList.contains("info-links-active")){
		headerAccountLinks.classList.remove("info-links-active");
	} else {
		headerAccountLinks.classList.add("info-links-active");
	}

	const headerTabletCartInner = document.querySelector(".tablet-header-cart-inner");
	if(headerTabletCartInner.classList.contains("active-header-tablet-cart-inner")) {
		headerTabletCartInner.classList.remove("active-header-tablet-cart-inner")
	}
});

//HEADER CART ACTIVE
const headerCartImage = document.querySelector(".header-cart-image");
headerCartImage.addEventListener("click", () => {
	const headerCartInner = document.querySelector(".header-cart-inner");
	if(headerCartInner.classList.contains("active-header-cart-inner")){
		headerCartInner.classList.remove("active-header-cart-inner");
	} else {
		headerCartInner.classList.add("active-header-cart-inner");
	}


	const firstItemMenuOpen = document.querySelector(".first-item-inner");
	if(firstItemMenuOpen.classList.contains("laptop-active")) {
		firstItemMenuOpen.classList.remove("laptop-active");
	};

	const activeHeaderLink = document.querySelector(".navigation-links__item-first-link");
	if(activeHeaderLink.classList.contains("active_navigation_link_item")){
		activeHeaderLink.classList.remove("active_navigation_link_item");
	};

	const secondItemMenuOpen = document.querySelector(".second-item-inner");
	if(secondItemMenuOpen.classList.contains("second-active")) {
		secondItemMenuOpen.classList.remove("second-active");
	};

	const activeFirstHeaderLink = document.querySelector(".navigation-links__item-second-link");
	if(activeFirstHeaderLink.classList.contains("active_navigation_link_item")) {
		activeFirstHeaderLink.classList.remove("active_navigation_link_item");
	};

	const thirdItemOpem = document.querySelector(".third-item-inner");
	if(thirdItemOpem.classList.contains("third-active")) {
		thirdItemOpem.classList.remove("third-active");
	};

	const thirdHeaderLink = document.querySelector(".navigation-links__item-third-link");
	if(thirdHeaderLink.classList.contains("active_navigation_link_item")){
		thirdHeaderLink.classList.remove("active_navigation_link_item");
	};

	const foursItemOpem = document.querySelector(".fours-item-inner");
	if(foursItemOpem.classList.contains("fours-active")) {
		foursItemOpem.classList.remove("fours-active");
	};

	const foursHeaderLink = document.querySelector(".navigation-links__item-fours-link");
	if(foursHeaderLink.classList.contains("active_navigation_link_item")){
		foursHeaderLink.classList.remove("active_navigation_link_item");
	};

	const fivesItemOpem = document.querySelector(".fives-item-inner");
	if(fivesItemOpem.classList.contains("fives-active")) {
		fivesItemOpem.classList.remove("fives-active");
	};

	const fivesHeaderLink = document.querySelector(".navigation-links__item-fives-link");
	if(fivesHeaderLink.classList.contains("active_navigation_link_item")){
		fivesHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sixItemOpem = document.querySelector(".six-item-inner");
	if(sixItemOpem.classList.contains("six-active")) {
		sixItemOpem.classList.remove("six-active");
	};

	const sixHeaderLink = document.querySelector(".navigation-links__item-six-link");
	if(sixHeaderLink.classList.contains("active_navigation_link_item")){
		sixHeaderLink.classList.remove("active_navigation_link_item");
	};

	const sevenItemOpem = document.querySelector(".seven-item-inner");
	if(sevenItemOpem.classList.contains("seven-active")) {
		sevenItemOpem.classList.remove("seven-active");
	};

	const sevenHeaderLink = document.querySelector(".navigation-links__item-seven-link");
	if(sevenHeaderLink.classList.contains("active_navigation_link_item")){
		sevenHeaderLink.classList.remove("active_navigation_link_item");
	};

	const openAccountMenu = document.querySelector(".header-account-info-links");
	if(openAccountMenu.classList.contains("info-links-active")){
		openAccountMenu.classList.remove("info-links-active");
	};
});

//HEADER TABLET CART ACTIVE
const headerTabletCart = document.querySelector(".tablet-header-cart-image-wrapper");
headerTabletCart.addEventListener("click", () => {
	const headerCartTabletInner = document.querySelector(".tablet-header-cart-inner");
	if(headerCartTabletInner.classList.contains("active-header-tablet-cart-inner")){
		headerCartTabletInner.classList.remove("active-header-tablet-cart-inner");
	} else {
		headerCartTabletInner.classList.add("active-header-tablet-cart-inner");
	}

	const headerTabletAccountLinks = document.querySelector(".header-tablet-account-info-links");
	if(headerTabletAccountLinks.classList.contains("info-links-active")) {
		headerTabletAccountLinks.classList.remove("info-links-active")
	}
});

//HEADER CART DISABLED
const headerCartOpen = document.querySelector(".header-cart-inner");
headerCartOpen.addEventListener("mouseleave", () => {
	headerCartOpen.classList.remove("active-header-cart-inner");
})

//BURGER MENU
const burgerMenu = document.querySelector(".burger-menu-header");
burgerMenu.addEventListener("click", () => {
	const burgerMenuInner = document.querySelector(".middle_part_of_bottom");
	if(burgerMenuInner.classList.contains("active-for-burger")) {
		burgerMenuInner.classList.remove("active-for-burger");
	} else {
		burgerMenuInner.classList.add("active-for-burger");
	}

	const burgerBackground = document.querySelector(".burger-background");
	if(burgerBackground.classList.contains("burger-background-active")) {
		burgerBackground.classList.remove("burger-background-active")
	} else {
		burgerBackground.classList.add("burger-background-active")
	}

	const bottomPartOfHeader = document.querySelector(".bottom_part_of_header");
	bottomPartOfHeader.classList.add("no-position");
});

//BURGER MENU CLOSE BUTTON
const burgerCloseButton = document.querySelector(".burger-close-button-wrapper");
burgerCloseButton.addEventListener("click", () => {
	const burgerMenuInner = document.querySelector(".middle_part_of_bottom");
	burgerMenuInner.classList.remove("active-for-burger");

	const burgerBackground = document.querySelector(".burger-background");
	if(burgerBackground.classList.contains("burger-background-active")) {
		burgerBackground.classList.remove("burger-background-active")
	} else {
		burgerBackground.classList.add("burger-background-active")
	}
});