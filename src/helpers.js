export function generateRandomProject(array) {
  const numOfOptions = array.length;
  const id = Math.floor(Math.random() * numOfOptions);
  return array[id].slug;
}
