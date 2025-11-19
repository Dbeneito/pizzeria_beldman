class Pizza {
    constructor(name, basePrice, baseIngredients) {
        this.name = name;
        this.basePrice = basePrice;
        this.baseIngredients = baseIngredients;
        this.extras = [];
    }

    addExtra(extra) {
        this.extras.push(extra);
    }

    calculatePrice(){
        let extrasCost = this.extras.reduce((sum, item) => sum + item.price, 0);
        return this.basePrice + extrasCost;
    }

    generateTicket() {
        let ticket = `${this.name.toUpperCase()} ${this.basePrice.toFixed(2)}€`;
        this.extras.forEach(extra => {
          ticket += ` + EXTRA ${extra.name.toUpperCase()} ${extra.price.toFixed(2)}€`;
        });
        ticket += `\nTOTAL ${this.calculatePrice().toFixed(2)}€`;
        return ticket;
      }
}

const pizzas = {
    'Margherita': new Pizza('Margherita', 9.30, ['Tomato', 'Mozzarella', 'Albahaca']),
    'Prosciutto': new Pizza('Prosciutto', 12.00, ['Tomato', 'Mozzarella', 'Ham', 'Oregano']),
    'Prosciutto e Funghi': new Pizza('Prosciutto e Funghi', 12.50, ['Tomato', 'Mozzarella', 'Ham', 'Mushrooms', 'Oregano']),
    '4 Stagioni': new Pizza('4 Stagioni', 12.50, ['Tomato', 'Mozzarella', 'Ham', 'Mushrooms', 'Artichokes', 'Olives', 'Oregano']),
};

const extras = {
    'Ham': { name: 'Ham', price: 0.9 },
    'Extra cheese': { name: 'Extra cheese', price: 0.90 },
    'Natural tomato': { name: 'Natural tomato', price: 0.90 },
    'Mushrooms': { name: 'Mushrooms', price: 0.90 },
    'Artichokes': { name: 'Artichokes', price: 0.90 },
    'Tuna': { name: 'Tuna', price: 0.90 },
    'Olives': { name: 'Olives', price: 1.20 },
    'Capers': { name: 'Capers', price: 1.20 },
    'Serrano ham': { name: 'Serrano ham', price: 1.20 },
    'Chicken': { name: 'Chicken', price: 1.20 },
    'Anchovies': { name: 'Anchovies', price: 2.20 },
    'Salmon': { name: 'Salmon', price: 2.20 },
    'Minced beef': { name: 'Minced beef', price: 2.20 },
    'Bbq sauce': { name: 'Bbq sauce', price: 1.00 },
    'Spicy sauce': { name: 'Spicy sauce', price: 0.90 },
    'Cheese filled crust': { name: 'Cheese filled crust', price: 1.20 },

};

const pizza = pizzas ['4 Stagioni'];
pizza.addExtra(extras['Extra cheese']);
pizza.addExtra(extras['Cheese filled crust']);

console.log(pizza.generateTicket());