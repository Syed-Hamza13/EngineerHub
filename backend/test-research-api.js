/**
 * Test script for Research API
 * Usage: node test-research-api.js
 */

const http = require('http');

const testData = {
    query: "Explain AI fraud detection system",
    userId: "665f8a9c123456789abcde13",
    projectId: "6a35f20e07a4c8d2b755dfd4"
};

const postData = JSON.stringify(testData);

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/research/generate',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

console.log('🚀 Testing Research API...');
console.log('📍 Endpoint: http://localhost:5000/api/research/generate');
console.log('📦 Request Data:', testData);
console.log('\n---\n');

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('✅ Response Status:', res.statusCode);
        console.log('📋 Response Headers:', res.headers);
        console.log('📝 Response Body:');
        
        try {
            const jsonData = JSON.parse(data);
            console.log(JSON.stringify(jsonData, null, 2));
        } catch (e) {
            console.log(data);
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Error:', error.message);
});

req.write(postData);
req.end();
