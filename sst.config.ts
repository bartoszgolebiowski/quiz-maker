import type { SSTConfig } from "sst";
import { RemixSite, Cognito } from "sst/constructs";

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
            const cognitoId = "Auth"
            const auth = new Cognito(stack, cognitoId, {
                login: ['email'],
            });

            const site = new RemixSite(stack, "site");

            const env = {
                Region: app.region,
                SiteUrl: site.url,
                CognitoDomain: `${app.stage}-${app.name}-${cognitoId}.auth.${app.region}.amazoncognito.com`,
                CognitoUserPoolClientId: auth.userPoolClientId,
            }

            stack.addOutputs(env);
        });
    },
} satisfies SSTConfig;

