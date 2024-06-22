import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class QuizRepository {
    constructor(
        private dynamodbClient: DynamoDBClient,
    ) { }

    
}