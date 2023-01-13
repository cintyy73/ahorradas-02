//duplicado desde master
///ahorradas 2
const $ = (selector) => document.querySelector(selector);

//Elementos *********

//datos local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));
let categoryLocalSt = JSON.parse(localStorage.getItem("categories"));

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
const $categoryNewI = $("#new-name-category")
const $listNameCateg =$("#list-name-category")
const  editOpCategoryFilter = $("#edit-op-category-filter") 
const $modalEditCategory = $("#modal-edit-category")
const $editNameCategoryI = $("#edit-name-category")
const $btnCancelName = $ ("#btn-cancel-name")
const $editNameOk = $("#btn-edit-name")
//variables datos categorias nuevas
let idCategoryEdit;
let categoryEdit;


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
let $$category = categoryLocalSt || [] 


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
const deleteOp = () =>{
        
    console.log("git funciona")
} 

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
        const buttonDlt = divContainer.querySelector(".btn-add");
        buttonDlt.onclick = function ()  {
            deleteOp()
        } 
        const buttonEdit = divContainer.querySelector(".btn-edit");
        buttonEdit.onclick = function () {
            deleteOp()
        } 
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
    $ttlFact.innerHTML = `$ -${ttlFact}`;
    $ttlGain.innerHTML = `$ +${ttlGain}`;
    $ttl.innerHTML = ttlAmount 
    $ttl.classList.add(ttlFact > ttlGain ? "has-text-danger" : "has-text-primary")
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

//seccion nueva categorias

//guardo datos de categorias  en local storage
const localSCategory = () =>{   
    //solo deja las letras minusculas para value option
    const categoryValue = $categoryNewI.value.replace(/\s+/g,'').toLowerCase()
    //creo id
    const newId = self.crypto.randomUUID()
    
    if (categoryValue!=="" ){
    $$category.push(
        {name: $categoryNewI.value ,
         id:newId,
         value:categoryValue
        })
    }
    localStorage.setItem("categories", JSON.stringify($$category));       
}

// lleno vistas de categorias y opciones a los select 
const addCAtegory = () => {   
   
    $listNameCateg.innerHTML = ''
    $InewOpCategory.innerHTML = ''
    $categoryFilterI.innerHTML = '' 
    editOpCategoryFilter.innerHTML = ''
    for (const {id, name, value} of $$category) {
        const nameCategoryNew = document.createElement("div")
        nameCategoryNew.className ="container is-small"
        idCategoryEdit=id
    
        nameCategoryNew.innerHTML += `
        <p id=${id} class="is-left">${name}<p>
        <button class="button dlt-categoryName is-small is-ghost">Eliminar</button>
        <button class="button edit-categoryName is-small is-ghost">Editar</button>` 
        
        //nameCategoryNew.appendChild(divBtnCateg)
        const btnEditCategoryName = nameCategoryNew.querySelector(".edit-categoryName");
        const btnDltCategoryName = nameCategoryNew.querySelector(".dlt-categoryName");
        //boton para editar
        btnDltCategoryName.onclick  = function ()  {
            deleteCategoryNameAll() //cambiar funcion       
        }
        //boton para eliminar
        btnEditCategoryName.onclick =  function ()  {
            editCategoryNameAll()
        }
        
        $InewOpCategory.innerHTML += `
        <option value="${value}">${name}</option>`
        
        $categoryFilterI.innerHTML += `
        <option value="${value}">${name}</option>`
        
        editOpCategoryFilter.innerHTML += `
        <option value="${value}">${name}</option>`
        
        $listNameCateg.appendChild(nameCategoryNew)   
    }    
}

const deleteCategoryName = (idX) =>{
    $$category = $$category.filter(category => category.id !== idX)
    localStorage.setItem("categories", JSON.stringify($$category));
    //ver porque elimina la ultima cat
}

//ejecuto funciones necesarias para eliminar categoria
const deleteCategoryNameAll = () =>{
    deleteCategoryName(idCategoryEdit)
    openApp()
    
}

// edita categoria
const openEditCategory = () => {
    $modalEditCategory.classList.remove("is-hidden")
    $viewCategory.classList.add("is-hidden")

}
const editCategoryName = (id) => {
    categoryEdit = $$category.map((category) => {
        if(category.id === id){
            category.name=$editNameCategoryI.value}
        else{
            return categoryEdit
        } //solo edita la ultima
})
}

//cancela edicion de categoria
const cancelEdit = () =>{
    $modalEditCategory.classList.add("is-hidden")
    $viewCategory.classList.remove("is-hidden")
}

//ejecuto funciones necasarias para btn ok edicion 
const editNameOk = () =>{
    cancelEdit()
    editCategoryName(idCategoryEdit)
    localSCategory()
    openApp()
}

//ejecuto funciones necesarias para editar categoria
const editCategoryNameAll = () => {
    openEditCategory()
    editCategoryName(idCategoryEdit)
}

//eliminar categoria

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
    addHtmlBlc (list)
}

//categoria
const viewCategory = () => {
    categoryList()
    addHtmlBlc(list)
}

//ordenar por:
/*mayor monto*/
const viewOrdenMax = () => {
    ordenFilterMax()
    addHtmlBlc (opXfilter)
}

/*menor monto*/ 
const viewOrdenMin = () => {
    ordenFilterMin()
    addHtmlBlc (opXfilter)
}

/* alfab a/z */
const viewOrdenZA = () => {
    ordenFilterZA()
    addHtmlBlc (opXfilter)
}
/* alfab a/z */

const viewOrdenAZ = () => {
    ordenFilterAZ()
    addHtmlBlc (opXfilter)
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

//ejecuto funciones necesarias para añadir categoria
const addCategories = () =>{
    localSCategory()
    addCAtegory()
}



//ejecuto funciones necesarias para mostrar totales al abrir la pagina
const openApp = () => {
    mountFact()
    mountGain()
    ttlViewBalance()
    addCAtegory()
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
//eventos categorias
$btnNewCategory.addEventListener("click", addCategories)
$btnCancelName.addEventListener("click", cancelEdit)
$editNameOk.addEventListener("click", editNameOk);

/*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  */
/*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  *//*******************************hasta aca funciona ok  */

// const amountCategory = () => {
//     for (const {categOp, amountOp} of [...operations]) {
//      //ver de sumar x categoria

        
//     }
// }
// amountCategory()
/*sin commit solo hice preubas*/