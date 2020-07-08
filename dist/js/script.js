const BLOCK_NAV = 'nav';
const BLOCK_MODAL = 'modal';
const BLOCK_BTN = 'button';

const CLASS_NAV = `.${BLOCK_NAV}`;
const CLASS_MODAL = `.${BLOCK_MODAL}`;
const CLASS_BTN = `.${BLOCK_BTN}`;
const ID_BTN = `#${BLOCK_BTN}`;

const NAV = document.querySelector(CLASS_NAV);
const BARS = NAV.querySelector(`${CLASS_NAV}__checkbox`);
const LIST_MENU = NAV.querySelector(`${CLASS_NAV}__list`);
const RESP_MENU = NAV.querySelector(`${CLASS_NAV}__responsive`);
const MODAL = document.querySelector(CLASS_MODAL);
const CLOSE_BTN = MODAL.querySelector(`${CLASS_MODAL}__close`);
const BTN = document.querySelector(`${CLASS_BTN}--top-section`);
const MODAL_BTN = BTN.querySelector(`${ID_BTN}--modal`);


BARS.addEventListener('change', openMenu);
MODAL_BTN.addEventListener('click', openModal);
CLOSE_BTN.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openMenu() {
    if (this.checked == true && LIST_MENU.className !== "nav__responsive") {
        LIST_MENU.className = "nav__responsive";
        // LIST_MENU.style.paddingTop = "58px";
        // LIST_MENU.style.maxHeight = "440px";
    }
    if (this.checked == false && LIST_MENU.className == "nav__responsive") {
        LIST_MENU.className = "nav__list";
        // LIST_MENU.style.paddingTop = "0";
        // LIST_MENU.style.maxHeight = "0";
    }
}

function openModal() {
    MODAL.style.display = 'block';
}

function closeModal() {
    MODAL.style.display = 'none';
}

function outsideClick(page) {
    if (page.target == MODAL) {
        MODAL.style.display = 'none';
    }
}
