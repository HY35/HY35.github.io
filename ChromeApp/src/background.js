//Background Colors

const colors = [
    "#ef5777","#575fcf", "#4bcffa","#34e7e4","#0be881","#f53b57","#3c40c6","#0fbcf9","#00d8d6","#05c46b",
    "#ffc048","#ffdd59","#ff5e57","#d2dae2","#485460","#ffa801","#ffd32a","#ff3f34"
  ];
  
  
  const colorMix = document.getElementById("colorMix");
  
  function getRandomColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
  }
  
  function setRandomGradient() {

    let color1, color2;
  
    do {
      color1 = getRandomColor();
      color2 = getRandomColor();
    } while (color1 === color2);
  
    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    colorMix.style.background = gradient;
  }
  
  setRandomGradient();
  