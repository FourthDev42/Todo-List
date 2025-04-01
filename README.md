# To-Do List API

This is a simple API for managing a to-do list, built with Node.js and Express.js.

## Installation

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/FourthDev42/Todo-List/tree/main
    ```

2.  Navigate to the project directory:

    ```bash
    cd desktop/app/todo
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env` file in the root directory and add the following (if needed):

    ```
    PORT=4000
    ```

    
## Running the Application

1.  Start the server:

    ```bash
    npm start
    ```

2.  The server will be running at `http://localhost:4000`.

## API Endpoints

### Home Route

-   `GET /`: Returns a JSON object with information about the API and its endpoints.

    ```json
    {
      "message": "To-Do List API",
      "endpoints": {
        "getAllTasks": "GET /api/tasks",
        "getOneTask": "GET /api/tasks/:id",
        "createTask": "POST /api/tasks",
        "updateTask": "PUT /api/tasks/:id",
        "deleteTask": "DELETE /api/tasks/:id"
      }
    }
    ```

### Tasks

-   **Get All Tasks:** `GET /api/tasks`

    -   Returns a JSON object containing an array of all tasks.
    -   Example Response:

        ```json
        {
          "message": "Tasks retrieved successfully",
          "count": 2,
          "tasks": [
            {
              "id": "1",
              "title": "Buy groceries",
              "description": "Get milk, eggs and bread"
            },
            {
              "id": "2",
              "title": "Do laundry",
              "description": "Wash all clothes",
              "status": "pending",
              "createdAt": "2023-10-27T12:00:00.000Z"
            }
          ]
        }
        ```

-   **Get a Single Task:** `GET /api/tasks/:id`

    -   Returns a JSON object containing the task with the specified `id`.
    -   Example Response:

        ```json
        {
          "message": "Task retrieved successfully",
          "task": {
            "id": "1",
            "title": "Buy groceries",
            "description": "Get milk, eggs and bread"
          }
        }
        ```

    -   If the task is not found, returns a 404 error with a message.

-   **Create a Task:** `POST /api/tasks`

    -   Requires a JSON body with `title` and `description`.
    -   Example Request Body:

        ```json
        {
          "title": "Do laundry",
          "description": "Wash all clothes"
        }
        ```

    -   Returns a 201 status with the created task.
    -   Example Response:

        ```json
        {
          "message": "Task Created!",
          "task": {
            "id": "2",
            "title": "Do laundry",
            "description": "Wash all clothes",
            "status": "pending",
            "createdAt": "2023-10-27T12:00:00.000Z"
          }
        }
        ```

    -   Returns a 400 error if `title` or `description` is missing.

-   **Update a Task:** `PUT /api/tasks/:id`

    -   Requires a JSON body with `title` and `description`.
    -   Example Request Body:

        ```json
        {
          "title": "Updated laundry",
          "description": "Updated description"
        }
        ```

    -   Returns a 200 status with the updated task.
    -   Example Response:

        ```json
        {
          "message": "Task updated",
          "task": {
            "id": "2",
            "title": "Updated laundry",
            "description": "Updated description",
            "status": "pending",
            "createdAt": "2023-10-27T12:00:00.000Z",
            "updatedAt": "2023-10-27T13:00:00.000Z"
          }
        }
        ```

    -   Returns a 404 error if the task is not found.
    -   Returns a 400 error if `title` or `description` is missing.

-   **Delete a Task:** `DELETE /api/tasks/:id`

    -   Returns a 200 status with a success message.
    -   Example Response:

        ```json
        {
          "message": "Task Deleted"
        }
        ```

    -   Returns a 404 error if the task is not found.
