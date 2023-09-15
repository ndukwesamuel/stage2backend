# INTRODUCTION

This application programming interface (API) was created to carry out fundamental CRUD (Create, Read, Update, Delete) activities on a single attribute: a person's name. A list of names in a database can be managed and maintained using this API as a basic building element.
The API functionalities :

1.  Display names - You can access names stored in the database by giving their respective ids. For testing purposes, an endpoint that displays all names and IDs has been developed so that each name's ID may be seen and used.
2.  Delete names.
3.  Add names.
4.  Update names.

## Getting started

### Installation

Developers who are interested in using this API should have node installed on their local machines if not already installed.

- Live url `https://hngbackend-68zl.onrender.com/api`

### Clone the repository

```
git clone https://github.com/ndukwesamuel/stage2backend

```

- move into the cloned directory

```
cd stage2backend
```

To install all dependencies, run `yarn install`

### Configuration

Create a `.env` file in the project's root directory and define the following environment variables

```
PORT=5000
MONGO_URI=your_database_connection_string
```

Replace `your_database_connection_string` with the actual connection URL of your database.

To run the application, run any of the commands

```
nodemon app
node app
```

The application will run on `http://127.0.0.1:5000/`.

## API Reference

### Endpoints

To test for the endpoints, the developer should have installed Postman or thunder client or any other application with similar capability or use curl.

#### GET

Returns a list of names and their respective id with a success status .
Sample: `http://127.0.0.1:5000/api/`

```
{
    "count": 1,
    "Persons": [
        {
            "_id": "6503e1bb0ac83df5d92325ff",
            "name": "sam",
            "__v": 0
        }
    ]
}

```

#### GET /user_id

Returns details of the person with the id.

sample: `http://127.0.0.1:5000/api/64ffe09dc23fec307969a212`

```

{
    "_id": "6503e1bb0ac83df5d92325ff",
    "name": "emeka",
    "__v": 0
}

```

#### POST

This endpoint adds a new name to the database. It returns a success value.
sample: `http://127.0.0.1:5000/api`

- body (JSON)

```
{
    "name": "John"
}
```

```

{
    "newperson": {
        "name": "John",
        "_id": "6503e2cc0ac83df5d9232605",
        "__v": 0
    }
}

```

### PATCH /user_id

This endpoint updates the user's name and returns a success value if a correct user id is passed.

sample: `http://127.0.0.1:5000/api/6500220d246f6d3954d51ffa`

- body (JSON)

```
{
    "name": "John doe"
}
```

```

{
"status": "Success",
"message": "Details Updated"
}

```

### DELETE /user_id

This endpoint removes a user with the id passed from the database and returns a success value.
sample: http://127.0.0.1:5000/api/user_id

```
{
    "status": "Success",
    "message": "Details deleted"
}
```

### Error codes in the API

- 404: Not found
- 500: Internal server error
- 409: Conflict

### Limitation

` This API doesn't perform neither authentication nor authorization which means any of the data in the database can be alter by anyone.
