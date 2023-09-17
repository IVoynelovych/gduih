const faqItems = document.querySelectorAll('.faq_list_item');
faqItems.forEach(item => {
  let isExpanded = false;
  item.addEventListener('click', () => {
    const answerElement = item.querySelector('.faq_list_item_answer');
    if (isExpanded) {
      answerElement.style.opacity = '0';
      answerElement.style.height = '0';
    } else {
      answerElement.style.opacity = '1';
      answerElement.style.height = 'auto';
    }
    isExpanded = !isExpanded;
  });
});
