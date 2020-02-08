 //BUDGET CONTROLLER
 var budgetController = (function() {

 })();


 //UI CONTROLLER
 var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        description: '.add__description',
        value: '.add__value',
        addButton: '.add__btn'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMStrings.description).value,
                value: document.querySelector(DOMStrings.value).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    }
 })();


//LOGIC CONTROLLER
 var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings();
    var ctrlAddItem = function () {
        // 1. get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. add the item to the UI 
        // 4. calculate the budget
        // 5. display the budget on the UI
    }
    
    document.querySelector(DOM.addButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
       if (event.keyCode === 13 || event.which === 13) {
           ctrlAddItem();
       }
    });

 })(budgetController, UIController); 


