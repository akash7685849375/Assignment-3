class Smoothie {
    constructor(name, size, ingredients, sweetener, notes) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
        this.notes = notes;
    }

    getDescription() {
        return `
            <h2>Thank you for your order, ${this.name}!</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
            <p><strong>Sweetener:</strong> ${this.sweetener}</p>
            <p><strong>Special Instructions:</strong> ${this.notes || "None"}</p>
        `;
    }
}

document.getElementById("orderButton").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const sweetener = document.getElementById("sweetener").value;
    const notes = document.getElementById("notes").value;

    const ingredientElements = document.querySelectorAll("#ingredients input:checked");
    const ingredients = Array.from(ingredientElements).map(ingredient => ingredient.value);

    if (!name || ingredients.length === 0) {
        alert("Please fill out your name and select at least one ingredient.");
        return;
    }

    const smoothie = new Smoothie(name, size, ingredients, sweetener, notes);
    document.getElementById("output").innerHTML = smoothie.getDescription();
});
