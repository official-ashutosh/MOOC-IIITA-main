# MOOC-IIITA

A modern, full-stack web application for managing and delivering online courses, built for IIITA. This project features a robust backend (Node.js/Express/MongoDB) and a responsive frontend (React, Vite, Bootstrap), supporting user authentication, course enrollment, payment, and admin/instructor dashboards.

## Features

- **User Authentication**: Secure JWT-based login and registration for students, instructors, and admins.
- **Course Management**: Browse, enroll, and manage courses. Instructors can create and update courses, lessons, and documents.
- **Cart & Checkout**: Add courses to cart, view order details, and complete payment (simulated with PayPal/MoMo).
- **Admin Dashboard**: View revenue statistics, manage users, courses, and feedback.
- **Instructor Dashboard**: Manage own courses, lessons, and student enrollments.
- **Student Dashboard**: View enrolled courses, download documents, and track progress.
- **Reviews & Comments**: Students can review courses and leave comments.
- **Responsive UI**: Modern, mobile-friendly design using React Bootstrap and custom styles.

## Tech Stack

- **Frontend**: React, Vite, React Bootstrap, React Router, React Context API
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Styling**: Bootstrap, custom CSS
- **Other**: Cloudinary (for image uploads), Toastify (notifications)

## Project Structure

```text
MOOC-IIITA-main-1/
├── client/                # Frontend React app
│   ├── src/
│   │   ├── Components/    # Reusable UI components
│   │   ├── contexts/      # React Context providers
│   │   ├── pages/         # Page components (students, admin, instructor)
│   │   ├── services/      # API service functions
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── controllers/           # Express route controllers
├── middlewares/           # Express middlewares (auth, etc.)
├── models/                # Mongoose models
├── routes/                # Express route definitions
├── utils/                 # Utility functions (e.g., Cloudinary)
├── server.js              # Express app entry point
├── package.json           # Backend dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository

```sh
git clone https://github.com/official-ashutosh/MOOC-IIITA-main
```

### 2. Backend Setup

```sh
npm install
```

- Copy `.env.example` to `.env` and set the required values:

```env
SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
CLOUD_NAME=your_cloudinary_name
CLOUD_KEY=your_cloudinary_key
CLOUD_SECRET=your_cloudinary_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

- Start the backend server:

```sh
npm run dev
```

### 3. Frontend Setup

```sh
cd client
npm install
npm run dev
```

- The frontend will run on `http://localhost:5173` (default Vite port).

### 4. Access the App

- Open your browser at `http://localhost:5173`
- Register as a student, instructor, or admin (admin accounts may need to be seeded manually in the database).

## Usage

- **Students**: Register/login, browse courses, add to cart, checkout, and access enrolled courses.
- **Instructors**: Login, create/manage courses, upload lessons and documents.
- **Admins**: Login, view statistics, manage users/courses, and review feedback.

## Customization

- Update branding images in `client/images/` and `client/public/`.
- Modify styles in `client/src/styles/` and `client/src/App.css`.
- Add new payment methods or integrations in backend and frontend services.

## Scripts

- `npm run dev` — Start backend in development mode
- `npm start` — Start backend in production mode
- `cd client && npm run dev` — Start frontend

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

## Credits

- Project by IIITA MOOC Team
- UI/UX: React Bootstrap, custom design
- Special thanks to all contributors and open-source libraries used.

