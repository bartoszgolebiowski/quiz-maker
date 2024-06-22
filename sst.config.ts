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

            const templateTable = new Table(stack, "TemplateTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    version: "string", // required att to link with specific template
                    userId: "string",

                    title: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "templateId", sortKey: "version" },
            });

            const activeTemplateTable = new Table(stack, "ActiveTemplateTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    version: "string", // required att to link with specific template
                    userId: "string", // required att to link with specific template

                    title: "string",
                    description: "string",
                },
                primaryIndex: { partitionKey: "userId", sortKey: "templateId" },
            });

            const quizTable = new Table(stack, "QuizTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    version: "string", // required att to link with specific template
                    userId: "string", // required att to link with specific template
                    quizId: "string",
                    code: "string",

                    createdAt: "string",
                    title: "string",
                    description: "string",
                    done: "string",
                },
                primaryIndex: { partitionKey: "userId", sortKey: "quizId" },
                globalIndexes: {
                    quizId: { partitionKey: "quizId" },
                },
            })

            const codeTable = new Table(stack, "CodeTable", {
                fields: {
                    quizId: "string",
                    code: "string",
                },
                primaryIndex: { partitionKey: "code" },
            })

            const answerTable = new Table(stack, "AnswerTable", {
                fields: {
                    templateId: "string", // required att to link with specific template
                    version: "string", // required att to link with specific template
                    userId: "string", // required att to link with specific template
                    quizId: "string",
                    answerId: "string",

                    createdAt: "string",
                    answer: "string",
                    studentName: "string",
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
                bind: [auth, bucket, templateTable, activeTemplateTable, quizTable, codeTable, answerTable],
                permissions: [bucket, templateTable, activeTemplateTable, quizTable, codeTable, answerTable]
            });

            const env = {
                Region: app.region,
                SiteUrl: site.url,
                CognitoDomain: `${app.stage}-${app.name}-auth.auth.${app.region}.amazoncognito.com`,
                CognitoUserPoolClientId: auth.userPoolClientId,
                BucketName: bucket.bucketName,
                TemplateTableName: templateTable.tableName,
                ActiveTemplateTableName: activeTemplateTable.tableName,
                QuizTableName: quizTable.tableName,
                QrTableName: codeTable.tableName,
                AnswerTableName: answerTable.tableName,
            }

            stack.addOutputs(env);
        });
    },
} satisfies SSTConfig;

