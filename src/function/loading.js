const loader = document.querySelector('.loader');
document.body.style.overflow = 'hidden';
loader.style.display = 'block';

setTimeout(() => {
  document.body.style.overflow = '';
  loader.style.display = 'none';
}, 5000); 
