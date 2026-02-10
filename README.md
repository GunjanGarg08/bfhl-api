# BFHL API – Bajaj Finserv Hiring Assignment

This project is a backend REST API developed as part of the Bajaj Finserv hiring process.  
The API is designed to handle mathematical computations and basic AI-powered question answering, following strict input validation and response formatting guidelines.


## Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – REST API framework
- **Google Gemini AI (Generative Language API)** – AI-based query handling
- **Render** – Cloud deployment
- **Postman** – API testing


## API Base URL

Local:
http://localhost:3000

Production:
https://<your-render-app>.onrender.com


## Available Endpoints

1. Health Check API
GET /health

Used to verify server availability.

Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in"
}

2. BFHL API
POST /bfhl

Accepts exactly one key per request body.
Multiple keys in a single request are rejected.


## Supported Operations

1. Fibonacci Series

Request

```json
{
  "fibonacci": 7
}


Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}

2. Prime Number Filtering

Request

```json
{
  "prime": [2, 4, 7, 9, 11]
}


Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "data": [2, 7, 11]
}

3. LCM (Least Common Multiple)

Request

```json
{
  "lcm": [12, 18, 24]
}


Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "data": 72
}

4. HCF (Highest Common Factor)

Request

```json
{
  "hcf": [24, 36, 60]
}


Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "data": 12
}

5. AI-Based Question Answering
Uses Google Gemini AI to answer factual questions and returns a single-word response.

Request

```json
{
  "AI": "What is the capital of Maharashtra?"
}


Response

```json
{
  "is_success": true,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "data": "Mumbai"
}

## Error Handling

If the request contains:
1. More than one key
2. Invalid input type
3. Unsupported operation

Error Response

```json
{
  "is_success": false,
  "official_email": "your_chitkara_email@chitkara.edu.in",
  "error": "Meaningful error message"
}

## Environment Variables
Create a ".env" file in the project root:

PORT=3000
OFFICIAL_EMAIL=your_chitkara_email@chitkara.edu.in
GEMINI_API_KEY=your_gemini_api_key
GEMINI_URL=https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent

Security Note: Never commit the `.env` file to version control.

## Running the Project Locally

```bash
npm install
node index.js

Server will start on:

http://localhost:3000

## Deployment

The application is deployed on Render for public access and evaluation.

## Key Highlights

1. Clean REST API design

2. Strict input validation

3. Consistent response structure

4. External AI integration

5. Graceful error handling

6. Production-ready code structure

## Author

Gunjan Garg
Aspiring Full-Stack Developer

Mail: gunjan0339.be23@chitkara.edu.in
GitHub: https://github.com/GunjanGarg08