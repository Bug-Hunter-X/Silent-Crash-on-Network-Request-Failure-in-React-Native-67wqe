# Silent Crash on Network Request Failure in React Native

This repository demonstrates a common but difficult-to-debug issue in React Native: a silent crash caused by an unhandled promise rejection during an asynchronous network request.

## The Problem

The `MyComponent` uses `async/await` to fetch data from an API.  If the network request fails (e.g., the API is down or there's a network issue), the application crashes without providing any clear error indication in the console or the user interface.  This makes debugging extremely challenging.

## Solution

The solution involves using a `try...catch` block within the `async` function to handle potential errors and display a user-friendly error message.  Adding error handling prevents the silent crash and provides a better user experience.