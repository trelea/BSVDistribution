const aside_nav = document.getElementById("aside_nav");
const icon = document.getElementById("aside_btn");
import { openDialog, closeDialog } from "./index.js";

// ASIDE MOBILLE BTNS
const asideDesprenoiBtn = document.getElementById("asideDesprenoiBtn");
const asideProduseBtn = document.getElementById("asideProduseBtn");
const asideLivrareBtn = document.getElementById("asideLivrareBtn");
const asideContacteBtn = document.getElementById("asideContacteBtn");

// LAPTOP PC NAV BTNS
const desprenoiBtn = document.getElementById("desprenoiBtn");
const produseBtn = document.getElementById("produseBtn");
const livrareBtn = document.getElementById("livrareBtn");
const contacteBtn = document.getElementById("contacteBtn");

const desprenoi_View = document.getElementById("desprenoi_View");
const produsulnostru_View = document.getElementById("produsulnostru_View");
const deceprodusulnostru_View = document.getElementById(
    "deceprodusulnostru_View"
);
const descoperaprodusulnostru_View = document.getElementById(
    "descoperaprodusulnostru_View"
);
const livraresiachitare_View = document.getElementById(
    "livraresiachitare_View"
);
const footer_View = document.getElementById("footer_View");

// FIRE EVENTS MOBILE
asideDesprenoiBtn.addEventListener("click", () => {
    closeDialog(aside_nav, icon, true);
    desprenoi_View.scrollIntoView({ behavior: "smooth" });
});
asideProduseBtn.addEventListener("click", () => {
    closeDialog(aside_nav, icon, true);
    produsulnostru_View.scrollIntoView({ behavior: "smooth" });
});
asideLivrareBtn.addEventListener("click", () => {
    closeDialog(aside_nav, icon, true);
    livraresiachitare_View.scrollIntoView({ behavior: "smooth" });
});
asideContacteBtn.addEventListener("click", () => {
    closeDialog(aside_nav, icon, true),
        footer_View.scrollIntoView({ behavior: "smooth" });
});

// FIRE EVENTS PC
desprenoiBtn.addEventListener("click", () => {
    desprenoi_View.scrollIntoView({ behavior: "smooth" });
});
produseBtn.addEventListener("click", () => {
    produsulnostru_View.scrollIntoView({ behavior: "smooth" });
});
livrareBtn.addEventListener("click", () => {
    livraresiachitare_View.scrollIntoView({ behavior: "smooth" });
});
contacteBtn.addEventListener("click", () => {
    footer_View.scrollIntoView({ behavior: "smooth" });
});
