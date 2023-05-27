
# asynchronous invocations
1.For asynchronous invocation, Lambda places the event in a queue and returns a success response without additional information. 
2.A separate process reads events from the queue and sends them to your function. 
3.To invoke a function asynchronously, set the invocation type parameter to Event.

# Command
aws lambda invoke --function-name Test  --invocation-type Event --cli-binary-format raw-in-base64-out --payload "{\"name\":\"Subbu\"}" response.json

Output:
The output file (response.json) doesn't contain any information, but is still created when you run this command. If Lambda isn't able to add the event to the queue, the error message appears in the command output.
  
