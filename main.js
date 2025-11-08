document.addEventListener('DOMContentLoaded', () => {
  const functionSelect = document.getElementById('function-select');
  const inputArea = document.getElementById('input-area');
  const convertBtn = document.getElementById('convert-btn');
  const outputArea = document.getElementById('output-area');

  // "Smart" list of functions. To add a new function, add its name here
  // and include the script in index.html.
  const availableFunctions = [
    'jsonToSQLUnion',
    'paramsToSQLSet'
  ];

  // Populate the dropdown
  availableFunctions.forEach(funcName => {
    const option = document.createElement('option');
    option.value = funcName;
    // A simple way to format the name for display
    const displayName = funcName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    option.textContent = displayName.replace(/SQL/g, 'SQL'); // Keep SQL in uppercase
    functionSelect.appendChild(option);
  });


  convertBtn.addEventListener('click', () => {
    const selectedFunctionName = functionSelect.value;
    const inputData = inputArea.value;

    if (!selectedFunctionName || !inputData) {
      outputArea.textContent = 'Please select a function and provide input.';
      return;
    }

    try {
      // The input is expected to be a JSON string, so we need to parse it.
      const parsedInput = JSON.parse(inputData);

      // Get the function from the window object
      const selectedFunction = window[selectedFunctionName];

      if (typeof selectedFunction === 'function') {
        const result = selectedFunction(parsedInput);
        outputArea.textContent = result;
      } else {
        outputArea.textContent = `Error: Function '${selectedFunctionName}' not found.`;
      }

    } catch (error) {
      outputArea.textContent = `Error: ${error.message}`;
    }
  });
});
