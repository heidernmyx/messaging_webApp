<?php
session_start();

// Check if session user_id is not set or empty
if (!isset($_SESSION['user_id']) || empty($_SESSION['user_id'])) {
    // Redirect to the login page
    exit; // Make sure to exit after redirection
}

// Try to fetch session data
$user_id = $_SESSION['user_id'];

// Unset all session variables

// Destroy the session

// Return a response to indicate successful logout
echo json_encode(["success" => true]);
?>
