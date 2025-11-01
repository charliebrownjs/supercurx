# React Google Login Flow

This is a simple React application that demonstrates how to implement a Google login flow using Google Identity Services.

## About the Project

This project was built with Vite and TypeScript. It includes a simple authentication flow where users can log in with their Google account. After logging in, the user's name, email, and profile picture are displayed on the home page.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root of the project and add your Google Client ID.
   ```
   GEMINI_API_KEY=YOUR_API_KEY
   ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Dependencies

*   **react:** A JavaScript library for building user interfaces.
*   **react-dom:** Serves as the entry point to the DOM and server renderers for React.
*   **vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
*   **typescript:** A typed superset of JavaScript that compiles to plain JavaScript.

## Available Scripts

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally.
