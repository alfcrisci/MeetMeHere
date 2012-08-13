<?php
// Install the library via PEAR or download the .zip file to your project folder.
// This line loads the library
require('Twilio.php');

$sid = "AP887a2cf0f5abf1b60d40300046ac92b6"; // Your Account SID from www.twilio.com/user/account
$token = "62fb34555619d9d44808af7de65e809b"; // Your Auth Token from www.twilio.com/user/account

$client = new Services_Twilio($sid, $token);
$message = $client->account->sms_messages->create(
  '(847) 562-5931', // From a valid Twilio number
  '8477363951', // Text this number
  "Hello monkey!"
);

print $message->sid;

