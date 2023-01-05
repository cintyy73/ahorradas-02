const $ = (selector) => document.querySelector(selector);

//Elementos 

// $ html
// $$ dinamicos

//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");

// Secciones 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");




/************FUNCIONES*****************/


//Funciones NAV
// menu 
const burgerActive = ()=>{
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");
}

//Botones menu 

const $$btnBalance= $("#balance");
const $$btnReport= $("#report");
const $$btnCategory= $("#category");

//activa vistas y/o oculta segun btn
const viewsReport = () =>{
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.remove("is-hidden");
    $viewCategory.classList.add("is-hidden");
}

const viewsCategory = () =>{
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.add("is-hidden");
    $viewCategory.classList.remove("is-hidden");
}

const viewsBalance = () =>{
    $viewBalance.classList.remove("is-hidden");
    $viewReport.classList.add("is-hidden");
    $viewCategory.classList.add("is-hidden");
}


/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);
$$btnReport.addEventListener("click", viewsReport);
$$btnCategory.addEventListener("click",viewsCategory );
$$btnBalance.addEventListener("click", viewsBalance);