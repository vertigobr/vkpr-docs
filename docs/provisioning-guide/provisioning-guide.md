---
sidebar_position: 1
sidebar_label: Provisioning guide
title: Provisioning guide
slug: /provisioning
---

# Provisioning basics

VKPR acts as a facilitator for provisioning infrastructuresensuring in certain deployments the [GitOps](https://about.gitlab.com/topics/gitops/) way. Your goal is to abstract as much information from the user and build a framework based on the ideal scenario of your tools.

Through VKPR you can start a local development environment and test your application before deploying it to a cloud provider.

## Development

### Local

For the provisioning of the local infrastructure, the [`k3d`](https://k3d.io/v5.4.5/) tool is used which is a lightweight wrapper to run `k3s` (Rancher Lab's minimal Kubernetes distribution) in [Docker](https://www.docker.com/).

Read more on [Local Development](provisioning/dev/local)

:::info Formula
To see local development commands, click [here](/docs/commands/infra/start)
:::

### Cloud

Cloud provisioning is provided in order to build your entire infrastructure in your cloud through a GitOps approach. Written in `Terraform` with pipelines `Gitlab`, any changes you want to make to the cluster, there will be a config file as the source of truth. Changing it will reflect all changes in your cloud.

Read more on [Cloud Development](provisioning/dev/cloud)

:::info Formula
To see cloud development commands, click [here](/docs/commands/digitalocean/cluster/init)
:::

## Production

Creating a production-ready managed k8s cluster requires too many specifics from the cloud vendor itself.
VKPR has an opinionated take on several configs and enforces a GitOps approach on infrastructure provisioning.

:::info Formula
To see cloud development commands, click [here](/docs/commands/aws/eks/init)
:::