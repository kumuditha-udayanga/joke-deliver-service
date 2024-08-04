# Deliver Microservice

## Getting Started

Node version: v20.15.1

#### Configuration

1. Create a mysql database
2. Create a joke_types and jokes tables using the following sql scripts

```bash
CREATE TABLE joke_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);
  
CREATE TABLE jokes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    joke_text TEXT NOT NULL,
    type_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (type_id) REFERENCES joke_types(id)
);
```


3. Then, setup environment variables , Rename `example.env` to `.env`

4. Next set values to the environment variables


5. Install dependencies

```bash
npm install
```

6. Then, run the development server:

```bash
npm start
```