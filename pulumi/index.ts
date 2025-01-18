import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const exampleRepo = new github.Repository("exampleRepo", {
  name: "example",
  description: "My awesome codebase",
  visibility: "public",
});

const exampleRepo2 = new github.Repository("exampleRepo2", {
  name: "example2",
  description: "My awesome codebase",
  visibility: "public",
});
