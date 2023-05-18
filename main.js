// Genrate a random number between 0 and num - 1
const randomNumber = num => Math.floor(Math.random() * num);


const fortune = { 
    card: ['Rider', 'Clover', 'Ship', 'House', 'Tree', 'Clouds', 'Snake', 'Coffin', 'Bouquet', 'Scythe', 'Whip', 'Birds', 'Child', 'Fox', 'Bear', 'Stars', 'Stork', 'Dog', 'Tower', 'Garden', 'Mountain', 'Crossroads', 'Mice', 'Heart', 'Ring', 'Book', 'Letter', 'Man', 'Woman', 'Lily', 'Sun', 'Moon', 'Key', 'Fish', 'Anchor', 'Cross'],
    position: ['upright', 'reversed']
};

const generatedFortune = [];


// Generate a card pull with position (upright/reversed for each card)
const generateCardPull = () => {
    let cardPull = [];
  for (let prop in fortune) {
    let randomIndex = randomNumber(fortune[prop].length);
    switch (prop) {
        case 'card':
            cardPull.push(`You drew the ${fortune[prop][randomIndex]} card. `);
            break;
        case 'position':
            cardPull.push(`The card is ${fortune[prop][randomIndex]}.`);
            break;
        default:
            cardPull.push('Something went wrong, try again');
            break;
    }
  }
  return cardPull;
}

// Use a for loop to generate 3 card pulls 
for (let i = 0; i < 3; i++){
    generatedFortune.push(generateCardPull());
}

// Format generatedFortune array into a nice message
const formatFortune = generatedFortune => {
    const formatted = `Situation: ${generatedFortune[0][0] + generatedFortune[0][1]} \nAction: ${generatedFortune[1][0] + generatedFortune[1][1]} \nSolution: ${generatedFortune[2][0] + generatedFortune[2][1]}`;
    console.log(formatted);
}

formatFortune(generatedFortune);