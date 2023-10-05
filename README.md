# Full-Stack React-Node App

This is a full-stack application with a React frontend and Node.js/Express.js backend. The app includes user authentication, registration, and a user dashboard with filters.

## Frontend (React)

### Features:

- **User Login:** Implemented user login functionality.
- **User Registration:** Users can register with the system.
- **User Dashboard:** Displays user information with filtering options.
- **Filters in User Dashboard:**
  - Date
  - Sorting
  - Department
- **Integration with Backend APIs:** Communicates with the Node.js/Express.js backend.

### Technologies Used:

- React
- Redux (for state management)
- Axios (for API requests)
- Tailwind CSS (for styling)

## Backend (Node.js/Express.js)

### Features:

- **Object-Oriented Programming (OOPS):** Implemented OOP principles in the backend design.
- **User Login API:** Allows users to log in with proper authentication.
- **User Registration API:** Enables new users to register.
- **Get All Users API:** Includes parameters for filtering.
- **JWT Token Authentication:** Uses JWT tokens for secure authentication.
- **Integration with Swagger:** API documentation with Swagger for easy testing and understanding.

### Technologies Used:

- Node.js
- Express.js
- MySQL (as the database)
- JWT (for authentication)
- Swagger (for API documentation)

## How to Run the App:

### Frontend:

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React app.

### Backend:

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the Node.js server.

## Setup Environment Variables

Create a `.env` file in the root of backend directory with the following contents(change suitable fields):

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=mern_test
JWT_SECRET=MySecretKeyWithNumbers123


 
