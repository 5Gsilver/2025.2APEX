# 2025.2APEX

A modern React application built with Vite, TypeScript, and comprehensive development tooling.

## 🚀 Features

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 19** - Latest React version with TypeScript
- 🎨 **ESLint & Prettier** - Code linting and formatting
- 🧪 **Vitest & React Testing Library** - Modern testing setup
- 🪝 **Husky & lint-staged** - Pre-commit hooks
- 🔄 **GitHub Actions** - Automated CI/CD pipeline
- 📦 **TypeScript** - Type safety

## 📋 Prerequisites

- Node.js 18.x or 20.x
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd 2025.2APEX
```

2. Install dependencies:

```bash
npm install
```

3. Set up Git hooks:

```bash
npm run prepare
```

## 🚀 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building

Build the project for production:

```bash
npm run build
```

The built files will be output to the `dist` directory.

## 🧪 Testing

This project uses **Vitest** and **React Testing Library** for testing.

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test -- --run

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Test Structure

- Test files should be placed alongside the components they test
- Use `.test.tsx` or `.spec.tsx` extensions
- Global test setup is in `src/test/setup.ts`

## 🎨 Code Quality

### ESLint

ESLint is configured with TypeScript and React-specific rules:

```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix auto-fixable issues
```

### Prettier

Prettier is configured for consistent code formatting:

```bash
npm run format       # Format all files
npm run format:check # Check formatting
```

### Pre-commit Hooks

Husky and lint-staged are configured to run checks before commits:

- Lint and format staged files
- Run tests
- Ensure code quality before commits

## 📝 Git Workflow

### Branch Naming Convention

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Message Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**

```
feat(auth): add user authentication
fix(header): resolve mobile navigation issue
docs(readme): update installation instructions
test(utils): add unit tests for helper functions
```

### Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Commit with conventional commit messages
4. Push to your branch
5. Create a Pull Request
6. Wait for CI checks to pass
7. Request code review
8. Merge after approval

## 🔄 CI/CD

GitHub Actions workflow automatically:

- Runs on Node.js 18.x and 20.x
- Checks code formatting with Prettier
- Runs ESLint
- Executes all tests
- Builds the project
- Generates coverage reports

The workflow runs on:

- Push to `main` and `develop` branches
- Pull requests to `main` and `develop` branches

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── .husky/                 # Git hooks
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── test/
│   │   └── setup.ts       # Test configuration
│   ├── App.tsx            # Main App component
│   ├── App.test.tsx       # App component tests
│   └── main.tsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository.
