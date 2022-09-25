// Check if email exists
    // If email exists, reject request
    // Else, proceed to create account
        // Generate a salt
            // Combine the salt and original password
                // Hash the password
                // Overwrite the password
                    // Save the object to database