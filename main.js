// change randomly the background image of the body

const images = [
  "https://picsum.photos/id/54/1640/1200",
  "https://picsum.photos/id/66/1640/1200",
  "https://picsum.photos/id/71/1640/1200",
  "https://picsum.photos/id/78/1640/1200",
  "https://picsum.photos/id/101/1640/1200",
  "https://picsum.photos/id/166/1640/1200",
  "images/back-big-device.jpg",
];

changeBackground(document.getElementsByTagName("body")[0], images);

function changeBackground(element, images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  element.style.backgroundImage = `url('${images[randomIndex]}')`;
}