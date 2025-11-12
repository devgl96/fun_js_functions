# Fun JS Functions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of fun and useful JavaScript functions. This is an open-source project, and contributions are welcome!

## Features

- **Simple Web Interface:** A clean and intuitive web interface to use the functions.
- **Dark Mode:** A comfortable dark mode for those late-night coding sessions.
- **Syntax Highlighting:** The output is beautifully formatted with syntax highlighting.
- **Easy to Contribute:** A simple process for adding new functions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You'll need a modern web browser like Chrome, Firefox, or Safari.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/devgl96/fun_js_functions.git
    ```
2.  Navigate to the project directory
    ```sh
    cd fun_js_functions
    ```
3.  Open `index.html` in your browser.

## How to Use

This project provides a simple web interface to use the functions.

1.  Open the `index.html` file in your web browser.
2.  Select a function from the dropdown menu.
3.  Paste your JSON input into the text area on the left.
4.  Click the "Convert" button.
5.  The result will be displayed in the box on the right.

## Available Functions

### `jsonToSQLUnion(data)`

This function converts an array of JSON objects into a SQL query with `UNION` clauses. It's useful for generating test data or for bulk inserts where `UNION` is applicable.

**Input (JSON):**

```json
[
  { "name": "John Doe", "age": 30 },
  { "name": "Jane Smith", "age": 25, "city": "New York" }
]
```

**Output (SQL):**

```sql
SELECT 'John Doe' AS name, 30 AS age, NULL AS city
UNION
SELECT 'Jane Smith', 25, 'New York';
```

### `paramsToSQLSet(data)`

This function converts a JSON object into a series of SQL `SET` statements. This is useful for setting variables in a SQL script from a configuration object.

**Input (JSON):**

```json
{
  "id": 1,
  "user": "testuser",
  "filter": "active"
}
```

**Output (SQL):**

```sql
SET @id = 1;
SET @user = 'testuser';
SET @filter = 'active';
```

## How to Contribute

We'd love for you to contribute to our project! Here's how you can help:

1.  **Fork the repository:** Start by forking the [main repository](https://github.com/devgl96/fun_js_functions).
2.  **Clone your fork:** Clone your forked repository to your local machine.
3.  **Create a new branch:** Create a new branch for your feature or bug fix.
4.  **Add your function:**
    - Create a new `.js` file for your new function (e.g., `myNewFunction.js`). The file should contain only your function.
    - In `main.js`, add the name of your function to the `availableFunctions` array.
    - In `index.html`, add a `<script>` tag for your new function file before the `main.js` script tag.
5.  **Test your function:** Open `index.html` and test your new function to make sure it works as expected.
6.  **Submit a pull request:** Once you're happy with your changes, submit a pull request to the main repository.

We appreciate your help in making this a great collection of functions!

## Technologies Used

- [Tailwind CSS](https://tailwindcss.com/)
- [highlight.js](https://highlightjs.org/)
- [Google Fonts](https://fonts.google.com/)
- [Material Symbols](https://fonts.google.com/icons)

## License

Distributed under the MIT License. See `LICENSE` for more information.
