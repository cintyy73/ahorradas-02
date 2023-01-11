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
const $btnBlc = $("#cont-btn")
const $descrpBlc = $("#desc-blc")
const $categBlc = $("#categ-blc")
const $dateBlc = $("#date-blc")
let $amountBlc = "";
const $viewListOp = $("#view-list-op")

// Secciones 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");

//filtros
const $filterType = $("#type-filter")
const $categoryFilterI = $("#category-filter")
const $orderMI = $("#sort-by")

//categorias
const $btnNewCategory = $("#btn-new-categ")
//variables datos

//montos ganancias / gastos /total
let ttlGain = 0;
let ttlFact = 0;
let ttlAmount = 0;

// arrya de montos ganacias y gastos 
let ttlF = [];
let ttlG = [];

let operations = dateLocalSt || [];
let operation = {
    nameOp: "",
    amountOp: 0,
    typeOp: "",
    categOp: "",
    dateOp: "",
    colorAmount: "",
    id: self.crypto.randomUUID()
};
//array de operaciones para filtros
let list = []
//montos
let opXfilter = [...operations]


/************FUNCIONES*****************/


//Funciones NAV
// menu 
const burgerActive = () => {
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");
}

//Botones menu 

const $$btnBalance = $("#balance");
const $$btnReport = $("#report");
const $$btnCategory = $("#category");

//activa vistas y/o oculta segun btn
const viewsReport = () => {
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.remove("is-hidden");
    $viewCategory.classList.add("is-hidden");
}

const viewsCategory = () => {
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.add("is-hidden");
    $viewCategory.classList.remove("is-hidden");
}

