import type { SSTConfig } from "sst";
import { RemixSite, Cognito, Bucket, Table } from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "quickstart-remix",
            region: "us-east-1",
            stage: "dev",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const auth = new Cognito(stack, "auth", {
                login: ['email'],
            });

            const table = new Table(stack, "table", {
                fields: {
                    userId: "string",
                    id: "string",
                    title: "string",
                    version: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "userId", sortKey: "id" },
                globalIndexes: {
                    titleVersion: { partitionKey: "id", sortKey: "version" },
                },
            });

            const bucket = new Bucket(stack, "bucket", {
                cdk: {
                    bucket: {
                        versioned: true,
                    }
                }
            })

            const site = new RemixSite(stack, "site", {
                permissions: [bucket, table]
            });

            const env = {
                Region: app.region,
                SiteUrl: site.url,
                CognitoDomain: `${app.stage}-${app.name}-auth.auth.${app.region}.amazoncognito.com`,
                CognitoUserPoolClientId: auth.userPoolClientId,
                BucketName: bucket.bucketName,
                TableName: table.tableName,
            }

            stack.addOutputs(env);
        });
    },
} satisfies SSTConfig;

