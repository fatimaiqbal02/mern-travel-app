# MERN Travel App

A full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack, designed to allow users to browse, discover, and book amazing tours.

## Features

*   **Tour Browsing:** Users can browse available tours with detailed information, including descriptions, itineraries, images, and pricing.
*   **Search and Filtering:** Robust search and filtering options to help users find the perfect tour based on destination, price, duration, and other criteria.
*   **Featured Tours:** Highlighted featured tours to showcase popular or special offerings.
*   **User Authentication:** Secure user accounts with registration, login, and profile management.
*   **Booking System:** Seamless booking process for users to reserve their desired tours.
*   **Admin Panel:** A dedicated admin panel for managing tours, bookings, users, and other application settings.
*   **Responsive Design:** Fully responsive design for optimal viewing on various devices (desktops, tablets, and mobile phones).

## Technologies Used

*   **Frontend:** React, HTML, CSS, JavaScript
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB

## Installation

1.  Clone the repository:

    ```bash
    git clone git@github.com:fatimaiqbal02/mern-travel-app.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd mern-travel-app
    ```

3.  Install backend dependencies:

    ```bash
    cd server
    ```

4.  Install frontend dependencies:

    ```bash
    cd client
    npm install
    ```

5.  Create a `.env` file in both the `backend` and `frontend` directories and configure the environment variables (see `.env.example` for reference).

6. Start the backend server:

    ```bash
    cd ../server
    npm start
    ```

7. Start the frontend development server:

    ```bash
    cd ../client
    npm start
    ```

## Environment Variables

*   **Backend (`backend/.env`):**
    *   `MONGODB_URI`: The connection string for your MongoDB database.
    *   `JWT_SECRET_kEY`: A secret key for JWT (JSON Web Token) authentication.
    *   `PORT_NO`: Backend Port no
    *   See .env.template


## Usage

*   **User:** Visit the website in your browser to browse tours, create an account, and make bookings.
*   **Admin:** Access the admin panel to manage the application (future work).
