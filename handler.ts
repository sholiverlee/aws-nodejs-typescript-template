import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
 // console.log(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };

};

