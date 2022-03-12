"use strict";
const b = 30;
const myName = "nguyen tien manh";
const myAge = 20;
const startus = true;
const myDB = { id: 1, name: "manh" };
const getProduct = (products) => {
    const result = products.map(item => `<div>${item.name}</div>`);
};
getProduct([{ id: 1, name: "manh" }, { id: 2, name: "tien" }]);
//# sourceMappingURL=app.js.map