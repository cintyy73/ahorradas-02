//duplicado desde master
///ahorradas 2
const $ = (selector) => document.querySelector(selector);

//Elementos 

// $ html
// $$ dinamicos

//datos local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));

//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");

//balance
const $btnNewOp = $("#btn-new-op");
const $btnAddNewOp = $("#btn-add-new-op");
const $btnCancNewOp = $("#btn-canc-new-op");
const $boxNewOp = $("#box-new-op");
const $balance = $("#cont-balance");
const $contInnerOp = $("#cont-inner-op");
const $InewOpDescrip = $("#new-op-desc");
const $InewOpCategory = $("#new-op-category-filter");
const $InewOpDate = $("#new-op-date");
const $InewOpAmount = $("#new-op-amount");
const $InewOpType = $("#new-op-type-filter");
const $ttlGain = $("#ttl-gain");
const $ttlFact = $("#ttl-factures");
const $ttl = $("#ttl");

//vista de operaciones 
const $modalListBlc = $("#modal-list-op")
const $btnBlc =("#cont-btn")
const $descrpBlc = $("#desc-blc")
const $categBlc = $("#categ-blc")
const $dateBlc = $("#date-blc")
const $amountBlc = $("#amount-blc")

// Secciones 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");


//variables datos

//montos ganancias / gastos /total
let ttlGain = 0;
let ttlFact = 0;
let ttlAmount = 0;

// arrya de montos ganacias y gastos 
let ttlF = [];
let ttlG =[];  

let operations = dateLocalSt || [];
let operation = {
    nameOp : "",
    amountOp : 0,
    typeOp : "",
    categOp : "",
    dateOp : "",
    colorAmount: "",
};



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

//Functions BALANCE

//oculta o muestra vistas segun btn nueva operacion
const closeBalance = () => {
    $balance.classList.add("is-hidden");
}

const openBalance = () => {
    $balance.classList.remove("is-hidden");
}

const boxNewOp = () => {
   $boxNewOp.classList.remove("is-hidden");
}

const closeBoxNewOp = () => {
    $boxNewOp.classList.add("is-hidden");
    openBalance()
}
//Funciones CATEGORIA

// doy valor a las variables segun los inputs
const inputsDate = (e) =>{
    nameOp  = $InewOpDescrip.value || "Sin descripción"
    amountOp = $InewOpAmount.value || 0
    typeOp = $InewOpType.value 
    categOp= $InewOpCategory.value
    dateOp = $InewOpDate.value || "--/--/--"
}

//guarda datos en local storage
const addLocalStorage = () =>{
    const   inputsValues = {...operation};
    inputsValues.nameOp = nameOp;  
    inputsValues.amountOp = Number(amountOp);     
    inputsValues.typeOp = typeOp;
    inputsValues.categOp = categOp;
    inputsValues.dateOp = dateOp;
    operations.push(inputsValues);
    localStorage.setItem("operationsOB", JSON.stringify(operations));
}

//creo botones de añadir y eliminar / <li>
const buttonDlt = document.createElement("button");
const buttonAdd = document.createElement("button");
//les doy atributos
buttonAdd.innerText = "Editar";
buttonDlt.innerText = "Eliminar";



//añade info a vista de operaciones en balance
const addHtmlBlc = () => {
    $descrpBlc.innerHTML += ``
    $categBlc.innerHTML +=  ``
    $dateBlc.innerHTML += ``
    $amountBlc.innerHTML += ``
    for (const operation of operations) {
        $modalListBlc.classList.remove("is-hidden");
        $contInnerOp.classList.add("is-hidden");
        $descrpBlc.innerHTML += `<li>${operation.nameOp}  </li>`
        $categBlc.innerHTML += `<li>${operation.categOp}  </li>`
        $dateBlc.innerHTML += `<li>${operation.dateOp}  </li>`
        $amountBlc.innerHTML += `<li>${operation.amountOp}  </li>`
        $btnBlc.innerHTML += `<li>${buttonAdd} ${buttonDlt}</li>`

    }
}
// //`
// <button class="button is-small is-ghost">Editar</button>
// <button class="button is-small is-ghost">Eliminar</button>`

//muestra valores de gastos y ganancias en aside de balance
// const ttlViewBalance = () => {
//     $ttlFact.innerHTML = ttlFact;
//     $ttlGain.innerHTML = ttlGain;
//     $ttl.innerHTML = ttlAmount;
// }

