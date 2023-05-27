# CLI
1.This command line execute the "Test" lambda function.
2.We are string the input payload in the "payload.txt" file.
Payload:
{"name":"Subbu"}
Convert this into Base64 because payload must be in Base64 format
Input:{"name":"Subbu"}
Base64 format:eyJuYW1lIjoiU3ViYnUifQ==

3.We are storing the output in "response.json" file

# Command
aws lambda invoke --function-name Test  --payload file://E:\PublicRepos\aws\lambda\HelloWorld\payload.txt  E:\PublicRepos\aws\lambda\HelloWorld\response.json

where 
--function-name=Test

--payload=path to your payload location=file://E:\PublicRepos\aws\lambda\cli\payload.txt

E:\PublicRepos\aws\lambda\cli\response.json=output is stored int this location

Output:
{
    "StatusCode": 200,
    "ExecutedVersion": "$LATEST"
}
If Lambda was able to run the function, the status code is 200, even if the function returned an error.

The above will be printed on CLI and "Hello World" is written in response.json

# We are passing payload in the command instead of loading tom txt file
aws lambda invoke --function-name Test --cli-binary-format raw-in-base64-out --payload "{\"name\":\"Subbu\"}"  ./response.json

"{\"name\":\"Subbu\"}"=String of {"name":"Subbu"}

./response.json=Write the output to response.json file in the current directory

--cli-binary-format= raw-in-base64-out 
The cli-binary-format option is required if you're using AWS CLI version 2. To make this the default setting, run 

aws configure set cli-binary-format raw-in-base64-out