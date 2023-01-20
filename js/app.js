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

// btn editar operation
const $boxEditOp = $("#box-edit-op")
const $IEditOpDescrip = $("#edit-op-desc");
const $IEditOpCategory = $("#edit-op-category-filter");
const $IEditOpDate = $("#edit-op-date");
const $IEditOpAmount = $("#edit-op-amount");
const $IEditOpType = $("#edit-op-type-filter");
const $btnOK = $("#btn-ok")
const $btnEditOpCancel = $("#btn-canc-edit-op")

//Botones menu 

const $$btnBalance = $("#balance");
const $$btnReport = $("#report");
const $$btnCategory = $("#category");
const $viewImgSection = $("#cont-img-report")
const $viewListSection = $("#complete-report")

//vista de operaciones 
const $modalListBlc = $("#modal-list-op")
const $btnBlc = $("#cont-btn")
const $descrpBlc = $("#desc-blc")
const $categBlc = $("#categ-blc")
const $dateBlc = $("#date-blc")
const $viewListOp = $("#view-list-op")

// Secciones 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");

//filtros
const $filterType = $("#type-filter")
const $categoryFilterI = $("#category-filter")
const $orderMI = $("#sort-by")
const $filterHidden = $(".filter-hidden")
const $btnFilterHidden = $("#filter-hidden")
const $Isince = $("#since")

//categorias
const $btnNewCategory = $("#btn-new-categ")
const $categoryNewI = $("#new-name-category")
const $listNameCateg = $("#list-name-category")
const editOpCategoryFilter = $("#edit-op-category-filter")
const $modalEditCategory = $("#modal-edit-category")
const $editNameCategoryI = $("#edit-name-category")
const $btnCancelName = $("#btn-cancel-name")
const $editNameOk = $("#btn-edit-name")

//reporte
const $monthXmount = $("#month-x-mounth")
const $gainXmount = $("#gain-x-mounth")
const $factureXmount = $("#facture-x-mounth")
const $balanceXmount = $("#balance-x-mounth")
const $categoryXmonth = $("#category-x-category")
const $categoryGain = $("#gain-x-category")
const $categoryFacture = $("#facture-x-category")
const $categoryBalance = $("#balance-x-category")
const $pCatGain = $("#cat-gain")
const $pGain = $("#max-gain")
const $pCatFact = $("#cat-fact")
const $pFact = $("#max-fact")
const $pBlc = $("#max-blc")
const $mountFactures = $("#mount-factures")
const $nameFactures = $("#name-factures")
const $mountGain = $("#mount-gain")
const $nameGain = $("#name-gain")
const $category_blc = $("#cat-blc")
const $Max_blc = $("#max-blc")

//variables datos categorias nuevas
let idCategoryEdit;
let categoryEdit = {}

//variables datos edicion de categoria
let editOperation = {}

//montos ganancias / gastos /total
let ttlGain = 0;
let ttlFact = 0;
let ttlAmount = 0;

// arrya de montos ganacias y gastos 
let ttlF = [];
let ttlG = [];

let operations = dateLocalSt || [];
let idOp = ''
let operation = {
    nameOp: "",
    amountOp: 0,
    typeOp: "",
    categOp: "",
    dateOp: "",
    colorAmount: "",
    id: "",
    datesOp: "",
    idCategory: "",
};
//categorias
let $$category = categoryLocalSt || []

//operaciones para filtros
let list = []

//montos
let opXfilter = [...operations]

//reporte
let infoReportCatF = [];
let infoReportCatG = [];
let infoRportBlc = []

let mountMaxG = 0
let mountMaxF = 0
let mountMin = 0
let balanceMax = 0

/************FUNCIONES*****************/

//Funciones NAV
// menu 
const burgerActive = () => {
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");
}

