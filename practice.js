/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

/**
 * bakeAndSellPies - calculates the amout of pie to bake, it's cost and prices sold
 * 
 * @param {string} pieType 
 * @param {number} pieQuantity 
 * @param {number || float} profitMargin 
 */
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = findRecipe(pieType);

  bakePies(recipe, pieType, pieQuantity)
  let cost = findCost(recipe);
  console.log(`Cost per pie: ${cost}`);

  const totalCost = cost * pieQuantity;
  const totalRevenue = calculateRevenue(totalCost, profitMargin);

  console.log(`Sold ${pieQuantity} pies for $${totalRevenue.toFixed(2)}!`);
}

/**
 * findRecipe - return recipe 
 * @param {string} pieType 
 * @returns {0bject} 
 */
function findRecipe(pieType) {
  return recipes[pieType];
}

/**
 * bakePies - bakes the pies
 * @param {array} recipe 
 * @param {string} pieType 
 * @param {number} pieQuantity 
 */
function bakePies(recipe, pieType, pieQuantity) {
  for (let i = 0; i < pieQuantity; i++) {
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);

    console.log(`Baked pie ${i + 1}!`);
  }
}

/**
 * findCost - calculates the cost of each pie
 * @param {array} recipe 
 * @returns {number} cost of the pie;
 */
function findCost(recipe) {
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);

  return costOfPie;
}

/**
 * calculateRevenue - calculates the revenue generated from the sales
 * 
 * @param {number} totalCost
 * @param {number} profitMargin 
 * @returns 
 */
function calculateRevenue(totalCost, profitMargin) {
  return totalCost * (profitMargin || 1.2);
}


/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
bakeAndSellPies("pumpkinPie", 2);
bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
