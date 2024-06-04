<?php
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);

    if (isset($data['name']) && isset($data['email']) && isset($data['message'])) {
        $email = $data['email'];

        $name = 'Name: ' . $data['name'] . "\n";
        $emailTxt = 'Email: ' . $email . "\n";
        $phone = '';
        $topic = '';
        if (!empty($data['phone'])) {
            $phone = 'Phone: ' . $data['phone'] . "\n";
        }
        if (!empty($data['topic'])) {
            $topic = 'Topic: ' . $data['topic'] . "\n";
        }
        $message = "Message:\n" . $data['message'] . "\n";

        $emailContent = $name . $emailTxt . $phone . $topic . $message;
        
        // Receiver Email
        $to = 'info@yourmail.com';

        $subject = 'Contact Form Submission';
        $headers = "From: $email" . "\r\n";
        
        if (mail($to, $subject, $emailContent, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid form data.']);
    }
?>
