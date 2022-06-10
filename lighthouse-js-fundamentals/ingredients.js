const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let item = 0;
while (item<ingredients.length) {
  console.log(ingredients[item]);
  item ++;
}

for (var i=0;i < ingredients.length ;i++) {
  console.log(ingredients[i]);
}

for (var j = ingredients.length; j >-1; j--) {
  console.log(ingredients[j]); 
}