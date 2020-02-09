 //BUDGET CONTROLLER
 var budgetController = (function() {

 })();


 //UI CONTROLLER
 var uiController = (function() {
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            };
        },
        getDomStrings: function() {
            return domStrings;
        }
    }
 })();


//LOGIC CONTROLLER
 var controller = (function(budgetCtrl, uiCtrl) {
    
    var setupEventListeners = function () {
        var dom = uiCtrl.getDomStrings();
        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
         }); 
    };
    
    var ctrlAddItem = function () {
        // 1. get the field input data
        var input = uiCtrl.getInput();
        // 2. add the item to the budget controller
        // 3. add the item to the UI 
        // 4. calculate the budget
        // 5. display the budget on the UI
    };

    return {
        init: function () {
            console.log('Application is launched.');
            setupEventListeners();
        }
    };

 })(budgetController, uiController);

 controller.init();


