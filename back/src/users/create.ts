import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb"
import { marshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({region: 'ap-southeast-1'}); 
export const createUser = async (event:APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>{

    const params = {
        TableName: "instagramBackEndMain",
        Item: marshall({
            id: event.pathParameters?.id,
            userName:"it"
        })
    }

    try{
        await client.send(new PutItemCommand(params))
    }catch(err){
        console.log(err)
    }



    return{
        statusCode: 200,
        body: JSON.stringify("shee")
    }
}