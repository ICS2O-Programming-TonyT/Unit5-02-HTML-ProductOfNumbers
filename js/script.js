
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let number = parseInt(document.getElementById('Number').value);
  let addition = 0;
  const multiply = parseInt(document.getElementById('Multiply').value);
  function product() {
    if (Math.sign(multiply) == 1) {
      for (let counting = 1; counting <= multiply; counting++) {
        addition = addition+number;
      }
      return addition
    } else if (Math.sign(multiply) == -1) {
      for (let counting = -1; counting >= multiply; counting--) {
        addition = addition-number;
      }
      return addition
    }
  }
  resultDiv.innerHTML = `The Product of ${number} x ${multiply} = ${product()}`
});
