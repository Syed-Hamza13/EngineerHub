#!/usr/bin/env node

/**
 * Quick Fix - Copy-Paste Ready Examples
 */

console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                    🔧 QUICK FIX - Copy-Paste Ready                         ║
╚════════════════════════════════════════════════════════════════════════════╝

🚀 IF YOU GET: "Invalid JSON in request body"

👇 DO THIS:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTION 1️⃣ - cURL (Copy-Paste करो):

curl -X POST http://localhost:5000/api/research/generate \\
  -H "Content-Type: application/json" \\
  -d '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4"}'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTION 2️⃣ - JavaScript (Paste करो browser console में):

fetch('http://localhost:5000/api/research/generate', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    query: "Explain AI fraud detection system",
    userId: "665f8a9c123456789abcde13",
    projectId: "6a35f20e07a4c8d2b755dfd4"
  })
})
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.error(e))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTION 3️⃣ - PowerShell (Paste करो):

$uri = "http://localhost:5000/api/research/generate"
$body = @{
    query = "Explain AI fraud detection system"
    userId = "665f8a9c123456789abcde13"
    projectId = "6a35f20e07a4c8d2b755dfd4"
} | ConvertTo-Json

Invoke-WebRequest -Uri $uri -Method POST -Headers @{"Content-Type"="application/json"} -Body $body | ConvertTo-Json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTION 4️⃣ - Postman में:

1. URL: http://localhost:5000/api/research/generate
2. Method: POST
3. Headers tab में:
   Key: Content-Type
   Value: application/json
   
4. Body tab में > raw > JSON चुनो
   
5. Paste करो:
{
  "query": "Explain AI fraud detection system",
  "userId": "665f8a9c123456789abcde13",
  "projectId": "6a35f20e07a4c8d2b755dfd4"
}

6. Send button दबाओ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ REMEMBER:

✅ DOUBLE QUOTES करो ("")
❌ Single quotes नहीं ('')

✅ Header: Content-Type: application/json
❌ बिना header के काम नहीं करेगा

✅ सभी फील्ड्स (query, userId, projectId) भेजो
❌ कोई फील्ड miss हो तो error आएगा

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 JSON CHECK करो:

https://jsonlint.com/ पर paste करो

या Terminal में:

node -e "console.log(JSON.parse('{\"query\":\"test\",\"userId\":\"123\",\"projectId\":\"456\"}'))"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Test करो:

node backend/test-research-api.js

या

node backend/interactive-tester.js

╚════════════════════════════════════════════════════════════════════════════╝
`);
