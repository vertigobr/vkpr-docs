---
sidebar_position: 1
sidebar_label: AWS EKS
title: AWS EKS
slug: /provisioning/dev/cloud/aws
---

# Provisioning with AWS EKS

VKPR has a series of commands for local provisioning and configuring your application, but you can also install all your applications directly on your provider's cloud cluster through VKPR.

Using CI/CD tools, we create Terraform modules for provisioning Elastic Kubernetes Service (EKS) and Digitalocean in AWS, in addition to all their dependencies.

These modules are responsible for communicating VKPR with our repository and running pipelines for provisioning with terraform.

## How it works ?

After your application is locally provisioned and configured, you can install all your applications directly on your provider's cloud cluster with VKPR.

Using one of the VKPR applications, AWS EKS, we can run the command that will be responsible for creating a fork of our repository with all the necessary dependencies for provisioning, a branch containing the name of our cluster will be created containing the information requested in the execution of the command responsible for provisioning.

![Fork VKPR repo](/img/cloud-dev/fork-repo.png)

First we need to run the `vkpr aws eks init` formula responsible for initializing the cluster with name, number of desired nodes, Kubernetes version, instance type, among other information questioned in the formula decision tree.

```sh
$ vkpr aws eks init
Formula was successfully built!
? Project location: user
? EKS cluster name: eks-sample
? K8s version 1.21
? Choose nodes instance type: t3.small
? Desired number of nodes: 2
? Choose the capacity type from the nodes: on_demand
? Choose where to store the state of Terraform: gitlab
```

After the execution, we will be able to view the series of information regarding cloning, as well as the creation of a fork of the VKPR git repository, where all the terraform templates that will be executed to provision the infrastructure are stored.

```sh
...
Switched to a new branch 'eks-sample'
[eks-sample e8cb271] [VKPR] Initial configuration defaults.yml
 1 file changed, 10 insertions(+), 10 deletions(-)
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 423 bytes | 423.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: 
remote: To create a merge request for eks-sample, visit:
remote:   https://gitlab.com/repository/aws-eks/-/merge_requests/new?merge_request%5Bsource_branch%5D=eks-sample
remote: 
To https://gitlab.com/repository/aws-eks.git
 * [new branch]      eks-sample -> eks-sample
Branch 'eks-sample' set up to track remote branch 'eks-sample' from 'origin'.
...
```

At this point, we can follow the pipeline by executing the initial provisioning steps by visiting the CI/CD part of our newly created repository, there we can view the variables created by VKPR regarding credentials and sensitive data, all with the greatest concern of data protection , we take the GitLab repository as an example below.

![Gitlab pipeline](/img/cloud-dev/initial-step-pipeline.png)

The data requested in the decision tree is stored in config/defaults.yml in the branch of our newly forked repository.

![Gitlab configs](/img/cloud-dev/configs-defaults.png)
:::info
To learn more about the values ​​allowed in `defaults.yml`, click [here](https://gitlab.com/vkpr/terraform-aws-eks)
:::

### Starting the deployment

So we can start the deployment pipeline or execute the `vkpr aws eks deploy` command referring to the deployment of our cluster.

```sh
$ vkpr aws eks deploy
Formula was successfully built!
Deploy job started successfully
```

We will be able to see the kubeconfig files being generated in the artifacts part at the end of the pipeline execution, but VKPR has features for extracting this file. By running the `vkpr aws eks kubeconfig` command VKPR will be able to automatically extract kubeconfig directly from the pipeline of our newly provisioned infrastructure.

:::info
To learn more about kubeconfig click [here](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
:::

### Dropping the cluster

Another command that VKPR makes available is to destroy the cluster provisioned through the previous steps. With the execution of the `vkpr aws eks destroy` command, the last stage of our repository pipeline will be triggered, which will bring down all the infrastructure previously provisioned.

```sh
$ vkpr aws eks deploy
Formula was successfully built!
Destroy job started successfully
```

![Complete pipeline](/img/cloud-dev/pipeline-deploy.png)