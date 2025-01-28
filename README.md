# UCalgary Design system

Welcome to the Ucalgary Design system monorepo! This repository contains a collection of reusable web components designed to enhance and standardize the user experience across the UCalgary web landscape.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Development](#development)
    - [Generating a New Component](#generating-a-new-component)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

To get started, clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/mgbauman/ucalgary-design-system.git

# Navigate to the project directory
cd ucalgary-design-system

# Install dependencies
npm install
```

---

## Features

- **Reusable Components:** A library of well-tested and standardized web components.
- **Custom Design Tokens:** Powered by [Style Dictionary](https://amzn.github.io/style-dictionary) to ensure consistency in design.
- **Modern Tooling:** Includes Storybook for documentation, ESLint for linting, and Web Test Runner for testing.
- **Monorepo Structure:** All components and shared utilities are managed in a single repository.

---

## Development

### Generating a New Component

To create a new web component, run the following command:

```bash
npm run generate
```

You will be prompted to provide the name of the new component. This will scaffold the necessary files and folder structure for the component in the appropriate package directory.

### Example Workflow

1. Generate a new component:
   ```bash
   npm run generate
   ```
   Provide a unique name for your component when prompted. Don't include the 'ucds' prefix as it will be appended.

2. Implement the component logic and styles in the generated files.

3. Add your component to Storybook for documentation:
   ```bash
   npm run storybook
   ```

4. Write tests and run them using Web Test Runner to ensure quality.

   Make sure you build your component before testing it. Either change to the directory of the new component and run:
    ```bash
   npm run build 
   ```
   Or you can run it from the monorepo root:
   ```bash
   npm run build -w @ucalgary-design-system/<your-component-name-here>
   ```
   
   Run the tests for your new component similar to how you built your component. Either from the component directory:
    ```bash
   npm run test 
   ```
   Or you can run it from the monorepo root:
   ```bash
   npm run test -w @ucalgary-design-system/<your-component-name-here>
   ```

5. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add <component-name>"
   git push
   ```

---

## Scripts


Here is a list of available npm scripts:

- **`npm run generate`**: Scaffold a new web component.
- **`npm run generate`**: Scaffold a new web component.
- **`npm run storybook`**: Start the Storybook server to view and document components.
- **`npm run build`**: Build the components for production.
- **`npm run dev`**: Start and open Vite dev server.
- **`npm run lint`**: Run ESLint to analyze code for errors and enforce coding standards.
- **`npm run format`**: Run ESLint with the --fix flag and prettier with the --write flag.
- **`npm run test`**: Run tests for all components using Web Test Runner.
- **`npm run chromatic`**: Deploy Storybook to Chromatic.

---

## License

This project is licensed under the [MIT License](LICENSE).
