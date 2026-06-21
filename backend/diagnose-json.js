/**
 * JSON Diagnostic Tool
 * Helps identify JSON formatting issues
 */

const testCases = [
    {
        name: "Correct Format",
        json: '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4"}',
        shouldPass: true
    },
    {
        name: "With Spaces (Valid)",
        json: `{
  "query": "Explain AI fraud detection system",
  "userId": "665f8a9c123456789abcde13",
  "projectId": "6a35f20e07a4c8d2b755dfd4"
}`,
        shouldPass: true
    },
    {
        name: "Single Quotes (INVALID)",
        json: "{'query':'Explain AI fraud detection system','userId':'665f8a9c123456789abcde13','projectId':'6a35f20e07a4c8d2b755dfd4'}",
        shouldPass: false
    },
    {
        name: "Trailing Comma (INVALID)",
        json: '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4",}',
        shouldPass: false
    },
    {
        name: "Missing Quotes Around Keys (INVALID)",
        json: '{query:"Explain AI fraud detection system",userId:"665f8a9c123456789abcde13",projectId:"6a35f20e07a4c8d2b755dfd4"}',
        shouldPass: false
    },
    {
        name: "Missing Closing Brace (INVALID)",
        json: '{"query":"Explain AI fraud detection system","userId":"665f8a9c123456789abcde13","projectId":"6a35f20e07a4c8d2b755dfd4"',
        shouldPass: false
    },
    {
        name: "Double Escaped Quotes (INVALID)",
        json: '{\\"query\\":\\"Explain AI fraud detection system\\",\\"userId\\":\\"665f8a9c123456789abcde13\\",\\"projectId\\":\\"6a35f20e07a4c8d2b755dfd4\\"}',
        shouldPass: false
    }
];

console.log('\n🔍 JSON FORMAT VALIDATION TESTS\n');
console.log('=' .repeat(80));

testCases.forEach((testCase, index) => {
    const testNum = index + 1;
    console.log(`\n${testNum}. ${testCase.name}`);
    console.log('-'.repeat(80));
    
    try {
        const parsed = JSON.parse(testCase.json);
        const status = testCase.shouldPass ? '✅ PASS' : '⚠️  SHOULD FAIL BUT PASSED';
        console.log(`${status}`);
        console.log('Parsed Object:', JSON.stringify(parsed, null, 2));
    } catch (error) {
        const status = !testCase.shouldPass ? '✅ EXPECTED FAILURE' : '❌ FAIL';
        console.log(`${status}`);
        console.log(`Error: ${error.message}`);
    }
    
    console.log('JSON Input:');
    console.log(testCase.json);
    console.log();
});

console.log('=' .repeat(80));
console.log('\n📋 KEY POINTS:');
console.log('  • Use DOUBLE quotes for JSON, not single quotes');
console.log('  • No trailing commas allowed');
console.log('  • All keys must be quoted');
console.log('  • All braces and brackets must be properly closed');
console.log('  • No unescaped quotes inside string values');
console.log('\n✅ Test your JSON online: https://jsonlint.com/\n');
