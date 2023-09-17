let isUserActive = true;
let timeout;
let close; 
function closeIfAn() {
  if(!isUserActive){
    window.close()
  }
  close = setTimeout(closeIfAn, 70000);
}
function checkUserActivity() {
  if (!isUserActive) {
    const response = confirm('Ви ще тут?');
  }
  isUserActive = false;

  timeout = setTimeout(checkUserActivity, 60000);
}
closeIfAn()
checkUserActivity();
document.addEventListener('mousemove', () => {
  isUserActive = true;
});
document.addEventListener('keydown', () => {
  isUserActive = true;
});
document.addEventListener('scroll', () => {
  isUserActive = true;
});
