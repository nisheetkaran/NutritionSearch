# Nutrition Search Application

A web application that allows users to search for nutritional information about various food items. The backend is built with Node.js, Express, and MongoDB, leveraging the Nutritionix API to fetch and display nutritional data. The frontend is developed using ReactJS, offering a streamlined user experience for conducting searches and viewing results.

## Features

### Backend

- **NodeJS, Express, and MongoDB**: The server-side logic is implemented with Node.js and Express, storing data in MongoDB.
- **API Endpoint**: Accepts a food item name as a parameter and queries the Nutritionix API for nutritional information.
- **Nutritionix API Integration**: Searches for the food item and retrieves the top 5 results, including their calorie content.
- **Caching Mechanism**: Search results are cached in MongoDB to minimize redundant API requests for the same search query.
- **Optimization**: Returns cached data for repeated searches to enhance performance and reduce load on the Nutritionix API.

### Frontend

- **ReactJS**: The client-side interface is built with ReactJS for dynamic content rendering.
- **Search Functionality**: Includes an input field for users to search for food items by name.
- **Results Display**: Search results are presented in a table, listing matching food items and their caloric values.
- **Styling**: Utilizes a styling library to improve aesthetics beyond basic HTML, making the interface more engaging.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB running locally

## Installation

Follow these steps to set up the project environment and run the application locally.

### Backend Setup

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/nisheetkaran/NutritionSearch.git
    cd NutritionSearch
    ```

2. **Navigate to the backend directory** and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. **Start the backend server**:

    ```bash
    npm start
    ```

    The backend server will start running on `http://localhost:3001`.

### Frontend Setup

1. **Open a new terminal window**, navigate to the frontend directory from the root of the project:

    ```bash
    cd frontend
    ```

2. **Install the frontend dependencies**:

    ```bash
    npm install
    ```

3. **Start the React development server**:

    ```bash
    npm start
    ```

    The frontend application will now be accessible at `http://localhost:3000`.

### MongoDB

Ensure MongoDB is installed and running on your local machine. The backend application will connect to MongoDB running at `mongodb://localhost:27017/nutrition`.

### Environment Variables

Create a `.env` file in your backend directory with the necessary environment variables for the Nutritionix API:

```plaintext
NUTRITIONIX_APP_ID=your_app_id_here
NUTRITIONIX_API_KEY=your_api_key_here
```

## Screenshots

### Homepage
![Homepage](https://github.com/nisheetkaran/NutritionSearch/assets/77787531/1f61081d-61cb-499a-9af9-dc68acfdfc14)

### Search Results
![Search Results](https://github.com/nisheetkaran/NutritionSearch/assets/77787531/45a7fc8e-e7a9-42e4-b33d-2d5423bbc89e)

### Dark Mode Example
![Dark Mode Example](https://github.com/nisheetkaran/NutritionSearch/assets/77787531/ca99af8d-2087-4f39-ae42-4a479806e184)

