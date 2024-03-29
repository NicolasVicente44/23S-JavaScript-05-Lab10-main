const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    size;
    isDecaf;
    // create constructor with keyword
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    };
    // add a serveIt method
    serveIt() {
        // Generate an IMG of the coffee ordered
        const cup = document.createElement("img");
        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg");
        // Determine caffeine status of the coffee
        var decaf;
        if (this.isDecaf === true) {
            decaf = "decaffeinated";
            // Set the src attribute of the new IMG element
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        } else {
            decaf = "caffeinated";
            // Set the src attribute of the new IMG element
            cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }
        // Set the size of the cup SVG image based on this.size
        var cupSize;
        switch (this.size) {
            case "small":
                cupSize = 100;
                break;
            case "medium":
                cupSize = 150;
                break;
            case "large":
                cupSize = 200;
                break;
            default:
                cupSize = 150;
        }
        // Size the IMG in terms of its height based on above number from the switch
        cup.setAttribute("height", cupSize);
        // Generate a description of the coffee and put it into the 
        //IMG title attribute
        var description = `A ${this.size} ${this.decaf} coffee`;
        cup.setAttribute("title", description);
        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
        // Output all object member values
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        };
    };
};
/* STEP 2: Instatiate a coffee based on the 
above constructor function */
let priyanshCoffee = new Coffee("medium", false);

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
priyanshCoffee.serveIt();
let robertCoffee = new Coffee("small", true);
robertCoffee.serveIt();
let meganCoffee = new Coffee("large", true);
meganCoffee.serveIt();

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf); // this.size = size; this.isDecaf = isDecaf
        this.milkType = milkType;
    };
    description() {
        console.log(`A ${this.size} latte with ${this.milkType} milk.`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let priyanshLatte = new Latte("medium", true, "2%");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, 
and try the latteDesc() method from the subclass, as well as the serveIt() method 
from the parent class */
let nickLatte = new Latte("large", false, "Almond Milk");
nickLatte.serveIt();

/* LAB 07: Using the coffee.html file, create a new constructor for a different type of coffee (like an Americano, Espresso or ???). 
Based on this new coffee on the Coffee object. 
Use the steps we followed to create Latte as your guide.*/
class Espresso extends Coffee {
    milkType;
    sugarCount;
    espressoShotCount;
    syrupType;
    whippedCream;
    constructor (size, isDecaf, milkType, sugarCount, espressoShotCount, syrupType, whippedCream) {
        super(size, isDecaf);
        this.milkType = milkType;
        this.sugarCount = sugarCount;
        this.espressoShotCount = espressoShotCount;
        this.syrupType = syrupType;
        this.whippedCream = whippedCream;
    };

    description() {
        let cream = this.whippedCream ? " with whipped cream" : "";
        console.log(`A ${this.size} espresso with ${this.milkType} milk, ${this.sugarCount} sugar/sugars, ${this.espressoShotCount} espresso shots, ${this.syrupType} syrup${cream}.`);
      }
      
    addExtraSugar() {
        this.sugarCount += 1;
        console.log(`Sugar added, new sugar count is ${this.sugarCount} sugars.`)
    }
}


let espresso1 = new Espresso("medium", false, "1%", 2, 3, "maple", true);

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG