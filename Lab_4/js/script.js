const itemsList = document.getElementById("items-list")
const sortParameterMenu = document.getElementById("items__sort-parameter")
const itemsTotalLabel = document.getElementById("items__total-value")
const calculateTotalValues = document.getElementById("items__calculate-total")
const findCardInput = document.getElementById("items__find-card")
const findCardLabel = document.getElementById("find__card-label")
const findButton = document.getElementById("items__find-button")
const cancelButton = document.getElementById("items__cancel-button")
const sortParameterAsc = document.getElementById("items__sort-asc")
const sortParameterDesc = document.getElementById("items__sort-desc")
const submitButton = document.getElementById("items__submit-button")
const nameCardLabel = document.getElementById("items__create-title")
const priceCardLabel = document.getElementById("items__create-price")
const weightCardLabel = document.getElementById("items__create-weight")
const countCardLabel = document.getElementById("items__create-count")
const errorTitle = document.getElementById("error__title");
const errorPrice = document.getElementById("error__price");
const errorWeight = document.getElementById("error__weight");
const errorCount = document.getElementById("error__count");

var allItems = [
    { id: 1, name: "Knife", price: 23, weight: 0.3, count: 20 },
    { id: 2, name: "Ak-47", price: 2000, weight: 5, count: 3 },
    { id: 3, name: "M4A4", price: 1800, weight: 4.7, count: 2 },
    { id: 4, name: "M4A4-A1", price: 1560, weight: 4.4, count: 5 },
    { id: 5, name: "Usp-s", price: 500, weight: 2.3, count: 10 },
    { id: 6, name: "Glock", price: 670, weight: 2.1, count: 11 }
]

const itemTemplate = ({ id, name, price, weight, count }) => `<li id="${id}">
        <img class="item-image" src="images/first_weapon.jpg" alt="Item"/>
        <div class="item-description">
            <h3 class="item-name">${name}</h3>
            <label class="item-price">Price: ${price} hrn.</label>
            <label class="item-price">Total price: ${count * price} hrn.</label>
            <label class="item-weight">Weight: ${weight} kg</label>
            <label class="item-weight">Total weight: ${count * weight} kg</label>
            <button id="items__edit-button" class="items__edit-button-class">
                Edit
            </button>
        </div>    
    </li>`;

const addItemtoPage = ({ id, name, price, weight, count }) => {
    itemsList.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, price, weight, count })
    );
}

const addItem = ({id, name, price, weight, count }) => {
    const newItem = {
        id,
        name,
        price,
        weight,
        count,
    };

    allItems.push(newItem);
    addItemtoPage(newItem);
}

const printAllItems = (items) => {
    itemsList.innerHTML = ""

    for (const item of items) {
        addItemtoPage(item)
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
    if (sortParameterMenu.value === "second__option") {
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
        console.log(sum);
    }
    if (calculateTotalValues.value === "weight") {
        let sum = allItems.reduce(((acc, val) => acc + val.weight), 0);
        itemsTotalLabel.innerHTML = sum;
        console.log(sum);
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
    "{", "}", "&", "^", "%", "$","!", "~"];

    if(nameCardLabel.value == 0){
        errorTitle.textContent = "Please enter a title";
        window.alert("Oops, something went wrong");
    }
    else if(invalidSymbols.some(symbol =>nameCardLabel.value.includes(symbol))){
        errorTitle.textContent = "Wrong symbols";
        window.alert("Oops, something went wrong");
    }
    else if(priceCardLabel.value <= 0) {
        errorPrice.textContent = "Please enter a price";
        window.alert("Oops,something went wrong");
    }
    else if(weightCardLabel.value <= 0) {
        errorWeight.textContent = "Please enter a weight";
        window.alert("Oops,something went wrong");
    }
    else if(countCardLabel.value <= 0) {
        errorCount.textContent = "Please enter a count";
        window.alert("Oops,something went wrong");
    }

    else{
    const {id, name, price, weight, count } = getInputValues();
    
    nameCardLabel.value = "";
    priceCardLabel.value = "";
    weightCardLabel.value = "";
    countCardLabel.value = "";

    addItem({
        id,
        name,
        price,
        weight,
        count,
    });
    
    errorTitle.textContent = "";
    errorPrice.textContent = "";
    errorWeight.textContent = "";
    errorCount.textContent = "";
}
});

printAllItems(allItems);


