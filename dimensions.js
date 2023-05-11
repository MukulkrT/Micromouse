const rowsize = document.getElementById('rowsize');
const colsize = document.getElementById('colsize');
const submitButton = document.getElementById('dimension-submit');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function () {
      // Get the value of the input field
      const rowsizeValue = rowsize.value;
      const colsizeValue = colsize.value;

      // Store the input value in localStorage
      localStorage.setItem('rowsize', rowsizeValue);
      localStorage.setItem('colsize', colsizeValue);
      console.log("rowsize: " + rowsizeValue + " colsize: " + colsizeValue);
      if (rowsizeValue * colsizeValue >= 2) { window.location.reload(); }
      else alert("Minimum 2 cells are required to start the game!");
});