//ejecuto funciones necesarias para abrir modal btn nueva operacion

const addNewOp = () => {
    boxNewOp()
    closeBalance()
}

//ejecuto funciones necesarias añadir operacion

const addOp = () =>{
    closeBoxNewOp()
    inputsDate()
    addLocalStorage()
   // mountFact(ttlF)
    //mountGain(ttlG)
    //ttlViewBalance()
    addHtmlBlc()
}

//ejecuto funciones necesarias para mostrar totales al abrir la pagina
// const openApp = () =>{
//     ttlViewBalance()

// }
// openApp()


/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);
$$btnReport.addEventListener("click", viewsReport);
$$btnCategory.addEventListener("click",viewsCategory );
$$btnBalance.addEventListener("click", viewsBalance);
//Events BALANCE
$btnNewOp.addEventListener("click", addNewOp );
$btnCancNewOp.addEventListener("click", closeBoxNewOp);
$btnAddNewOp.addEventListener("click", addOp);




// const $ = (selector) => document.querySelector(selector);

// //Elementos 

// // $ html
// // $$ dinamicos

// //*nav
// const $btnBurger = $("#burger");
// const $modalNav = $("#modal-nav");

// // Secciones 
// const $viewBalance = $("#cont-balance");
// const $viewCategory = $("#cont-category");
// const $viewReport = $("#cont-report");




// /************FUNCIONES*****************/


// //Funciones NAV
// // menu 
// const burgerActive = ()=>{
//     $btnBurger.classList.toggle("is-active");
//     $modalNav.classList.toggle("is-active");
// }

// //Botones menu 

// const $$btnBalance= $("#balance");
// const $$btnReport= $("#report");
// const $$btnCategory= $("#category");

// //activa vistas y/o oculta segun btn
// const viewsReport = () =>{
//     $viewBalance.classList.add("is-hidden");
//     $viewReport.classList.remove("is-hidden");
//     $viewCategory.classList.add("is-hidden");
// }

// const viewsCategory = () =>{
//     $viewBalance.classList.add("is-hidden");
//     $viewReport.classList.add("is-hidden");
//     $viewCategory.classList.remove("is-hidden");
// }

// const viewsBalance = () =>{
//     $viewBalance.classList.remove("is-hidden");
//     $viewReport.classList.add("is-hidden");
//     $viewCategory.classList.add("is-hidden");
// }


// /************EVENTS*****************/
// //Events nav
// $btnBurger.addEventListener("click", burgerActive);
// $$btnReport.addEventListener("click", viewsReport);
// $$btnCategory.addEventListener("click",viewsCategory );
// $$btnBalance.addEventListener("click", viewsBalance);
/******************************* 
///ahorradas 2
const $ = (selector) => document.querySelector(selector);

//Elementos 

// $ html
// $$ dinamicos

//datos local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));

//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");

//balance
const $btnNewOp = $("#btn-new-op");
const $btnAddNewOp = $("#btn-add-new-op");
const $btnCancNewOp = $("#btn-canc-new-op");
const $boxNewOp = $("#box-new-op");
const $balance = $("#cont-balance");
const $contInnerOp = $("#cont-inner-op");
const $InewOpDescrip = $("#new-op-desc");
const $InewOpCategory = $("#new-op-category-filter");
const $InewOpDate = $("#new-op-date");
const $InewOpAmount = $("#new-op-amount");
const $InewOpType = $("#new-op-type-filter");

// Secciones 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");

//variables datos 

let operations = dateLocalSt || [];
let operation = {
    nameOp : "",
    amountOp : 0,
    typeOp : "",
    categOp : "",
    dateOp : "",
    colorAmount: "",
};



/************FUNCIONES*****************/


//Funciones NAV
// menu 
// const burgerActive = ()=>{
//     $btnBurger.classList.toggle("is-active");
//     $modalNav.classList.toggle("is-active");
// }

// //Botones menu 

// const $$btnBalance= $("#balance");
// const $$btnReport= $("#report");
// const $$btnCategory= $("#category");

// //activa vistas y/o oculta segun btn
// const viewsReport = () =>{
//     $viewBalance.classList.add("is-hidden");
//     $viewReport.classList.remove("is-hidden");
//     $viewCategory.classList.add("is-hidden");
// }

