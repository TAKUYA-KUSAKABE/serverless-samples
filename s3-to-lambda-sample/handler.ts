import 'source-map-support/register';
import type { S3Event } from "aws-lambda";
import { middyfy } from './libs/lambda';

const hello: (event) => Promise<void> = async (event: S3Event) => {
  console.warn('s3 event accepted!!')
  console.warn(event.Records[0])
}

export const main = middyfy(hello);
