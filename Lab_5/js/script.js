import { getAll, create, updateItems, deleteItems } from './api.js'

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const itemsList = document.getElementById("items-list")
const sortParameterMenu = document.getElementById("items__sort-parameter")
const itemsTotalLabel = document.getElementById("items__total-value")
const calculateTotalValues = document.getElementById("items__calculate-total")
const findCardInput = document.getElementById("items__find-card")
const findButton = document.getElementById("items__find-button")
const cancelButton = document.getElementById("items__cancel-button")
const submitButton = document.getElementById("items__submit-button")
const nameCardLabel = document.getElementById("items__create-title")
const priceCardLabel = document.getElementById("items__create-price")
const weightCardLabel = document.getElementById("items__create-weight")
const countCardLabel = document.getElementById("items__create-count")
const errorTitle = document.getElementById("error__title");
const errorPrice = document.getElementById("error__price");
const errorWeight = document.getElementById("error__weight");
const errorCount = document.getElementById("error__count");


var allItems = await getAll();

const itemTemplate = ({ id, name, price, weight, count }) => `<li id="${id}">
        <img class="item-image" src="images/first_weapon.jpg" alt="Item"/>
        <div class="item-description">
            <h3 class="item-name">${name}</h3>
            <label class="item-price">Price: ${price} hrn.</label>
            <label class="item-price">Total price: ${count * price} hrn.</label>
            <label class="item-weight">Weight: ${weight} kg</label>
            <label class="item-weight">Total weight: ${count * weight} kg</label>
            <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="items__edit-button-class">
                Edit
            </button>
            <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="items__edit-button-class">
                Delete
            </button>
        </div>    
    </li>`;

const addItemtoPage = ({ id, name, price, weight, count }, onEditItem, onDeleteItem) => {
    itemsList.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, price, weight, count })
    );
    
    
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    
    editButton.addEventListener("click", onEditItem);

    editButton.onmousedown = e => e.stopPropagation();

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    deleteButton.addEventListener("click", onDeleteItem);
    deleteButton.onmousedown = e => e.stopPropagation();
    
}

const printAllItems = async () => {
    itemsList.innerHTML = ""
    const items = await getAll();

    for (const item of items) {
        addItemtoPage(item, onEditItem, onDeleteItem)
    }
}


findButton.addEventListener("click", (event) => {
    event.preventDefault()
    const foundWeapon = allItems.filter(elem => elem.name.search(findCardInput.value) !== -1);
    printAllItems(foundWeapon);
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault()
    printAllItems(allItems);
    findCardInput.value = "";
});

sortParameterMenu.addEventListener("change", (event) => {
    event.preventDefault()

    if (sortParameterMenu.value === "first__option") {
        allItems.sort((a, b) => (a.name < b.name) ? -1 : 1);
        printAllItems(allItems);
    }
    if (sortParameterMenu.value  === "second__option") {
        allItems.sort((a, b) => (a.name > b.name) ? -1 : 1);
        printAllItems(allItems);
    }  
});

calculateTotalValues.addEventListener("change", (event) => {
    event.preventDefault()

    if (calculateTotalValues.value === "none") {
        itemsTotalLabel.innerHTML = " ? ";
    }
    if (calculateTotalValues.value === "price") {
        let sum = allItems.reduce(((acc, val) => acc + val.price), 0);
        itemsTotalLabel.innerHTML = sum;
    }
    if (calculateTotalValues.value === "weight") {
        let sum = allItems.reduce(((acc, val) => acc + val.weight), 0);
        itemsTotalLabel.innerHTML = sum;
    }


});

const getInputValues = () => {
    return {
        name: nameCardLabel.value,
        price: priceCardLabel.value,
        weight: weightCardLabel.value,
        count: countCardLabel.value,
    };
};



submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const invalidSymbols = ["@", "#", "<", ">", "/", "\\", "*", "+", "-", "=", ")", "(", "[", "]",
        "{", "}", "&", "^", "%", "$", "!", "~"];

    if (nameCardLabel.value == 0) {
        errorTitle.textContent = "Please enter a title";
        window.alert("Oops, something went wrong");
    }
    else if (invalidSymbols.some(symbol => nameCardLabel.value.includes(symbol))) {
        errorTitle.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if (priceCardLabel.value <= 0) {
        errorPrice.textContent = "Please enter a price";
        window.alert("Oops,something went wrong");
    }
    else if (weightCardLabel.value <= 0) {
        errorWeight.textContent = "Please enter a weight";
        window.alert("Oops,something went wrong");
    }
    else if (countCardLabel.value <= 0) {
        errorCount.textContent = "Please enter a count";
        window.alert("Oops,something went wrong");
    }

    else {
        const { name, price, weight, count } = getInputValues();

        nameCardLabel.value = "";
        priceCardLabel.value = "";
        weightCardLabel.value = "";
        countCardLabel.value = "";

        create({
            name,
            price,
            weight,
            count
        }).then(printAllItems);
        

        errorTitle.textContent = "";
        errorPrice.textContent = "";
        errorWeight.textContent = "";
        errorCount.textContent = "";
    }
});

const clearInputs = () => {
    nameCardLabel.value = "";
    priceCardLabel.value = "";
    weightCardLabel.value = "";
    countCardLabel.value = "";
};

const onEditItem = (element) => {
    const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    const { name, price, weight, count } = getInputValues();

    clearInputs();

    updateItems(id, {
        name,
        price,
        weight,
        count
    }).then(printAllItems);
}

const onDeleteItem = (element) => {
    const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");

    deleteItems(id).then(printAllItems);
}

printAllItems(allItems);


