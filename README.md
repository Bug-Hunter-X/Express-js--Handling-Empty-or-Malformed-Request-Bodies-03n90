# Express.js: Handling Empty or Malformed Request Bodies

This repository demonstrates a common issue in Express.js applications related to handling request bodies.  Specifically, it showcases a scenario where the server fails to gracefully handle empty or malformed JSON request bodies.  The solution addresses this by implementing proper error handling and input validation.

## Bug Description:
The provided `bug.js` demonstrates the problem. The server attempts to access `req.body` directly without checking if it exists or if the JSON parsing was successful.  This leads to unexpected behavior or errors if the client sends an empty or malformed request.

## Solution:
The `bugSolution.js` provides a corrected version. This version checks if `req.body` is defined and properly formatted before accessing its contents. This avoids errors, improves robustness, and ensures that the server can handle invalid requests gracefully.  Additional input validation is recommended in a production setting.