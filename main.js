document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll();
  const functionSelect = document.getElementById('function-select');
  const inputArea = document.getElementById('input-area');
  const convertBtn = document.getElementById('convert-btn');
  const outputArea = document.getElementById('output-area');

  const availableFunctions = [
    'jsonToSQLUnion',
    'paramsToSQLSet'
  ];

  availableFunctions.forEach(funcName => {
    const option = document.createElement('option');
    option.value = funcName;

    const displayName = funcName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    option.textContent = displayName.replace(/SQL/g, 'SQL');
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
      const parsedInput = JSON.parse(inputData);

      const selectedFunction = window[selectedFunctionName];

      if (typeof selectedFunction === 'function') {
        const result = selectedFunction(parsedInput);
        resultHTML = hljs.highlight(result, { language: 'sql' }).value;

        outputArea.innerHTML = resultHTML;
      } else {
        outputArea.textContent = `Error: Function '${selectedFunctionName}' not found.`;
      }

    } catch (error) {
      outputArea.textContent = `Error: ${error.message}`;
    }
  });
});
