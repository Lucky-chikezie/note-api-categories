## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lucky-chikezie/note-api-categories.git
   cd note-api-categories
npm install
MONGO_URI=your_mongodb_connection_string
PORT=3000
npm run dev
API Endpoints
Method
Endpoint
Description
GET
/api/notes
Retrieve all notes
GET
/api/notes/:id
Retrieve a single note by ID
GET
notes-api-categories/
├── src/
│   ├── errors/
│   │   └── AppError.ts       # Custom error classes
│   ├── models/
│   │   └── Note.ts           # Note and Category schema and interfaces
│   ├── routes/
│   │   └── notes.ts          # API route handlers
│   ├── middleware.ts          # Validation and logging middleware
│   └── index.ts              # App entry point
├── .env                      # Environment variables
├── package.json
└── tsconfig.json


##Middleware
Logging Middleware
Logs every incoming request with the HTTP method, URL, and timestamp to the console.

Validation Middleware
A generic TypeScript middleware that checks for required fields in the request body before passing the request to the route handler. Returns a 400 Bad Request error if any required field is missing.

Error Handling
The API uses custom typed error classes for consistent error responses:
AppError - Base error class with status code
NotFoundError - Returns 404 when a note is not found

Testing
Use Postman to test the API endpoints at http://localhost:3000.
Example POST request body:
{
  "title": "My Note",
  "content": "This is the content of my note",
  "category": {
    "id": "1",
    "name": "Work"
  }
}
