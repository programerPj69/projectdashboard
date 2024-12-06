document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card button');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert(`You clicked on ${button.parentElement.querySelector('h2').innerText}`);
      });
    });
  });
  