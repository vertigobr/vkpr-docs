---
sidebar_position: 1
---

# VKPR Basics

Adopting Kubernetes is a challenging mission for companies of any size - it has a steep learning curve and skilled professionals are very hard to come by. Although managed kubernetes offerings from cloud vendors are a great step in a good direction, it is still hard to find the best way to provision and maintain them.

Once provisioned, it is even harder to go from a barebones cluster to a production-ready one: what tools and settings do I need for monitoring, security, logging or backup? How can I automate their setup in a simple and repeatable way?

## What is VKPR

VKPR was developed to make Kubernetes easier to use. It is composed of:

- A very clean CLI with a simple syntax
- Automations and ready-to-use pipelines that make your life easier
- Third-party open-source components

VKPR was organized in a way in can deliver both a production-ready Kubernetes with minimal effort as well as a quick local development environment that can be discarded easily.

## Developer workflow

VKPR supports convenient workflows for a developer that must rely on kubernetes but wishes to avoid its complexity.

Things you can do with VKPR working as a local development tool:

- Provision local kubernetes clusters that can be discarded easily (using `k3d`) &#9989;
- Deploy VKPR components locally &#9989;
- Run a local private Docker registry *and* a local registry mirror (image pull cache for kubernetes) &#9989;

Things you can do with VKPR working as a remote development tool:

- Provision simple remote kubernetes clusters that can be discarded easily (using DigitalOcean as provider) &#10060;
- Deploy VKPR components remotely &#10060;

...

## Deployment workflow

VKPR supports convenient self-service workflows for provisioning and configuring production-ready kubernetes clusters. VKPR also enforces a GitOps workflow for provisioning automation.

- Provision AWS EKS kubernetes clusters from a declared definition (GitOps repos) &#9989;
- Deploy VKPR components remotely &#9989;

- Drop GitLab pipelines for a pull-reconcile approach for components (Argo or Flux) &#10060;
