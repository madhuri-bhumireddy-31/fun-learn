const words = {
  a: "Apple<br>🍎",
  b: "Ball<br>🏀",
  c: "Cat<br>🐱",
  d: "Dog<br>🐶",
  e: "Elephant<br>🐘",
  f: "Fish<br>🐟",
  g: "Grapes<br>🍇",
  h: "House<br>🏠",
  i: "Ice cream<br>🍦",
  j: "Juice<br>🧃",
  k: "Kite<br>🪁",
  l: "Lion<br>🦁",
  m: "Moon<br>🌙",
  n: "Nest<br>🪹",
  o: "Orange<br>🍊",
  p: "Parrot<br>🦜",
  q: "Queen<br>👑",
  r: "Rainbow<br>🌈",
  s: "Sun<br>🌞",
  t: "Tree<br>🌳",
  u: "Umbrella<br>☂️",
  v: "Violin<br>🎻",
  w: "Whale<br>🐳",
  x: "Xylophone<br>🎶",
  y: "Yacht<br>⛵",
  z: "Zebra<br>🦓"
  };

  // Loop through all letters and add hover event
  for (let letter in words) {
    let element = document.getElementById(letter);
    element.addEventListener("mouseover", () => {
      element.innerHTML = words[letter];
    });
    element.addEventListener("mouseout", () => {
      element.innerHTML = letter.toUpperCase();
    });
  }