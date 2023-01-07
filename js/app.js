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
const $btnBlc =$("#cont-btn")
const $descrpBlc = $("#desc-blc")
const $categBlc = $("#categ-blc")
const $dateBlc = $("#date-blc")
let $amountBlc ="";
const $viewListOp = $("#view-list-op")

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
    id: self.crypto.randomUUID()
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
// deleteOp = () => {
//     console.log("agregar la funcionalidad para remover operacion");
// }

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

// //creo botones de añadir y eliminar / <li>
// const buttonDlt = document.createElement("button");
// const buttonAdd = document.createElement("button");
// //les doy atributos
// buttonAdd.innerText = "Editar";
// buttonDlt.innerText = "Eliminar";

// buttonAdd.classList.add("is-ghost");
// buttonDlt.classList.add("is-ghost");
// buttonAdd.classList.add("is-small");
// buttonDlt.classList.add("is-small");
// buttonAdd.classList.add("btn-add");
// buttonDlt.classList.add("btn-dlt");

// //agrego a li los botones
// li.appenChild(buttonAdd)
// li.appenChild(buttonDlt)


// buttonDlt.onclick = funtion () = {
//     deleteOp()
// }


//añade info a vista de operaciones en balance
const addHtmlBlc = () => {
    $modalListBlc.innerHTML = ``
    for (const operation of operations) {
        $viewListOp.classList.remove("is-hidden");
        $contInnerOp.classList.add("is-hidden");
        $modalListBlc.innerHTML +=  `
        <div  class="container columns ">
            <div class="column is-3">
                <p id="desc-blc">
                    ${operation.nameOp}        
                </p>
            </div>
            <div class="column is-3">
                <p id="categ-blc">
                    ${operation.categOp} 
                </p>
            </div>
            <div class="column is-2">
                <p id="amount-blc" class= ${operation.typeOp ==="new-op-factures" ? "has-text-danger" : "has-text-primary"} >
                    $${operation.amountOp} 
                </p>
                </div>
                <div class="column is-2">
                <p id="date-blc">
                    ${operation.dateOp} 
                </p>
            </div>
            <div class="column is-2">
                <div id="cont-btn" class="buttons is-flex">
                        <button id="${operation.id}"class="button is-small   is-ghost">Editar</button>
                    <button id="${operation.id}"class="button is-small is-ghost">Eliminar</button>
                </div>
            </div>`
    }
    
}


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
    // color()
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