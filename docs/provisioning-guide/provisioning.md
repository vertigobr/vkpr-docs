---
sidebar_position: 1
---

# Provisioning basics

VKPR acts as a facilitator for provisioning infrastructures, ensuring in certain deploys the GitOps mode.
Its concept is to abstract the greatest amount of user information and build a structure based on the ideal scenario of your tools.

## Local development provisioning

For the provisioning of the local infrastructure, the `k3d` tool is used which is a lightweight wrapper to run `k3s` (Rancher Lab's minimal Kubernetes distribution) in `Docker`.

Read more on [Local Development](./cloud-dev)

:::info Formula
  To see local infrastructure commands, click [here](/docs/commands/infra/start)
:::

## Cloud development provisioning

Cloud provisioning is provided in order to build your entire infrastructure in your cloud through a GitOps approach. Written in `Terraform` with pipelines` Gitlab`, any changes you want to make to the cluster, there will be a config file as the source of truth. Changing it will reflect all changes in your cloud.

Read more on [Cloud Development](./cloud-dev)

## Cloud production clusters

Creating a production-ready managed k8s cluster requires too many specifics from the cloud vendor itself.
VKPR has an opinionated take on several configs and enforces a GitOps approach on infrastructure provisioning.

Read more on [Production clusters](./production)

:::info Formula
  To see Cloud infrastructure commands, click [here](/docs/commands/aws/eks/init)
:::