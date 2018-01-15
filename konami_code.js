const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let userKeyPress = [];
function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')

body.addEventListener('keydown', function(e) {
  console.log('which ', e.which);
  console.log('location ', e.location);
  console.log('detail ', e.which);
  userKeyPress.push(e.which);
  console.log(userKeyPress);
});
}
