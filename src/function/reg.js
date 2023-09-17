
    const form = document.querySelector('form');
const nameInputs = document.querySelectorAll('.name');
const mail = document.querySelector('.mail');

form.addEventListener('submit', event => {
  event.preventDefault();

  let isValid = true;

  nameInputs.forEach(input => {
    if (!input.value.trim() || !/^[а-яА-ЯїЇіІєЄ\s\-']+$/.test(input.value)) {
      input.classList.add('invalid');
      isValid = false;
    } else {
      input.classList.remove('invalid');
    }
  });

  if (isValid) {
    nameInputs.forEach(input => {
      localStorage.setItem('name', input.value);
    });
    localStorage.setItem('mail', mail.value);

    form.submit();
  }
});

