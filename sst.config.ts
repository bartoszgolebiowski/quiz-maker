import type { SSTConfig } from "sst";
import { RemixSite, Cognito, Bucket, Table } from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "quiz-maker",
            region: "eu-west-1",
            stage: "dev",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const auth = new Cognito(stack, "auth", {
                login: ['email'],
            });

            const templateWriteTable = new Table(stack, "TemplateWriteTable", {
                fields: {
                    templateId: "string",
                    userId: "string",
                    version: "string",
                    title: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "templateId", sortKey: "version" },
            });

            const templateReadTable = new Table(stack, "TemplateReadTable", {
                fields: {
                    templateId: "string",
                    userId: "string",
                    version: "string",
                    title: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "userId", sortKey: "templateId" },
            });

            const quizTable = new Table(stack, "QuizTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    quizId: "string",
                    createdAt: "string",
                    version: "string", // required att to link with specific template
                    title: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "templateId", sortKey: "createdAt" },
                globalIndexes: {
                    quizId: { partitionKey: "quizId" },
                },
            })

            const isntancesTable = new Table(stack, "InstancesTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    quizId: "string",
                    instanceId: "string",
                    createdAt: "string",
                    version: "string", // required att to link with specific template
                },
                primaryIndex: { partitionKey: "quizId", sortKey: "createdAt" }, // listing all instances of a quiz
                globalIndexes: {
                    instanceId: { partitionKey: "instanceId", }, // get instance by id
                },
            })

            const codeTable = new Table(stack, "CodeTable", {
                fields: {
                    instanceId: "string",
                    code: "string",
                    createdAt: "string",
                },
                primaryIndex: { partitionKey: "code", sortKey: "createdAt" },
            })

            const answerTable = new Table(stack, "AnswerTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    quizId: "string",
                    instanceId: "string",
                    answerId: "string",
                    createdAt: "string",
                    version: "string", // required att to link with specific template
                },
                primaryIndex: { partitionKey: "quizId", sortKey: "createdAt" },
                globalIndexes: {
                    answerId: { partitionKey: "answerId", }, // get instance by id
                },
            })

            const bucket = new Bucket(stack, "bucket", {
                cdk: {
                    bucket: {
                        versioned: true,
                    }
                }
            })

            const site = new RemixSite(stack, "site", {
                bind: [auth, bucket, templateWriteTable, templateReadTable, quizTable, codeTable, isntancesTable, answerTable],
                permissions: [bucket, templateWriteTable, templateReadTable, quizTable, codeTable, isntancesTable, answerTable]
            });

            const env = {
                Region: app.region,
                SiteUrl: site.url,
                CognitoDomain: `${app.stage}-${app.name}-auth.auth.${app.region}.amazoncognito.com`,
                CognitoUserPoolClientId: auth.userPoolClientId,
                BucketName: bucket.bucketName,
                TemplateTableWriteName: templateWriteTable.tableName,
                TemplateTableReadName: templateReadTable.tableName,
                QuizTableName: quizTable.tableName,
                QrTableName: codeTable.tableName,
                InstancesTableName: isntancesTable.tableName,
                AnswerTableName: answerTable.tableName,
            }

            stack.addOutputs(env);
        });
    },
} satisfies SSTConfig;

