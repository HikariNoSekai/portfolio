"use strict";

function Calc(count) {
    this.n = count + 1;
    this.init_ = () => {
        this.table = document.createElement('table');
        this.table.style.textAlign = 'right';
        this.table.style.fontFamily = 'monospace';
        for (let i = 1; i < this.n; i++) {
            this.row = document.createElement('tr');
            for (let j = 1; j < this.n; j++) {
                this.cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
                this.cell.appendChild(document.createTextNode(i * j));
                this.cell.style.padding = '4px';
                this.cell.style.width = 100 / (this.n - 1) + '%';
                this.row.appendChild(this.cell);
            }
            this.table.appendChild(this.row);
        }
    }

    this.show = () => {
        document.body.appendChild(this.table);
    }

    this.init_();
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let number = parseInt(document.querySelector(".number").value);
    let funcCalc = new Calc(number);
    funcCalc.show();
})