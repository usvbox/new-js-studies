 //BUDGET CONTROLLER
 var budgetController = (function() {
    // Function constructors for income and expense items entered by the user
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calculatePercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // Data structure to store information about income and expense items entered by the user as well as their totals
    var calculateTotal = function(typeOfItem) {
        var sum = 0;
        data.allItems[typeOfItem].forEach(function(currentValue) {
            sum += currentValue.value;
        });
        data.totals[typeOfItem] = sum;
    };
    var calculateBudget = function() {
        // calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
        // calculate budget (income - expenses)
        data.budget = data.totals.inc - data.totals.exp;
        // calculate % (expenses/income)
        if (data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
            data.percentage = -1;
        }
    };
    var getBudget = function() {
        return {
            budget: data.budget,
            totalIncome: data.totals.inc,
            totalExpenses: data.totals.exp,
            percentage: data.percentage
        };
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    return {
        //A puplic method that creates an income or an expense item based on a corresponding function constructor saves in the data structure and returns it for external controllers to use
        addItem: function(type, des, val) {
            var inputItem, ID;
            //create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //create new item based on inc or exp type
            if (type === 'exp') {
                inputItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                inputItem = new Income(ID, des, val);
            }
            // push it into data structure
            data.allItems[type].push(inputItem);
            //return new item
            return inputItem;
        },
        deleteItem: function(type, id) {
            var iDs, index;
            //returns a new array from another array with the elements returned from a function applied to the source array
            iDs = data.allItems[type].map(function(currentElement) {
                return currentElement.id;
            });
            index = iDs.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        updateBudget: function() {
            // 1. calculate the budget
            calculateBudget();
            // 2. return the budget
            var budget = getBudget();
            // 3. update the budget on the ui

            return budget;
        },
        calculatePercentage: function () {
            data.allItems.exp.forEach(function (currentElement) {
                currentElement.calculatePercentage(data.totals.inc);
            });

        },
        getPercentageFigures: function () {
            var allPercentageFigures = data.allItems.exp.map(function(currentElement) {
                return currentElement.getPercentage();
            });
            return allPercentageFigures;
        },
        getExpenses: function () {
            var expenses = data.allItems.exp;
            return expenses;
        },
        testing: function() {
            console.log(data.allItems.exp);
            console.log(data.allItems.inc);
        },
        testingTotal: function(type) {
            console.log(calculateTotal(type));
        }
    };
})();


 //UI CONTROLLER
 var uiController = (function() {
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        parentContainer: '.container',
        itemPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    var formatNumber = function (number, type) {
        //1 + or - before the number
        //2 2 decimal points
        //3 comma separation for thousands
        var numberSplit, integerPart, decimalPart;
        number = Math.abs(number);
        number = number.toFixed(2);
        numberSplit = number.split('.');
        integerPart = numberSplit[0];
        if (integerPart.length > 3) {
            integerPart = integerPart.substr(0,integerPart.length - 3) + ',' + integerPart.substr(integerPart.length - 3, 3);
        }
        decimalPart = numberSplit[1];
        type === 'exp' ? sign = '-' : sign = '+';
        return (type === 'exp' ? '-' : '+') + ' ' + integerPart + '.' + decimalPart; 
    };
    var nodeListForEach = function(list, callbackFunction) {
        for (var i = 0; i < list.length; i++) {
            callbackFunction(list[i], i);
        }
    };
    return {
        // A public method that returns the type, description and value properties of an item
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value) // use parseFloat to convert a string to a number with float
            };
        },
        //A public method that creates an html DOM element for an income or an expense item and places it in the corresponding html DOM container
        addListItem: function(itemObject, type) {
            var itemHtmlTemplate, itemHtml, container;
            // A function inside the addListItem method that determines whether an item is an income element or an expense element and creates an html element to place in the respective html DOM container
            var determineItemHtml = function (itemObject, type) {
                // create html string with placeholder text
                if (type === 'inc') {                    
                    itemHtmlTemplate = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                } else if (type === 'exp') {                   
                    itemHtmlTemplate = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

                // replace the text with actual data
                itemHtml = itemHtmlTemplate.replace('%id%', itemObject.id);
                itemHtml = itemHtml.replace('%description%', itemObject.description);
                itemHtml = itemHtml.replace('%value%', formatNumber(itemObject.value, type));

                return itemHtml;
            };
            // A function inside the addListItem method that determines whether an item should go to the income or the expense container in the html DOM
            var determineContainer = function (type) {
                if (type === 'inc') {
                    container = domStrings.incomeContainer;
                } else if (type === 'exp') {
                    container = domStrings.expenseContainer;
                }
                return container;
            }    
            //insert html into DOM
            document.querySelector(determineContainer(type)).insertAdjacentHTML('beforeend', determineItemHtml(itemObject, type));

        },
        deleteListItem: function(selectorId) {
            var elementToRemove = document.getElementById(selectorId);
            elementToRemove.parentNode.removeChild(elementToRemove);
        },
        clearFields: function() {
            var fields, fieldsArray;
            // querySelectorAll allows us to return elements from the DOM as a list, contatination is used to arrange elements together in a list
            fields = document.querySelectorAll(domStrings.inputDescription + ',' + domStrings.inputValue);
            // Here we use the slice method of an array and make it think that the list (an array-like object) is an array. For this we use the Array object at the beginning and point to its slice method in the Array prototype object. But in order to be able to apply the slice method to the list, we need to assign the list to the Array's 'this' variable so that the slice method thinks it's actually working on the Array, but instead it will be working on the list. To assign the list to the 'this' variable with use the 'call' anonymous (or callback) function and pass it our list. As a result, we transform the list into an array, because this is what slice does - returns a new array out of the array it's been applied to. 
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(currentValue, indexNumber, array) {
                currentValue.value = "";
            });
            fieldsArray[0].focus();
        },
        displayBudget: function(object) {
            var type;
            object.budget > 0 ? type = 'inc': type = 'exp';
            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(object.budget, type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(object.totalIncome, 'inc');
            document.querySelector(domStrings.expenseLabel).textContent = formatNumber(object.totalExpenses, 'exp');
            

            if (object.percentage >0) {
                document.querySelector(domStrings.percentageLabel).textContent = object.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '---';
            }
        },
        displayPercentage: function(percentageFigures) {
            var fields = document.querySelectorAll(domStrings.itemPercentageLabel);
            nodeListForEach(fields, function (currentElement, index) {
                if (percentageFigures[index] > 0) {
                    currentElement.textContent = percentageFigures[index] + '%';
                } else {
                    currentElement.textContent = '---';
                }
            });
        },
        displayMonth: function() {
            var months, now, month, year;
            now = new Date();
            year = now.getFullYear();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            document.querySelector(domStrings.dateLabel).textContent = months[month] + ' ' + year;

        },
        changeType: function () {
            var fields = document.querySelectorAll(
                domStrings.inputType + ',' +
                domStrings.inputDescription  + ',' +
                domStrings.inputValue
            );
            nodeListForEach(fields, function (currentElement) {
                currentElement.classList.toggle('red-focus');
            });
            document.querySelector(domStrings.inputButton).classList.toggle('red');
        },
        // A public method that returns the attributes of elements from the html DOM structure
        getDomStrings: function() {
            return domStrings;
        }
    };

 })();


