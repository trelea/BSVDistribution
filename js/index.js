let aside = false;
const aside_nav = document.getElementById("aside_nav");
const icon = document.getElementById("aside_btn");
let mai_mult_list_open = false;
const mai_mult_btn = document.getElementById("mai_mult_btn");
// const mai_mult_icon = document.getElementById("mai_mult_icon");
const mai_mult_list = document.getElementById("mai_mult_list");

export const closeDialog = (nav, _icon, resetOpenState) => {
    resetOpenState = resetOpenState || false;
    nav.classList.remove("fixed");
    nav.classList.add("hidden");
    _icon.setAttribute(
        "src",
        "/assets/menu_32dp_47174C_FILL0_wght400_GRAD0_opsz40.png"
    );
    document.body.style = "overflow: scroll;";
    if (resetOpenState) aside = !aside;
};

export const openDialog = (nav, _icon) => {
    nav.classList.remove("hidden");
    nav.classList.add("fixed");
    _icon.setAttribute(
        "src",
        "./assets/close_32dp_47174C_FILL0_wght400_GRAD0_opsz40.png"
    );
    document.body.style = "overflow: hidden;";
};

icon.addEventListener("click", () => {
    aside = !aside;
    if (aside) {
        openDialog(aside_nav, icon);
    }
    if (!aside) {
        closeDialog(aside_nav, icon);
    }
});

mai_mult_btn.addEventListener("click", () => {
    mai_mult_list_open = !mai_mult_list_open;
    if (mai_mult_list_open) {
        mai_mult_list.classList.remove("hidden");
        mai_mult_list.classList.add("block");
        mai_mult_btn.children[0].innerText = "Închide";
        mai_mult_btn.children[1].setAttribute(
            "src",
            "./assets/arrow_upward_20dp_751B57_FILL0_wght400_GRAD0_opsz20.png"
        );
    }
    if (!mai_mult_list_open) {
        mai_mult_list.classList.remove("block");
        mai_mult_list.classList.add("hidden");
        mai_mult_btn.children[0].innerText = "Mai mult...";
        mai_mult_btn.children[1].setAttribute(
            "src",
            "./assets/arrow_downward_20dp_751B57_FILL0_wght400_GRAD0_opsz20.png"
        );
    }
});
