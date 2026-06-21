# 🔧 JSON Error - Troubleshooting Guide

## ❌ Error: "Invalid JSON in request body - check your JSON syntax"

Ye error आता है जब आप गलत JSON format भेज रहे हो। यहाँ देखो क्या गलत हो सकता है:

---

## ✅ CORRECT FORMAT (यह भेजो)

### cURL
```bash
curl -X POST http://localhost:5000/api/research/generate \
  -H "Content-Type: application/json" \
  -d '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4"}'
```

### JavaScript/Fetch
```javascript
const data = {
  query: "Explain AI fraud detection system",
  userId: "665f8a9c123456789abcde13",
  projectId: "6a35f20e07a4c8d2b755dfd4"
};

fetch('http://localhost:5000/api/research/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // ⭐ MANDATORY
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => console.log(data));
```

### Postman
```
POST http://localhost:5000/api/research/generate

Headers:
  Content-Type: application/json

Body (JSON):
{
  "query": "Explain AI fraud detection system",
  "userId": "665f8a9c123456789abcde13",
  "projectId": "6a35f20e07a4c8d2b755dfd4"
}
```

### PowerShell
```powershell
$uri = "http://localhost:5000/api/research/generate"
$body = @{
    query = "Explain AI fraud detection system"
    userId = "665f8a9c123456789abcde13"
    projectId = "6a35f20e07a4c8d2b755dfd4"
} | ConvertTo-Json

Invoke-WebRequest -Uri $uri -Method POST `
    -Headers @{"Content-Type"="application/json"} `
    -Body $body
```

---

## ❌ COMMON MISTAKES (ये मत करो)

| ❌ WRONG | ✅ CORRECT | 📝 Problem |
|---------|-----------|-----------|
| `{'query': '...'}` | `{"query": "..."}` | Single quotes नहीं, double quotes use करो |
| `{query: "..."}` | `{"query": "..."}` | Keys को quotes में लगाना जरूरी है |
| `{"query": "..."},` | `{"query": "..."}` | Trailing comma नहीं चाहिए |
| `{"query": 'text'}` | `{"query": "text"}` | String values में भी double quotes |
| `{query:"..."}` | `{"query": "..."}` | हर key quoted होना चाहिए |
| Missing header | Set `Content-Type: application/json` | Header बिना JSON parse नहीं होगा |
| No body sent | Proper JSON body भेजो | Empty body से error आएगी |

---

## 🔍 JSON Validation कैसे करें

### Option 1: Online Tool
👉 https://jsonlint.com/ पर जाओ और अपना JSON paste करो

### Option 2: Node.js Script
```bash
cd backend
node diagnose-json.js
```

### Option 3: JavaScript Console
```javascript
// Copy this and run in browser console
const json = '{"query":"test","userId":"123","projectId":"456"}';
try {
  JSON.parse(json);
  console.log('✅ Valid JSON!');
} catch (e) {
  console.log('❌ Invalid:', e.message);
}
```

---

## 🚀 Step-by-Step Debugging

### Step 1: Check Server is Running
```bash
cd backend
npm start
```
Output should show: `✅ Server running on port 5000`

### Step 2: Check Request Format
```bash
# Run diagnostic
node diagnose-json.js

# Or use interactive tester
node interactive-tester.js
```

### Step 3: Test with Simple Request
```bash
curl -X POST http://localhost:5000/api/research/generate \
  -H "Content-Type: application/json" \
  -d '{"query":"test","userId":"123","projectId":"456"}'
```

### Step 4: Check Server Logs
Terminal में server का output देखो:
```
📥 POST /api/research/generate
  Content-Type: application/json
  Content-Length: 85
```

---

## 💡 प्रमुख बातें

1. **Header ज़रूरी है**: `Content-Type: application/json` बिना के JSON parse नहीं होगा
2. **Double quotes लगाओ**: JSON में सिर्फ double quotes valid हैं
3. **Trailing commas नहीं**: आखिरी field के बाद comma नहीं
4. **सभी keys quoted**: हर key को quotes में लगाना जरूरी है
5. **Valid characters**: Special characters को escape करना पड़ सकता है

---

## 📊 Real Example

### ❌ गलत
```json
{
  'query': 'Build AI system',  // ❌ Single quotes
  userId: '123',                // ❌ Key unquoted
  'projectId': '456',
  'extra': 'field',             // ❌ Trailing comma
}                               // ❌ Trailing comma
```

### ✅ सही
```json
{
  "query": "Build AI system",
  "userId": "123",
  "projectId": "456"
}
```

---

## 🔧 अगर फिर भी Error आता है

1. **Server Restart करो**:
   ```bash
   npm start
   ```

2. **नया Terminal खोलो**: कभी कभी environment issues होते हैं

3. **Package reload करो**:
   ```bash
   npm install
   npm start
   ```

4. **Logs देखो**: Server में क्या error दिख रहा है

5. **Simple request से शुरू करो**:
   ```bash
   curl -X POST http://localhost:5000/api/research/generate \
     -H "Content-Type: application/json" \
     -d '{"query":"test","userId":"u1","projectId":"p1"}'
   ```

---

## 📞 अगर Problem है तो

1. ✅ Server logs share करो
2. ✅ Exact request भेज रहे हो वो copy करो
3. ✅ Request headers share करो
4. ✅ Exact error response दिखाओ

---

## 🎯 Validating Request

Server अब बेहतर error messages देता है:
- ✅ Empty query - Error
- ✅ Missing userId - Error
- ✅ Missing projectId - Error
- ✅ Invalid JSON - Error with details
- ✅ Malformed JSON - Error with line details

---

**अब test करो और बताओ क्या output आता है!** 🚀
