---
sidebar_position: 1
sidebar_label: Cloud development
title: Cloud development
slug: /provisioning/dev/cloud
---

# Cloud development 

VKPR aims to be a helper when it comes to provisioning and infrastructure, it was created to be a tool that has the characteristics of the GitOps format where all your infrastructure can be managed through a git repository.

Using CI/CD tools, we create Terraform modules for provisioning Elastic Kubernetes Service (EKS) and Digitalocean in AWS, in addition to all their dependencies.

These modules are responsible for communicating VKPR with our repository and running pipelines for provisioning with terraform.

:::tip Terrafom Module
To learn more about ours Terraform modules:
 - [terraform-aws-eks](https://gitlab.com/vkpr/terraform-aws-eks)
 - [terraform-digitalocean-cluster](https://gitlab.com/vkpr/terraform-digitalocean-cluster)
 - [terraform-kubernetes-kubeconfig](https://gitlab.com/vkpr/terraform-kubernetes-kubeconfig)   
 - [terraform-kubernetes-rbac](https://gitlab.com/vkpr/terraform-kubernetes-rbac) 
:::