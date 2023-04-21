import { defineConfig } from 'sanity';

import { deskTool } from 'sanity/desk';

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: "production",
    title: "Sagar's Personal Website",
    apiVersion: "2023-03-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;