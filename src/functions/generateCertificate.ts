import { document } from "../utils/dynamodbClient";

interface ICreateCertificate {
    id: string;
    name: string;
    grade: string;
}

export const handle = async (event) => {
   const { id, grade, name } = JSON.parse(event.body) as ICreateCertificate;

   await document.put({
        TableName: "users_certificates",
        Item: {
            id,
            name,
            grade
        }
   }).promise();

   return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Certificate created!"
        }),
        headers: {
            "Content-type": "application/json"
        }
   }
}