//LOGIC CONTROLLER
 var controller = (function(budgetCtrl, uiCtrl) {
    // A method called by the init function to initiate event listeners upon launching the app
    var setupEventListeners = function () {
        var dom = uiCtrl.getDomStrings();
        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
         }); 
        document.querySelector(dom.parentContainer).addEventListener('click', ctrlDeleteItem);
        document.querySelector(dom.inputType).addEventListener('change', uiController.changeType);
    };
    // A method to calculate the budget and update it on the ui
    var receiveUpdatedBudget = function() {
        var budget;
        budget = budgetController.updateBudget();
        uiController.displayBudget(budget);
        console.log(budget);
    };
    // A method to update expense percentage figures
    var updateExpensePercentage = function () {
        
        //1 Calculate percentage figures
        budgetController.calculatePercentage();
        //2 Read from the budget controller
        var percentageFigures = budgetController.getPercentageFigures();
        //3 Update the UI
        console.log(percentageFigures);
        uiController.displayPercentage(percentageFigures);
        
    };

    // A method that controls manipulating items by using public methods provided by the budgetController and uiController
    var ctrlAddItem = function () {
        var input, newItem;
        // 1. get the field input data
        input = uiCtrl.getInput();
        if (input.description != "" && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. add the item to the UI 
            uiCtrl.addListItem(newItem, input.type);
            // 4. clear the fields
            uiController.clearFields();
            // 5. calculate and update the budget;
            receiveUpdatedBudget();
            // 6. calculate and update the percentage figures
            updateExpensePercentage();
        }

    };
    var ctrlDeleteItem = function(event) {
        var fullItemId, splitId, type, id;
        fullItemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (fullItemId) {
            splitId = fullItemId.split('-');
            type = splitId[0];
            id = parseInt(splitId[1]);
        //1. delete from the data structure
        budgetController.deleteItem(type, id);
        //2. delete from UI
        uiController.deleteListItem(fullItemId);
        //3. update the budget
        receiveUpdatedBudget();
        // 4. calculate and update the percentage figures
        updateExpensePercentage();
        }
    };
    // pubic method to initiate event listeners upon starting the app
    return {
        init: function () {
            setupEventListeners();
            uiController.displayMonth();
            uiController.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: -1
            });
            
        }
    };
// Here we provide budgetController and uiController as arguments for the logic controller so that it will be able to use their methods and manipulate data for them
 })(budgetController, uiController);

 controller.init();  

 // document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
 // document.getElementById('score-0').textContent = '0';


 //TODO, part 3
 /*
1. Calculate percentage figures
2. Update percentage figures in the UI
3. Display the current month and year
4. Apply nice formatting to numbers
5. Improve input fields UX
 */      