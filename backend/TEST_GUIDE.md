# Backend Setup & Testing Guide

## 🔧 Changes Made

### 1. **Improved JSON Middleware** (`src/app.js`)
   - Added `limit: '50mb'` for larger payloads
   - Added proper JSON parse error handling
   - Error handler now positioned correctly (before routes)

### 2. **Enhanced Error Handling** (`src/app.js`)
   - Added global error handler with proper status codes
   - Console logging for debugging
   - Better error messages for clients

### 3. **Better Request Validation** (`src/controllers/researchController.js`)
   - Validates `req.body` exists
   - Checks all required fields (query, userId, projectId)
   - Validates data types and non-empty strings
   - Improved error messages
   - Better stack trace logging

### 4. **Request Debugging** (`src/routes/researchRoutes.js`)
   - Added logging middleware to track incoming requests
   - Logs headers and request body for debugging

### 5. **Server Improvements** (`server.js`)
   - Added port conflict detection
   - Graceful shutdown handling
   - Better startup logging

---

## 📝 Testing the API

### **Option 1: Using Node.js Script** (Recommended for automation)
```bash
cd backend
node test-research-api.js
```

### **Option 2: Using PowerShell** (For Windows users)
```powershell
cd backend
.\test-research-api.ps1
```

### **Option 3: Using cURL**
```bash
curl -X POST http://localhost:5000/api/research/generate \
  -H "Content-Type: application/json" \
  -d '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4"}'
```

### **Option 4: Using VS Code REST Client**
- Install "REST Client" extension by Huachao Mao
- Open `test-research-api.http`
- Click "Send Request" above each test

### **Option 5: Using Postman**
1. Create new POST request
2. URL: `http://localhost:5000/api/research/generate`
3. Headers: Set `Content-Type: application/json`
4. Body (JSON):
```json
{
  "query": "Explain AI fraud detection system",
  "userId": "665f8a9c123456789abcde13",
  "projectId": "6a35f20e07a4c8d2b755dfd4"
}
```

---

## ✅ Expected Responses

### **Success Response (200)**
```json
{
  "success": true,
  "message": "AI Research generated successfully",
  "data": { ... }
}
```

### **Bad Request Response (400)**
```json
{
  "success": false,
  "message": "Query is required and must be a non-empty string"
}
```

### **Invalid JSON Response (400)**
```json
{
  "success": false,
  "message": "Invalid JSON in request body - check your JSON syntax"
}
```

---

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| `Invalid JSON in request body` | Ensure `Content-Type: application/json` header is set |
| `Query is required` | Add `query` field to request body |
| `userId is required` | Add `userId` field to request body |
| `projectId is required` | Add `projectId` field to request body |
| `Port already in use` | Kill process on port 5000: `lsof -ti:5000 \| xargs kill -9` (Linux/Mac) or `netstat -ano \| findstr :5000` (Windows) |
| Timeout errors | Check if Python embedding service is running |

---

## 📊 Debugging

Check server logs for:
- ✅ `✅ Server running on port 5000`
- ✅ `📥 Incoming POST /generate request:`
- ❌ Any error messages with `Error:` prefix

---

## 🔗 API Endpoints

- **GET** `/api/research/generate` - Info about endpoint
- **POST** `/api/research/generate` - Generate research (main endpoint)
- **POST** `/api/research/` - Create research
- **GET** `/api/research/project/:projectId` - Get project research
- **GET** `/api/research/:id` - Get single research
- **PUT** `/api/research/:id` - Update research
- **DELETE** `/api/research/:id` - Delete research

