# Contributing to Bloxstrap

First off, thank you for considering contributing to Bloxstrap! It's people like you that make Bloxstrap such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/NexusAI-lovable/Bloxstrap/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Bloxstrap version, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/NexusAI-lovable/Bloxstrap/issues). When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the [Styleguides](#styleguides)
* Include appropriate test cases
* Update documentation accordingly
* End all files with a newline

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🚀 `:rocket:` when improving performance
  * 📝 `:memo:` when writing docs
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when introducing new features
  * 🧪 `:test_tube:` when adding tests
  * 🔒 `:lock:` when dealing with security
  * ⬆️ `:arrow_up:` when upgrading dependencies

### Lua Code Style

```lua
-- Use camelCase for variables and functions
local myVariable = "value"
local function myFunction()
    -- implementation
end

-- Use descriptive names
local playerCount = 0
local isGameActive = true

-- Add comments for complex logic
-- This validates the player's input before processing
if validateInput(input) then
    processInput(input)
end

-- Use consistent indentation (4 spaces)
if condition then
    -- code here
    if nested then
        -- nested code
    end
end
```

### TypeScript Code Style

```typescript
// Use PascalCase for classes and interfaces
class GameManager {
    private playerCount: number = 0;
    
    public startGame(): void {
        this.playerCount = 0;
    }
}

// Use camelCase for variables and functions
const myVariable: string = "value";

function myFunction(param: string): boolean {
    return true;
}

// Use explicit types
const numbers: number[] = [1, 2, 3];
const config: Record<string, unknown> = {};
```

### Documentation

* Use clear, concise language
* Include code examples where appropriate
* Keep line length to 100 characters
* Use proper Markdown formatting
* Proofread before submitting

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Bloxstrap.git
   cd Bloxstrap
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Make your changes**
   - Write your code
   - Add tests if applicable
   - Update documentation

5. **Run tests**
   ```bash
   npm test
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "✨ Add amazing feature"
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Fill in the PR template

## Development Setup

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0
- Git >= 2.20.0

### Installation

```bash
# Clone repository
git clone https://github.com/NexusAI-lovable/Bloxstrap.git
cd Bloxstrap

# Install dependencies
npm install

# Start development server
npm run dev
```

### Useful Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Build for production
npm run build

# Generate documentation
npm run docs

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Testing

We use [Jest](https://jestjs.io/) for testing. Please write tests for:
- New features
- Bug fixes
- Edge cases

### Test File Naming

- Test files should be named `*.test.ts` or `*.spec.ts`
- Place them in the `tests/` directory
- Mirror the source structure

### Example Test

```typescript
import { describe, it, expect } from "@jest/globals";
import { StateManager } from "../src/StateManager";

describe("StateManager", () => {
    it("should create a new state", () => {
        const manager = new StateManager();
        const state = manager.createState({ count: 0 });
        
        expect(state.get()).toEqual({ count: 0 });
    });
    
    it("should update state", () => {
        const manager = new StateManager();
        const state = manager.createState({ count: 0 });
        
        state.setState({ count: 1 });
        expect(state.get()).toEqual({ count: 1 });
    });
});
```

## Pull Request Process

1. Update the [CHANGELOG.md](CHANGELOG.md) with notes on your changes
2. Update the [README.md](README.md) if appropriate
3. Ensure all tests pass: `npm test`
4. Ensure no linting errors: `npm run lint`
5. Ensure code is formatted: `npm run format`
6. Update documentation if needed
7. The PR must be approved by at least one maintainer

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

### Review Process

1. Maintainers will review your PR
2. Changes might be requested
3. Once approved, your PR will be merged
4. Your contribution will be credited in the next release

## Recognition

Contributors will be recognized in:
- The [CONTRIBUTORS.md](CONTRIBUTORS.md) file
- Release notes for their contributions
- The repository README

## Questions?

Don't hesitate to ask! You can:
- Open a [GitHub Discussion](https://github.com/NexusAI-lovable/Bloxstrap/discussions)
- Join our [Discord](https://discord.gg/bloxstrap)
- Email us at support@bloxstrap.dev

Thank you for contributing to Bloxstrap! 🎉
