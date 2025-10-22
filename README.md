# MEDIN - Real Estate Application

[Live Demo](https://medin-real-estate.web.app/)

## Overview

MEDIN is a React-based real estate application designed to showcase hospital-related property information. The platform offers a variety of user features, including registration, profile management, and viewing property details. Users can register with Google, GitHub, or email/password to access private routes and manage their profiles.

### Features:

1. **Home Page**: Displays a list of hospital-related property information along with a navigation bar, banner, and other relevant details.

2. **Navbar**: 
   - The navbar consists of two sections:
     - A middle section for easy navigation to other pages.
     - A circle button at the end that shows additional options. When hovered, the button displays the logged-in user's name.
   - If the user is logged in, two extra options appear in the navbar.

3. **Private Routes**:
   - **Login/Logout**: The user can log in or log out.
   - **Private Route Section**: Accessible only to registered users.
   - The private route features are available once the user is logged in.

4. **Property Cards**: 
   - The home page features cards representing properties. To view full details, users need to click on the "View Property" button.
   - To access more detailed property information, users must be registered.

5. **About Page**: 
   - A static route providing more information about the platform.

6. **Contact Us Page**: 
   - This page currently returns a 404 error (Page Not Found).

7. **Register Page**: 
   - Users can register using Google, GitHub, or email/password. 
   - For email/password registration, users must fill in their name and photo URL.

8. **Profile Route**: 
   - After registration, users can view their personal details in their profile.

9. **Update Profile Route**: 
   - Users can update their name, photo, and email on the update profile page.

---

## Technologies Used:

- **React**: Frontend framework for building the UI.
- **Vite**: Build tool for faster development and HMR (Hot Module Replacement).
- **Firebase**: For user authentication and data management.
- **ESLint**: For maintaining consistent code quality.

---

## Setup Instructions:

To run the project locally, follow these steps:

### Prerequisites:
- Node.js (version 14 or higher)
- npm or yarn

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medin.git
   cd medin
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser:

http://localhost:3000