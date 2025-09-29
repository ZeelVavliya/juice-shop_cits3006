#!/bin/bash

echo "Starting OWASP Juice Shop - CITS3006 Edition"
echo "Configuration: 7 Selected Challenges Only"
echo ""
echo "Available Challenges:"
echo "  [SQL Injection]"
echo "    - Database Schema (Difficulty: 3/6)"
echo "    - User Credentials (Difficulty: 4/6)"
echo "    - Login Admin (Difficulty: 2/6)"
echo ""
echo "  [Cross-Site Scripting]"
echo "    - DOM XSS (Difficulty: 1/6)"
echo "    - API-only XSS (Difficulty: 3/6)"
echo "    - Client-side XSS Protection (Difficulty: 3/6)"
echo ""
echo "  [Directory Traversal]"
echo "    - Confidential Document (Difficulty: 1/6)"
echo "    - Forgotten Sales Backup (Difficulty: 4/6)"
echo ""
echo "Navigate to http://localhost:3000 after startup completes"
echo "Press Ctrl+C to stop the server"
echo ""

export NODE_ENV=development
npm start