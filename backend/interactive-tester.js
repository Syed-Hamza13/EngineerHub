#!/usr/bin/env node

/**
 * Interactive Request Tester
 * Tests actual HTTP requests to the API
 */

const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const templates = {
    correct: {
        query: "Explain AI fraud detection system",
        userId: "665f8a9c123456789abcde13",
        projectId: "6a35f20e07a4c8d2b755dfd4"
    },
    minimal: {
        query: "Test query",
        userId: "test-user-id",
        projectId: "test-project-id"
    }
};

function sendRequest(data) {
    const postData = JSON.stringify(data);

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

    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: responseData
                });
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.clear();
    console.log('🧪 Research API - Interactive Tester\n');
    
    const options = [
        '1. Send Correct Request',
        '2. Send Minimal Request',
        '3. Send Custom Request',
        '4. Test JSON Validation',
        '5. Exit'
    ];

    console.log('Options:');
    options.forEach(opt => console.log(`  ${opt}`));

    rl.question('\nSelect option (1-5): ', async (choice) => {
        try {
            switch (choice.trim()) {
                case '1':
                    console.log('\n📤 Sending Correct Request...');
                    console.log('Data:', JSON.stringify(templates.correct, null, 2));
                    const res1 = await sendRequest(templates.correct);
                    displayResponse(res1);
                    break;

                case '2':
                    console.log('\n📤 Sending Minimal Request...');
                    console.log('Data:', JSON.stringify(templates.minimal, null, 2));
                    const res2 = await sendRequest(templates.minimal);
                    displayResponse(res2);
                    break;

                case '3':
                    rl.question('\nEnter JSON request body: ', async (jsonInput) => {
                        try {
                            const data = JSON.parse(jsonInput);
                            console.log('\n📤 Sending Custom Request...');
                            const res3 = await sendRequest(data);
                            displayResponse(res3);
                        } catch (e) {
                            console.error('\n❌ Invalid JSON:', e.message);
                        }
                        promptAgain();
                    });
                    return;

                case '4':
                    console.log('\n🔍 Running JSON validation tests...');
                    require('./diagnose-json.js');
                    promptAgain();
                    return;

                case '5':
                    console.log('\nGoodbye! 👋');
                    rl.close();
                    return;

                default:
                    console.log('\n❌ Invalid option. Please try again.');
            }

            promptAgain();
        } catch (error) {
            console.error('\n❌ Error:', error.message);
            promptAgain();
        }
    });
}

function displayResponse(res) {
    console.log('\n📊 Response:');
    console.log(`  Status: ${res.statusCode}`);
    console.log(`  Headers:`, res.headers);
    console.log(`  Body:`);
    try {
        const body = JSON.parse(res.body);
        console.log(JSON.stringify(body, null, 4));
    } catch {
        console.log(res.body);
    }
}

function promptAgain() {
    rl.question('\nPress Enter to continue...', () => {
        runTests();
    });
}

// Check if server is running
http.get('http://localhost:5000', (res) => {
    runTests();
}).on('error', (error) => {
    console.error('\n❌ Cannot connect to server at localhost:5000');
    console.error('   Error:', error.message);
    console.error('\n⚠️  Make sure the backend server is running:');
    console.error('   cd backend && npm start\n');
    rl.close();
});
