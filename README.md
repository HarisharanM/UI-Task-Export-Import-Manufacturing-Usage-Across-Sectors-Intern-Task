Export-Import & Manufacturing Sector Showcase
A responsive, login-first web application built as an internship project for WhiteCircle Group. This project demonstrates key web development concepts by creating a secure portal where users can explore various industry sectors after authentication.

📍 Live Demo
View the live project here

✨ Key Features
🔐 Secure Login-First Architecture: The entire site is protected. Unauthenticated users are automatically redirected to a dedicated login/signup page.

👤 User Authentication & Session Management:

Sign Up: New users can create an account, with their credentials stored in the browser's localStorage.

Login: Registered users can log in. A successful login creates a session flag in sessionStorage.

Logout: The session can be terminated via a "Logout" button, which clears the session flag and redirects the user to the login page.

🚀 Interactive Sector Showcase: The "Services" page features a dynamic grid of 14 industry sectors.

📋 Detailed Modals: Clicking a sector button opens an informative modal displaying sample import/export products, complete with cloud-hosted images and prices.

📱 Fully Responsive UI: The layout is built with modern CSS (Flexbox and Grid), ensuring a seamless experience on desktops, tablets, and mobile devices.

🛠️ Tech Stack
HTML5: For the structure and semantic content of the web pages.

CSS3: For all styling, including a dynamic gradient background, responsive layouts, and modal animations.

Vanilla JavaScript (ES6): For all client-side logic, including:

The authentication "gatekeeper" flow.

DOM manipulation for the interactive modals.

Handling user events and form submissions.

Managing localStorage (for user persistence) and sessionStorage (for session state).

🚀 Getting Started
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

Navigate to the project directory:

cd YOUR_REPOSITORY

Open the application:
Open the login.html file in your preferred web browser (e.g., Chrome, Firefox). This is the designated starting point for the application.

🧠 Core Logic: The Login Gatekeeper
The security of the site is managed by a simple yet effective "gatekeeper" function at the top of the script.js file.

When any page loads, the script immediately checks for an isLoggedIn flag in the browser's sessionStorage.

If the flag is not found and the user is trying to access any page other than login.html, the script redirects them to login.html.

If the flag is found, the script allows the page content to become visible by removing a default display: none style from the <body>.

This sessionStorage flag is only set upon a successful login and is cleared when the user logs out or closes the browser tab, ensuring that each session requires a fresh login.

👤 Author
Harisharan Mishra
