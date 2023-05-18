// Genrate a random number between 0 and num - 1
const randomNumber = num => Math.floor(Math.random() * num);


const fortune = { 
    card: ['Rider', 'Clover', 'Ship', 'House', 'Tree', 'Clouds', 'Snake', 'Coffin', 'Bouquet', 'Scythe', 'Whip', 'Birds', 'Child', 'Fox', 'Bear', 'Stars', 'Stork', 'Dog', 'Tower', 'Garden', 'Mountain', 'Crossroads', 'Mice', 'Heart', 'Ring', 'Book', 'Letter', 'Man', 'Woman', 'Lily', 'Sun', 'Moon', 'Key', 'Fish', 'Anchor', 'Cross'],
    position: ['Upright', 'Reversed']
};

const generatedFortune = [];

// Generate a three card pull with position (upright/reversed for each card)
const generateFortune = () => {
  
}