const viewsBalance = () => {
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
const inputsDate = (e) => {
    nameOp = $InewOpDescrip.value || "Sin descripción"
    amountOp = $InewOpAmount.value || 0
    typeOp = $InewOpType.value
    categOp = $InewOpCategory.value
    dateOp = $InewOpDate.value || "--/--/--"
}

//guarda datos en local storage
const addLocalStorage = () => {
    const inputsValues = { ...operation };
    inputsValues.nameOp = nameOp;
    inputsValues.amountOp = Number(amountOp);
    inputsValues.typeOp = typeOp;
    inputsValues.categOp = categOp;
    inputsValues.dateOp = dateOp;
    operations.push(inputsValues);
    localStorage.setItem("operationsOB", JSON.stringify(operations));
}
// //const contBtnChild =$("#cont-btn")  
// // //creo botones de añadir y eliminar / <div>
// const buttonDlt = document.createElement("button");
// const buttonAdd = document.createElement("button");
// //les doy atributos
// buttonAdd.innerText = "Editar";
// buttonDlt.innerText = "Eliminar";

// buttonAdd.className = "btn-add is-ghost is-small"
// buttonDlt.className = "btn-dlt is-ghost is-small"





    // const $contBtn =$("#container-btn")
    // const divContainer = document.createElement("div")
    // divContainer.className ="columns container"
    // // divContainer.classList.add("contain"er;
    // const divContainerButtons = document.createElement("div")
    // divContainerButtons.className = "column buttons is-2"
    // // //agrego botones al div los botones
    // divContainerButtons.appendChild(buttonAdd)
    // divContainerButtons.appendChild(buttonDlt)
   

    const $contBtn =$("#container-btn")
    const deleteOp = () =>{
        
        console.log("git funciona")
    } 
    
    //añade info a vista de operaciones en balance
    const addHtmlBlc = (listOperations) => {
        $modalListBlc.innerHTML = ``
        
        $viewListOp.classList.remove("is-hidden");
        $contInnerOp.classList.add("is-hidden");
        
        for (const operation of listOperations) {
        const divContainer = document.createElement("div")
        divContainer.className ="columns container"   

        divContainer.innerHTML += `      
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
                <p id="amount-blc" class= ${operation.typeOp === "new-op-factures" ? "has-text-danger" : "has-text-primary"} >
                    $${operation.amountOp} 
                </p>
                </div>
                <div class="column is-2">
                <p id="date-blc">
                    ${operation.dateOp} 
                </p>
            </div>          
            <button id="${operation.id}" class="button btn-add is-small is-ghost">Editar</button>
            <button id="${operation.id}" class="button btn-edit is-small is-ghost">Eliminar</button>
            `
           // divContainer.appendChild(divContainerButtons)
      
        const buttonDlt = divContainer.querySelector(".btn-add");
        const buttonEdit = divContainer.querySelector(".btn-edit");
        buttonDlt.onclick = () => {
            deleteOp()
        } 

        buttonEdit.onclick = () => {
            deleteOp()
        } 

        // for(const buttonD of buttonsDlt)
        // buttonD.onclick = () => {
        //    deleteOp()
        // } 

        // for(const buttonE of buttonsEdit)
        // buttonE.onclick = () => {
        //    deleteOp()
        // }
       
      
        $modalListBlc.appendChild(divContainer)
        } 

}



//filtra las operaciones segun parametro 
const typeFilter = (type) => {
    return operations.filter(operation => operation.typeOp === type)
}

//sumo montos de ganancias
const mountGain = () => {

    ttlG = typeFilter("new-op-gain")//filtro ganacias
    ttlGain = 0
    for (const operation of ttlG) {
        const { amountOp } = operation
        ttlGain += amountOp
        ttlAmount = ttlGain - ttlFact;
    }
}
//sumo montos de gastos
const mountFact = () => {
    ttlF = typeFilter("new-op-factures") //filtro gastos
    ttlFact = 0
    for (const operation of ttlF) {
        const { amountOp } = operation
        ttlFact += amountOp
        ttlAmount = ttlGain - ttlFact;
    }
}


//muestra valores de gastos y ganancias en aside de balance

const ttlViewBalance = () => {
    $ttlFact.innerHTML = ttlFact;
    $ttlGain.innerHTML = ttlGain;
    $ttl.innerHTML = ttlAmount;
}

//filtro el array de operaciones segun gasto / ganancia
const valueList = () => {
    if ($filterType.value === "new-op-gain") {
        list = typeFilter("new-op-gain")
    }
    else if ($filterType.value === "new-op-factures") {
        list = typeFilter("new-op-factures")

    }
    else {
        list = [...operations]
    }

}

//filtro segun categoria

const categoryFilter = (type) => {
    return operations.filter(operation => operation.categOp === type)
}

const categoryList = () =>{
    if  ($categoryFilterI.value !== "Todas") {
        list = categoryFilter($categoryFilterI.value)      
    }
    else{
        list = [...operations]
    }

}

//ordena montos mayor a menor  
const ordenFilterMax = () => {
    opXfilter.sort((x, y) => (y.amountOp - x.amountOp))    
}

//ordena montos  menor a mayor
const ordenFilterMin = () => {  
    opXfilter.sort((x, y) => (x.amountOp - y.amountOp))    
}

//ordena alfabeticamente segun categoria
const ordenFilterAZ = () => {  
    opXfilter.sort((x, y)=> {
        const categoryX = x.categOp.toLowerCase()
        const categoryY = y.categOp.toLowerCase()
        if (categoryX < categoryY) {
            return -1
        }
        if (categoryX > categoryY) {
            return 1
        }
        return 0
    }
    )

}

//ordena alfabeticamente segun categoria
const ordenFilterZA = () => {  
    opXfilter.sort((x, y)=> {
        const categoryX = x.categOp.toLowerCase()
        const categoryY = y.categOp.toLowerCase()
        if (categoryX < categoryY) {
            return 1
        }
        if (categoryX > categoryY) {
            return -1
        }
        return 0
    }
    )
}




//llena vista de balnce segun filtros
const addHtmlFylter = (list) => {
    $modalListBlc.innerHTML = ``
    for (const operation of list) {
        $viewListOp.classList.remove("is-hidden");
        $contInnerOp.classList.add("is-hidden");
        $boxNewOp.classList.add("is-hidden");
        $modalListBlc.innerHTML += `
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
                <p id="amount-blc" class= ${operation.typeOp} ==="new-op-factures" ? "has-text-danger" : "has-text-primary"} >
                    $${operation.amountOp} 
                </p>
            </div>
            <div class="column is-2">
                <p id="date-blc">
                    ${operation.dateOp} 
                </p>
            </div>
//aca van los botones comentados para qla otra funcion no interfire 
        
        </div> 
`

     }
    // <div id="cont-btn" class="buttons cont-btn ">
    //             <button id="${operation.id}" class="button btn-add is-small is-ghost">Editar</button>
    //             <button id="${operation.id}" class="button btn-edit is-small is-ghost">Eliminar</button>
    //         </div> 
}

// const text = () => {

//     $modalListBlc.innerHTML += `<p class="title has-text-danger>No hay operaciones para mostrar</p>`
// }
const $categoryNewI = $("#new-name-category")
const $listNameCateg =$("#list-name-category")
const addCAtegory = () => {
    //agragar option value a categorias de nuevas operaciones y recorre con for of para llenar la lista con este codigo html
    $listNameCateg.innerHTML += `
    <div class="container is-flex is-justify-content-space-between is-small">
    <p class="is-left" id="item-category-list">${$categoryNewI.value}</p>
    <div class="buttons is-right">
        <button id="btn-dlt-category-list" type="button" class="button is-small is-ghost">
            Editar</button>
        <button id="btn-add-category-list" type="button" class="button is-ghost is-small">Agregar<button>
    </div>
</div>`
}

//ejecuto funciones necesarias para abrir modal btn nueva operacion

const addNewOp = () => {
    boxNewOp()
    closeBalance()
}

//ejecuto funciones necesarias añadir operacion

const addOp = () => {
    closeBoxNewOp()
    inputsDate()
    addLocalStorage()
    mountFact()
    mountGain()
    ttlViewBalance()
    addHtmlBlc(operations)
}

//ejecuto funciones necesarias para mostrar balance segun filtros


//gasto / ganancia
const viewFylter = () => {
    valueList()
    addHtmlFylter(list)
}

//categoria
const viewCategory = () => {
    categoryList()
    addHtmlFylter(list)
}

//ordenar por:
/*mayor monto*/
const viewOrdenMax = () => {
    ordenFilterMax()
    addHtmlFylter(opXfilter)
}

/*menor monto*/ 
const viewOrdenMin = () => {
    ordenFilterMin()
    addHtmlFylter(opXfilter)
}

/* alfab a/z */
const viewOrdenZA = () => {
    ordenFilterZA()
    addHtmlFylter(opXfilter)
}
/* alfab a/z */

const viewOrdenAZ = () => {
    ordenFilterAZ()
    addHtmlFylter(opXfilter)
}

//segun valor select ejecuto la funcion
const viewOrder = () => {
    let valueInput = $orderMI.value
    if(valueInput ==="higher-amount"){
        viewOrdenMax()
    }
    else if (valueInput === "lower-amount") {
        viewOrdenMin()
    }
    else if (valueInput === "z-a") {
        viewOrdenZA()
    } 
    else if (valueInput === "a-z") {
        viewOrdenAZ()
    }
  
}
/*******************************hasta aca funciona ok  */
/*******************************hasta aca funciona ok  */
/*******************************hasta aca funciona ok  */
/*******************************hasta aca funciona ok  */
/*******************************hasta aca funciona ok  */

/*******************************hasta aca funciona ok  */
//ejecuto funciones necesarias para mostrar totales al abrir la pagina
const openApp = () => {
    mountFact()
    mountGain()
    ttlViewBalance()
}
openApp()



/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);
$$btnReport.addEventListener("click", viewsReport);
$$btnCategory.addEventListener("click", viewsCategory);
$$btnBalance.addEventListener("click", viewsBalance);
//Events BALANCE
$btnNewOp.addEventListener("click", addNewOp);
$btnCancNewOp.addEventListener("click", closeBoxNewOp);
$btnAddNewOp.addEventListener("click", addOp);
//Eventos filtros
$filterType.addEventListener("click", viewFylter)
$categoryFilterI.addEventListener("click", viewCategory)
$orderMI.addEventListener("click",viewOrder)
$btnNewCategory.addEventListener("click", addCAtegory)

// const amountCategory = () => {
//     for (const {categOp, amountOp} of [...operations]) {
//      //ver de sumar x categoria

        
//     }
// }
// amountCategory()
/*sin commit solo hice preubas*/