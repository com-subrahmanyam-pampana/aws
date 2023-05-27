# Logs
1.You can use the AWS CLI to retrieve logs for an invocation using the --log-type command option. 
2.The response contains a LogResult field that contains up to 4 KB of base64-encoded logs from the invocation.

# Command
aws lambda invoke --function-name Test out --log-type Tail

--function-name=Test  ==>Your function name."Test" in our case
--log-type=Tail

Expected output:
{
    "StatusCode": 200,
    "LogResult": "U1RBUlQgUmVxdWVzdElkOiA0ZTRlODI3YS1iMjQxLTRhOTEtODg0Ny1jOTg0ZjhhYzA5YWIgVmVyc2lvbjogJExBVEVTVApFTkQgUmVxdWVzdElkOiA0ZTRlODI3YS1iMjQxLTRhOTEtODg0Ny1jOTg0ZjhhYzA5YWIKUkVQT1JUIFJlcXVlc3RJZDogNGU0ZTgyN2EtYjI0MS00YTkxLTg4NDctYzk4NGY4YWMwOWFiCUR1cmF0aW9uOiAxMy40MCBtcwlCaWxsZWQgRHVyYXRpb246IDE0IG1zCU1lbW9yeSBTaXplOiAxMjggTUIJTWF4IE1lbW9yeSBVc2VkOiA1NyBNQglJbml0IER1cmF0aW9uOiAxMjEuODAgbXMJCg==",
    "ExecutedVersion": "$LATEST"
}

You can use any online tool to decode LogResult(Nase64 format) to normal text
After decoding
START RequestId: 4e4e827a-b241-4a91-8847-c984f8ac09ab Version: $LATEST
END RequestId: 4e4e827a-b241-4a91-8847-c984f8ac09ab
REPORT RequestId: 4e4e827a-b241-4a91-8847-c984f8ac09ab	Duration: 13.40 ms	Billed Duration: 14 ms	Memory Size: 128 MB	Max Memory Used: 57 MB	Init Duration: 121.80 ms	

# Command to get logs as plain text instaead do based64 (Decoding)
aws lambda invoke --function-name Test out --log-type Tail \--query 'LogResult' --output text |  base64 -d