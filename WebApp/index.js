import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://cart-53a22-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database,"items")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function(){
    const input = inputFieldEl.value
    push(itemsInDB, input)

    clearInputFieldEl()

    
})

onValue(itemsInDB, function(snapshot) {

    if(snapshot.exists()) {

        let itemsArray = Object.entries(snapshot.val())

        clearShoppingListEl()

        for(let i=0;i<itemsArray.length;i++) {

            let currentItem = itemsArray[i]

            let currentItemID = currentItem[0]

            let currentItemValue = currentItem[1]

            appendItemToShoppingListEl(currentItem)

        }
    }
    else {

        shoppingListEl.innerHTML = "No items here... yet"
    }
})

function clearShoppingListEl() {

    shoppingListEl.innerHTML = ""

}

function clearInputFieldEl(){

    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(input){
    
    let itemID = input[0]

    let itemValue = input[1]

    let newEl =  document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {

        let exactLocationOfItemInDB = ref(database, `items/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}