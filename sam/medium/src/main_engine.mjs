
export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'I am Subbu',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
