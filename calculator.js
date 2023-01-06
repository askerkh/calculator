window.addEventListener('DOMContentLoaded', () => {
    const calculator = {
        display: document.querySelector('.display'),
        operation: "",
        pastValue: "",
        calc: function () {
            switch (this.operation){
                case "+":
                    this.display.innerText = `${this.sum(+this.pastValue, +this.display.innerText)}`;
                    break;
                case "-":
                    this.display.innerText = `${this.substract(+this.pastValue, +this.display.innerText)}`;
                    break;
                case "*":
                    this.display.innerText = `${this.multiply(+this.pastValue, +this.display.innerText)}`;
                    break;
                case "/":
                    this.display.innerText = `${this.divide(+this.pastValue, +this.display.innerText)}`;
                    break;
            }
        },
        delOneValue: function () {
            this.display.innerText = this.display.innerText.slice(0, this.display.innerText.length - 1);
        },
        clearDisplay: function () {
            this.display.innerText = "";
        },
        calcDisplay: function (num) {
            this.display.innerText += `${num}`;
        },
        sum: (a, b) => {
            return a + b;
        },
        substract: (a, b) => {
            return a - b;
        },
        multiply: (a, b) => {
            return  a * b;
        },
        divide: (a, b) => {
            return a / b;
        },
    };

    const btns = document.querySelector('.buttons');

    btns.addEventListener('click', (event) => {
        if(event.target && event.target.nodeName == "BUTTON"){
            const value = event.target.innerText;
            if(value == ",") {
                calculator.display.innerText += ",";
                return;
            }
            for(let i = 0; i < 10; ++i) {
                
                if (i == +value) {
                    calculator.calcDisplay(i);
                    return;
                }
            }
            switch (value) {
                case "C":
                    calculator.clearDisplay();
                    return;
                case "Del":
                    calculator.delOneValue();
                    return;
                case "=":
                    calculator.calc();
                    calculator.pastValue = "";
                    return;
            }
            calculator.operation = value;
            calculator.pastValue = calculator.display.innerText;
            calculator.clearDisplay();
        }
    });
});