// const viewsCategory = () =>{
//     $viewBalance.classList.add("is-hidden");
//     $viewReport.classList.add("is-hidden");
//     $viewCategory.classList.remove("is-hidden");
// }

// const viewsBalance = () =>{
//     $viewBalance.classList.remove("is-hidden");
//     $viewReport.classList.add("is-hidden");
//     $viewCategory.classList.add("is-hidden");
// }

// //Functions BALANCE

// //oculta o muestra vistas segun btn nueva operacion
// const closeBalance = () => {
//     $balance.classList.add("is-hidden");
// }

// const openBalance = () => {
//     $balance.classList.remove("is-hidden");
// }

// const boxNewOp = () => {
//    $boxNewOp.classList.remove("is-hidden");
// }

// const closeBoxNewOp = () => {
//     $boxNewOp.classList.add("is-hidden");
//     openBalance()
// }
// //Funciones CATEGORIA

// // doy valor a las variables segun los inputs
// const inputsDate = (e) =>{
//     nameOp  = $InewOpDescrip.value 
//     amountOp = $InewOpAmount.value
//     typeOp = $InewOpType.value
//     categOp= $InewOpCategory.value
//     dateOp = $InewOpDate.value
// }

// //guarda datos en local storage
// const addLocalStorage = () =>{
//     const   inputsValues = {...operation};
//     inputsValues.nameOp = nameOp;  
//     inputsValues.amountOp = Number(amountOp);     
//     inputsValues.typeOp = typeOp;
//     inputsValues.categOp = categOp;
//     inputsValues.dateOp = dateOp;
//     operations.push(inputsValues);
//     localStorage.setItem("operationsOB", JSON.stringify(operations));
// }

// //ejecuto funciones necesarias para abrir modal btn nueva operacion

// const addNewOp = () => {
//     boxNewOp()
//     closeBalance()
// }

// //ejecuto funciones necesarias añadir operacion

// const addOp = () =>{
//     closeBoxNewOp()
//     inputsDate()
//     addLocalStorage()
//    // mountFact(ttlF)
//     //mountGain(ttlG)
//     //ttlViewBalance()
//    // addHtmlBlc()
// }

// /************EVENTS*****************/
// //Events nav
// $btnBurger.addEventListener("click", burgerActive);
// $$btnReport.addEventListener("click", viewsReport);
// $$btnCategory.addEventListener("click",viewsCategory );
// $$btnBalance.addEventListener("click", viewsBalance);
// //Events BALANCE
// $btnNewOp.addEventListener("click", addNewOp );
// $btnCancNewOp.addEventListener("click", closeBoxNewOp);
// $btnAddNewOp.addEventListener("click", addOp);




// // const $ = (selector) => document.querySelector(selector);

// // //Elementos 

// // // $ html
// // // $$ dinamicos

// // //*nav
// // const $btnBurger = $("#burger");
// // const $modalNav = $("#modal-nav");

// // // Secciones 
// // const $viewBalance = $("#cont-balance");
// // const $viewCategory = $("#cont-category");
// // const $viewReport = $("#cont-report");




// // /************FUNCIONES*****************/


// // //Funciones NAV
// // // menu 
// // const burgerActive = ()=>{
// //     $btnBurger.classList.toggle("is-active");
// //     $modalNav.classList.toggle("is-active");
// // }

// // //Botones menu 

// // const $$btnBalance= $("#balance");
// // const $$btnReport= $("#report");
// // const $$btnCategory= $("#category");

// // //activa vistas y/o oculta segun btn
// // const viewsReport = () =>{
// //     $viewBalance.classList.add("is-hidden");
// //     $viewReport.classList.remove("is-hidden");
// //     $viewCategory.classList.add("is-hidden");
// // }

// // const viewsCategory = () =>{
// //     $viewBalance.classList.add("is-hidden");
// //     $viewReport.classList.add("is-hidden");
// //     $viewCategory.classList.remove("is-hidden");
// // }

// // const viewsBalance = () =>{
// //     $viewBalance.classList.remove("is-hidden");
// //     $viewReport.classList.add("is-hidden");
// //     $viewCategory.classList.add("is-hidden");
// // }


// // /************EVENTS*****************/
// // //Events nav
// // $btnBurger.addEventListener("click", burgerActive);
// // $$btnReport.addEventListener("click", viewsReport);
// // $$btnCategory.addEventListener("click",viewsCategory );
// // $$btnBalance.addEventListener("click", viewsBalance);