#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COMPONENTS_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), '../packages/components');

function toKebabCase(string) {
  return string
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();
}

function createComponentFiles(componentName) {
  const kebabName = toKebabCase(componentName);
  const componentDir = path.join(COMPONENTS_DIR, kebabName);

  if (fs.existsSync(componentDir)) {
    console.error(`Error: Component directory \"${componentDir}\" already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(componentDir, { recursive: true });

  const storiesDir = path.join(componentDir, 'stories');
  fs.mkdirSync(storiesDir, { recursive: true });

  const testDir = path.join(componentDir, 'test');
  fs.mkdirSync(testDir, { recursive: true });

  const srcDir = path.join(componentDir, 'src');
  fs.mkdirSync(srcDir, { recursive: true });

  // Template files
  const templates = {
    ts: `import { html, css, unsafeCSS } from 'lit';
import {customElement} from 'lit/decorators.js';
import {BaseElement} from '@ucalgary-design-system/core/BaseElement.js';
import "@ucalgary-design-system/tokens/dist/css/_variables.css";
import styles from "./${kebabName}.css?inline";

@customElement('ucds-${kebabName}')
export class ${componentName} extends BaseElement {
  static styles = [
    BaseElement.styles,  
    css\`
      /* Add styles here */
    \`,
    /* https://lit.dev/docs/api/styles/#unsafeCSS */
    unsafeCSS(styles)
  ];

  render() {
    return html\`
      <div>
        <p>${componentName} works!</p>
      </div>
    \`;
  }
}
`,
    test: `/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from '@open-wc/testing';
import '../${kebabName}.js';

describe('${componentName}', () => {
  it('renders properly', async () => {
    const el = await fixture(html\`<ucds-${kebabName}></ucds-${kebabName}>\`);
    expect(el).shadowDom.to.equal('<div><p>${componentName} works!</p></div>');
  });
});
`,
    story: `import '../${kebabName}.js';

export default {
  title: '${componentName}',
};

export const Default = () => \`<ucds-${kebabName}></ucds-${kebabName}>\`;
`,
    packageJson: `{
  "name": "@ucalgary-design-system/${kebabName}",
  "version": "1.0.0",
  "description": "A web component for ${componentName}",
  "type": "module",
  "main": "dist/index.js",
  "dependencies": {
    "@ucalgary-design-system/core": "*",
    "@ucalgary-design-system/tokens": "*",
    "lit": "^3.2.1"
  },
  "devDependencies": {
    "@open-wc/testing": "^4.0.0",
    "@ucalgary-design-system/tooling-config": "*"
  },
  "scripts": {
    "build": "vite build",
    "test": "web-test-runner --config web-test-runner.config.js"
  },
  "files": [
    "dist/",
    "package.json",
    "README.md"
  ]
}
`,
    viteConfig: `import { viteConfig } from "@ucalgary-design-system/tooling-config";

export default {
  ...viteConfig,
};
`,
    testConfig: `import { testingConfig } from "@ucalgary-design-system/tooling-config";

export default {
  ...testingConfig,
};
`,
    indexTs: `export * from '../${kebabName}.js';
`,
    readme: `# ${componentName}

This package provides the **${componentName}** web component.

## Installation

Install the component using npm:

\`\`\`sh
npm install @ucalgary-design-system/${kebabName}
\`\`\`

## Usage

Import the component into your application:

\`\`\`ts
import '@ucalgary-design-system/${kebabName}';
\`\`\`

Use the component in your HTML:

\`\`\`html
<ucds-${kebabName}></ucds-${kebabName}>
\`\`\`

## Development

Build the component:

\`\`\`sh
npm run build
\`\`\`

Alternatively, build from the monorepo root:

\`\`\`sh
npm run build -w @ucalgary-design-system/ucds-${kebabName}
\`\`\` 

Run storybook from the monorepo root.

## Testing

Run the test from this package:

\`\`\`sh
npm run test
\`\`\`

Alternatively, run the tests from the monorepo root:

\`\`\`sh
npm run test -w @ucalgary-design-system/ucds-${kebabName}
\`\`\` 


`,
    css: `/* Styles for ${componentName} */
:host {
  display: block;
}`,
    tsconfig: `{
  "extends": "@ucalgary-design-system/tooling-config/tsconfig.json",
  "compilerOptions": {
    /* These need to be redefined here so the esbuild plugin (used for testing) can pick them */
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}`,
  };

  // Write files
  fs.writeFileSync(path.join(componentDir, `${kebabName}.ts`), templates.ts);
  fs.writeFileSync(path.join(componentDir, `${kebabName}.css`), templates.css);
  fs.writeFileSync(path.join(componentDir, 'tsconfig.json'), templates.tsconfig);
  fs.writeFileSync(path.join(testDir, `${kebabName}.test.ts`), templates.test);
  fs.writeFileSync(path.join(storiesDir, `${kebabName}.stories.ts`), templates.story);
  fs.writeFileSync(path.join(componentDir, 'package.json'), templates.packageJson);
  fs.writeFileSync(path.join(componentDir, 'vite.config.js'), templates.viteConfig);
  fs.writeFileSync(path.join(componentDir, 'web-test-runner.config.js'), templates.testConfig);
  fs.writeFileSync(path.join(srcDir, 'index.ts'), templates.indexTs);
  fs.writeFileSync(path.join(componentDir, 'README.md'), templates.readme);

  console.log(`Component \"${componentName}\" created successfully at ${componentDir}`);
}

rl.question('Enter the name of the new component (e.g., MyComponent): ', (name) => {
  if (!name) {
    console.error('Error: Component name cannot be empty.');
    rl.close();
    process.exit(1);
  }

  createComponentFiles(name);
  rl.close();
});