//activa vistas y/o oculta segun btn
const viewsReport = () => {
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.remove("is-hidden");
    $viewCategory.classList.add("is-hidden");
    operations === [] ? $viewListSection.classList.add("is-hidden") : $viewListSection.classList.remove("is-hidden")
    operations === [] ? $viewImgSection.classList.remove("is-hidden") : $viewImgSection.classList.add("is-hidden")
    reporList()
}

const reporList = () => {
    reportCategories()
    listReportGain(infoReportCatG)
    listReportFact(infoReportCatF)
    listReportMonth()
    listReportCategory()
    month_max(monthsReport)
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

// doy valor a las variables segun los inputs
const inputsDate = (e) => {
    nameOp = $InewOpDescrip.value || "Sin descripción"
    amountOp = $InewOpAmount.value || 0
    typeOp = $InewOpType.value
    categOp = $InewOpCategory.value
    dateOp = $InewOpDate.value
    datesOp = new Date($InewOpDate)


}

//guarda datos en local storage
const addLocalStorage = () => {
    const inputsValues = { ...operation };
    inputsValues.nameOp = nameOp;
    inputsValues.amountOp = Number(amountOp);
    inputsValues.typeOp = typeOp;
    inputsValues.categOp = categOp;
    inputsValues.dateOp = dateOp;
    inputsValues.idOp = self.crypto.randomUUID()
    operations.push(inputsValues);
    localStorage.setItem("operationsOB", JSON.stringify(operations));
}

//eliminar ooperacion
const deleteOp = (idX) => {
    operations = operations.filter(operation => operation.idOp !== idX)
    localStorage.setItem("operationsOB", JSON.stringify(operations))
    openApp()
}

// btn cancelar ediciion de operaciones
const cancelEditOP = () => {
    $boxEditOp.classList.add("is-hidden")
    $balance.classList.remove("is-hidden")
}

//añade info a vista de operaciones en balance
const addHtmlBlc = (listOperations) => {
    $modalListBlc.innerHTML = ``

    $viewListOp.classList.remove("is-hidden");
    $contInnerOp.classList.add("is-hidden");

    for (const { idOp, nameOp, categOp, typeOp, amountOp, dateOp } of listOperations) {
        const divContainer = document.createElement("div")
        divContainer.className = "columns is-flex-mobile is-flex-tablet container"
        divContainer.innerHTML += `      
            <div class="column is-3 is-hidden-tablet is-hidden-mobile ">
                <p id="desc-blc">
                    ${nameOp}        
                </p>
            </div>
            <div class="column is-2  is-3-tablet">
                <p id="categ-blc">
                    ${categOp} 
                </p>
            </div>
            <div class="column is-2  is-3-tablet">
                <p id="amount-blc" class= ${typeOp === "factures" ? "has-text-danger" : "has-text-primary"} >
                    $${amountOp} 
                </p>
            </div>
            <div class="column is-hidden-mobile is-2 is-3-tablet">
                <p id="date-blc">
                    ${dateOp} 
                </p>
            </div>          
            <button class="button column is-1 is-vcentered btn-edit is-small is-ghost mt-2">Editar</button>
            <button class="button column is-1 btn-dlt is-small is-ghost mt-2 ">Eliminar</button> `

        const buttonDlt = divContainer.querySelector(".btn-dlt");
        buttonDlt.onclick = function () {
            deleteOp(idOp)
        }
        const buttonEdit = divContainer.querySelector(".btn-edit");
        buttonEdit.onclick = function () {
            openModalEdit()
            editOp(idOp)
        }
        $modalListBlc.appendChild(divContainer)
    }
}

const openModalEdit = () => {
    $boxEditOp.classList.remove("is-hidden")
    $balance.classList.add("is-hidden")
}

//abrir modal y dar mismo valor a los inputs para editar 
editOp = (idX) => {
    editOperation = operations.find(operation => operation.idOp === idX)
    $IEditOpDescrip.value = editOperation["nameOp"]
    $IEditOpAmount.value = Number(editOperation["amountOp"])
    $IEditOpType.value = editOperation["typeOp"]
    $IEditOpCategory.value = editOperation["categOp"]
    $IEditOpDate.value = editOperation["dateOp"]
}

// da valores nuevos en ok edicion
const okEdit = () => {
    operations = operations.map(operation => {
        if (operation.idOp === editOperation.idOp) {
            operation.nameOp = $IEditOpDescrip.value || "Sin descripción"
            operation.amountOp = Number($IEditOpAmount.value)
            operation.typeOp = $IEditOpType.value
            operation.categOp = $IEditOpCategory.value
            operation.dateOp = $IEditOpDate.value
           
            if ( operation.typeOp === "factures") {
                $("#amount-blc").classList.remove( "has-text-primary")
                $("#amount-blc").classList.add("has-text-danger")
            }
            else{
                $("#amount-blc").classList.remove( "has-text-danger")
                $("#amount-blc").classList.add( "has-text-primary")
            }
            return operation
        }
        return operation
    })
    
    localStorage.setItem("operationsOB", JSON.stringify(operations));
    openApp()
    cancelEditOP()
    editOperation = null;
}

//filtra las operaciones segun parametro 
const typeFilter = (type) => {
    return operations.filter(operation => operation.typeOp === type)
}

//sumo montos de ganancias
const mountGain = () => {
    ttlG = typeFilter("gain")//filtro ganacias
    ttlGain = 0
    for (const operation of ttlG) {
        const { amountOp } = operation
        ttlGain += amountOp
        ttlAmount = ttlGain - ttlFact;
    }
}
//sumo montos de gastos
const mountFact = () => {
    ttlF = typeFilter("factures") //filtro gastos
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
    $ttl.innerHTML = `$${ttlAmount}`
    $ttl.classList.add(ttlFact > ttlGain ? "has-text-danger" : "has-text-primary")
}

//filtro segun gasto / ganancia
const valueList = () => {
    if ($filterType.value === "gain") {
        list = typeFilter("gain")
    }
    else if ($filterType.value === "factures") {
        list = typeFilter("factures")
    }
    else {
        list = [...operations]
    }
}

//filtro segun categoria
const categoryFilter = (type) => {
    return operations.filter(operation => operation.categOp === type)
}

const categoryList = () => {
    if ($categoryFilterI.value !== "Todas") {
        list = categoryFilter($categoryFilterI.value)
    }
    else {
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
    opXfilter.sort((x, y) => {
        const categoryX = x.categOp.replace(/\s+/g, '').toLowerCase()
        const categoryY = y.categOp.replace(/\s+/g, '').toLowerCase()
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
    opXfilter.sort((x, y) => {
        const categoryX = x.categOp.replace(/\s+/g, '').toLowerCase()
        const categoryY = y.categOp.replace(/\s+/g, '').toLowerCase()
        if (categoryX < categoryY) {
            return 1
        }
        if (categoryX > categoryY) {
            return -1
        }
        return 0
    })
}

const orderFilterMoreRecent = () => {
    opXfilter.sort((x, y) => {
        const dateX = new Date(x.dateOp)
        const dateY = new Date(y.dateOp)
        if (dateX < dateY) {
            return -1
        }
        if (dateX > dateY) {
            return 1
        }
        return 0
    }
    )
}

//filtrar desde
filterDate = () => {
    opXfilter = opXfilter.filter((op) => new Date(op.dateOp) >= new Date($Isince.value))
    addHtmlBlc(opXfilter)
}

const orderFilterLessRecent = () => {
    opXfilter.sort((y, x) => {
        const dateY = new Date(y.dateOp)
        const dateX = new Date(x.dateOp)
        if (dateX < dateY) {
            return -1
        }
        if (dateX > dateY) {
            return 1
        }
        return 0
    }
    )
}

//seccion nueva categorias

//guardo datos de categorias  en local storage
const localSCategory = () => {
    let newId = self.crypto.randomUUID()
    const categoryValue = $categoryNewI.value.replace(/\s+/g, '').toLowerCase()
    if (categoryValue !== "") {
        $$category.push(
            {
                name: $categoryNewI.value,
                id: newId,
                value: categoryValue,
            })
    }
    localStorage.setItem("categories", JSON.stringify($$category));
}

//lleno opciones de inputs
const addSelect = () => {
    $InewOpCategory.innerHTML =
        $categoryFilterI.innerHTML = ''
    editOpCategoryFilter.innerHTML = ''
    for (const { name } of $$category) {
        $InewOpCategory.innerHTML += `
        <option value="${name}">${name}</option>`
        $categoryFilterI.innerHTML += `
        <option value="${name}">${name}</option>`
        editOpCategoryFilter.innerHTML += `
        <option value="${name}">${name}</option>`

    }
}

// lleno vistas de categorias 
const addCAtegory = () => {
    $listNameCateg.innerHTML = ''
    for (const { id, name } of $$category) {
        const nameCategoryNew = document.createElement("div")
        nameCategoryNew.className = "container is-small"
        idCategoryEdit = id

        nameCategoryNew.innerHTML += `
        <li class="is-flex is-justify-content-space-between ml-2">
            <p>${name}<p>
            <button class="button dlt-categoryName is-small is-ghost">Eliminar</button>
            <button class="button edit-categoryName is-small is-ghost">Editar</button>
        </li>`
        const btnEditCategoryName = nameCategoryNew.querySelector(".edit-categoryName");
        const btnDltCategoryName = nameCategoryNew.querySelector(".dlt-categoryName");

        //boton para editar
        btnDltCategoryName.onclick = function () {
            deleteCategoryName(id)
        }
        //boton para eliminar
        btnEditCategoryName.onclick = function () {
            openEditCategory()
            editCategoryName(id)
        }
        $listNameCateg.appendChild(nameCategoryNew)
    }
}

// eliminar categoria en onclick
const deleteCategoryName = (idX) => {
    $$category = $$category.filter(category => category.id !== idX)
    localStorage.setItem("categories", JSON.stringify($$category));
    openApp()
}

//*********REPORT FUNCIONES */

//doy valor a array de ganancias y gastos para reporte
const reportCategories = () => {
    for (const op of operations) {
        if (op.typeOp === "gain") {
            infoReportCatG.push({
                mount: op.amountOp,
                category: op.categOp,
                month: op.dateOp,
                balance: ttlAmount
            })
        }
        else {
            infoReportCatF.push({
                mount: op.amountOp,
                category: op.categOp,
                month: op.dateOp,
                balance: ttlAmount
            })
        }
    }
}

const listReportGain = (array) => {
    for (const { mount, category } of array) {
        mountMaxG = mount > mountMaxG ? mountMaxG = mount : mountMaxG
        if (mount === mountMaxG) {
            $pCatGain.innerHTML = `${category}`
            $pGain.innerHTML = `$${mountMaxG}`
        }
    }
}

const listReportFact = (array) => {
    for (const { mount, category } of array) {
        mountMaxF = mount > mountMaxF ? mountMaxF = mount : mountMaxF
        if (mount === mountMaxF) {
            $pCatFact.innerHTML = `${category}`
            $pFact.innerHTML = `$${mountMaxF}`
        }
    }
}

//creo objeto de meses cons sus montos
const monthsReport = operations.reduce((acc, operation) => {
    const dates = new Date(operation.dateOp)
    const monthName = dates.getMonth()
    const year = dates.getFullYear()

    const dateFormat = `${dates.getMonth() + 1} / ${year}`;
    if (!acc[dateFormat]) {
        acc[dateFormat] = {
            gain: 0,
            factures: 0,
            balance: 0,
            month_: monthName,
            year: year
        }
    }
    acc[dateFormat][operation.typeOp] += operation.amountOp
    acc[dateFormat]["balance"] = acc[dateFormat]["gain"] - acc[dateFormat]["factures"]
    return acc
}, {})

//creo objeto de categoria cons sus montos
const categoryReport = operations.reduce((acc, operation) => {
    const category_name = operation.categOp
    if (!acc[category_name]) {

        acc[category_name] = {
            gain: 0,
            factures: 0,
            balance: 0,
        }
    }
    acc[category_name][operation.typeOp] += operation.amountOp
    acc[category_name]["balance"] = acc[category_name]["gain"] - acc[category_name]["factures"]
    return acc
}, {})


//llena vista de repotes

//NOMBRAR MESES
let MONTH = ' '
const list_Month = (date) => {
    if (date === 0) {
        MONTH = "Enero"
    }
    else if (date === 1) {
        MONTH = "Febrero"
    }
    else if (date === 2) {
        MONTH = "Marzo"
    }
    else if (date === 3) {
        MONTH = "Abril"
    }
    else if (date === 4) {
        MONTH = "Mayo"
    }
    else if (date === 5) {
        MONTH = "Junio"
    }
    else if (date === 6) {
        MONTH = "Julio"
    }
    else if (date === 7) {
        MONTH = "Agosto"
    }
    else if (date === 8) {
        MONTH = "Septiembre "
    }
    else if (date === 9) {
        MONTH = "Octubre"
    }
    else if (date === 10) {
        MONTH = " Noviembre "
    }
    else if (date === 11) {
        MONTH = " Diciembre "
    }
    return MONTH
}

//x mes
const months = Object.keys(monthsReport)
const listReportMonth = () => {
    $monthXmount.innerHTML = ``
    $gainXmount.innerHTML = ``
    $factureXmount.innerHTML = ``
    $balanceXmount.innerHTML = ``

    for (const month of months) {
        $monthXmount.innerHTML += `<li>${list_Month(monthsReport[month]["month_"])}/ ${monthsReport[month]["year"]}</li>`
        $gainXmount.innerHTML += ` <li>$${monthsReport[month]["gain"]}</li>`
        $factureXmount.innerHTML += `<li>$${monthsReport[month]["factures"]}</li>`
        $balanceXmount.innerHTML += `<li>$${monthsReport[month]["balance"]}</li>`
    }
}

//mayor gasto y ganancia
const month_max = (monthsReport) => {
    let gain_max = 0
    let factures_max = 0

    for (const month of months) {
        if (monthsReport[month]["gain"] > gain_max) {
            gain_max = monthsReport[month]["gain"]
        }
        if (monthsReport[month]["factures"] > factures_max) {
            factures_max = monthsReport[month]["factures"]
        }

        if (monthsReport[month]["gain"] === gain_max) {
            $mountGain.innerHTML = `$${gain_max}`
            $nameGain.innerHTML = `${list_Month(monthsReport[month]["month_"])}`
        }
        if (monthsReport[month]["factures"] === factures_max) {
            $mountFactures.innerHTML = `$${factures_max}`
            $nameFactures.innerHTML = `${list_Month(monthsReport[month]["month_"])}`
        }

    }
}

//x categoria
const categoriesReport = Object.keys(categoryReport)

const listReportCategory = () => {
    $categoryXmonth.innerHTML = ``
    $categoryGain.innerHTML = ``
    $categoryFacture.innerHTML = ``
    $categoryBalance.innerHTML = ``
    for (const category of categoriesReport) {
        let balance_max = categoryReport[category]["gain"] - categoryReport[category]["factures"]
        $categoryXmonth.innerHTML += `<li>${category}</li>`
        $categoryGain.innerHTML += `<li>$${categoryReport[category]["gain"]}</li>`
        $categoryFacture.innerHTML += `<li>$${categoryReport[category]["factures"]}</li>`
        $categoryBalance.innerHTML += `<li>$${categoryReport[category]["balance"]}</li>`
        if (categoryReport[category]["balance"] === balance_max) {
            $category_blc.innerHTML = `<p>${category}</p>`
            $Max_blc.innerHTML = `<p>$${categoryReport[category]["balance"]}</p>`
        }
    }
}

// // //agregar id de actegoria a cada operacion
// const idCategoryOp = ({id, value}) => {
// console.log(value)
//     operations.map((operation)=>{
//         if (operation.categOp === value) {
//            operation.idCategory = id
//         }
//         return operation
//     })
// }


//eliminar operacion si se elimina la categoria
// const deleteCategoryOp = (idX) =>{
//     operations = operations.filter(operation => operation.categOp.idCategory !== idX)
// localStorage.setItem("categories", JSON.stringify(operations));
// openApp()
// }

// edita categoria
const openEditCategory = () => {
    $modalEditCategory.classList.remove("is-hidden")
    $viewCategory.classList.add("is-hidden")
}

const editCategoryName = (idX) => {
    categoryEdit = $$category.find((category) => category.id === idX)
    $editNameCategoryI.value = categoryEdit["name"]
    console.log(categoryEdit);
}

//cancela edicion de categoria
const cancelEdit = () => {
    $modalEditCategory.classList.add("is-hidden")
    $viewCategory.classList.remove("is-hidden")
}

//ejecuto funciones necasarias para btn ok edicion 
const editNameOk = () => {
    categoryEdit.name = $editNameCategoryI.value
    categoryEdit.value = $editNameCategoryI.value.replace(/\s+/g, '').toLowerCase()
    localSCategory()
    openApp()
    cancelEdit()
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
const filterClose = () => {
    $filterHidden.classList.toggle("is-hidden")
}

//gasto / ganancia
const viewFylter = () => {
    valueList()
    addHtmlBlc(list)
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
    addHtmlBlc(opXfilter)
}

/*menor monto*/
const viewOrdenMin = () => {
    ordenFilterMin()
    addHtmlBlc(opXfilter)
}

/* alfab a/z */
const viewOrdenZA = () => {
    ordenFilterZA()
    addHtmlBlc(opXfilter)
}

/* alfab a/z */
const viewOrdenAZ = () => {
    ordenFilterAZ()
    addHtmlBlc(opXfilter)
}

/*mas recientes*/
const viewMoreRecent = () => {
    orderFilterMoreRecent()
    addHtmlBlc(opXfilter)
}
const viewLessRecent = () => {
    orderFilterLessRecent()
    addHtmlBlc(opXfilter)
}

//segun valor select ejecuto la funcion
const viewOrder = () => {
    let valueInput = $orderMI.value
    if (valueInput === "higher-amount") {
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
    else if (valueInput === "more-recent") {

        viewMoreRecent()
    }
    else if (valueInput === "less-recent") {
        viewLessRecent()
    }

}

//ejecuto funciones necesarias para añadir categoria
const addCategories = () => {
    localSCategory()
    addCAtegory()
    addSelect()
}

//ejecuto funciones necesarias para mostrar totales al abrir la pagina
const openApp = () => {
    mountFact()
    mountGain()
    ttlViewBalance()
    addCAtegory()
    addSelect()
    addHtmlBlc(operations)
    listReportMonth()
    listReportCategory()
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
//editar operacion
$btnEditOpCancel.addEventListener("click", cancelEditOP);
$btnOK.addEventListener("click", okEdit);
//Eventos filtros
$filterType.addEventListener("change", viewFylter);
$categoryFilterI.addEventListener("change", viewCategory);
$orderMI.addEventListener("change", viewOrder);
$btnFilterHidden.addEventListener("change", filterClose);
$Isince.addEventListener("change", filterDate)
//eventos categorias
$btnNewCategory.addEventListener("click", addCategories);
$btnCancelName.addEventListener("click", cancelEdit);
$editNameOk.addEventListener("click", editNameOk);