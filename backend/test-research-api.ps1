# PowerShell test script for Research API
# Usage: .\test-research-api.ps1

$uri = "http://localhost:5000/api/research/generate"

$body = @{
    query = "Explain AI fraud detection system"
    userId = "665f8a9c123456789abcde13"
    projectId = "6a35f20e07a4c8d2b755dfd4"
} | ConvertTo-Json

Write-Host "🚀 Testing Research API..."
Write-Host "📍 Endpoint: $uri"
Write-Host "📦 Request Data:"
Write-Host $body
Write-Host "`n---`n"

try {
    $response = Invoke-WebRequest -Uri $uri -Method POST `
        -Headers @{"Content-Type" = "application/json"} `
        -Body $body -UseBasicParsing

    Write-Host "✅ Response Status: $($response.StatusCode)"
    Write-Host "📋 Response Headers:"
    $response.Headers | Format-Table
    Write-Host "📝 Response Body:"
    Write-Host $response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)"
    Write-Host "📝 Response:"
    Write-Host $_.Exception.Response.Content
}
