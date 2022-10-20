---
sidebar_position: 2
sidebar_label: DigitalOcean
title: DigitalOcean
slug: /cloud-dev/digitalocean
---

## Provisioning with DigitalOcean

Another advantage that VKPR offers is the possibility of provisioning, similarly to AWS EKS, using DigitalOcean as a cloud provider, we can execute the command that will be responsible for creating a fork of our repository with all the necessary dependencies for the provisioning, a branch containing the name of our cluster will be created containing the information requested in the execution of the command responsible for provisioning.

![Fork VKPR repo](/img/cloud-dev/fork-repo-do.png)

First we need to run the `vkpr digitalocean cluster init` formula responsible for initializing the cluster with name, number of desired nodes, Kubernetes version, instance type, among other information questioned in the formula decision tree.

```sh 
$ vkpr digitalocean cluster init

? Project location: user
? Type the Cluster name: do-sample
? Choose the K8s version: 1.22
? Choose the K8s region: nyc1
? Choose nodes instance type: s-2vcpu-2gb
? Desired number of nodes: 2

```

After the execution, we will be able to view the series of information regarding cloning, as well as the creation of a fork of the VKPR git repository, where all the terraform templates that will be executed to provision the infrastructure are stored.

```sh
...
Switched to a new branch 'do-sample'
[do-sample 7b0dae9] [VKPR] Initial configuration defaults.yml
 1 file changed, 2 insertions(+), 2 deletions(-)
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 374 bytes | 374.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: 
remote: To create a merge request for do-sample, visit:
remote:   https://gitlab.com/repository/k8s-digitalocean/-/merge_requests/new?merge_request%5Bsource_branch%5D=do-sample
remote: 
To https://gitlab.com/repository/k8s-digitalocean.git
 * [new branch]      do-sample -> do-sample
Branch 'do-sample' set up to track remote branch 'do-sample' from 'origin'.

...
```

At this point, we can follow the pipeline by executing the initial provisioning steps by visiting the CI/CD part of our newly created repository, there we can view the variables created by VKPR regarding credentials and sensitive data, all with the greatest concern of data protection , we take the GitLab repository as an example below.

![Gitlab pipeline](/img/cloud-dev/initial-step-pipeline-do.png)

The data requested in the decision tree is stored in config/defaults.yml in the branch of our newly forked repository.

![Gitlab configs](/img/cloud-dev/configs-defaults-do.png)
:::info
To learn more about the values ​​allowed in `defaults.yml`, click [here](https://gitlab.com/vkpr/k8s-digitalocean)
:::

### Starting the deployment

So we can start the deployment pipeline or execute the `vkpr digitalocean cluster deploy` command referring to the deployment of our cluster.

```sh
$ vkpr digitalocean cluster deploy
Formula was successfully built!
Deploy job started successfully
```

We will be able to see the kubeconfig files being generated in the artifacts part at the end of the pipeline execution, but VKPR has features for extracting this file. By running the `vkpr digitalocean cluster kubeconfig` command VKPR will be able to automatically extract kubeconfig directly from the pipeline of our newly provisioned infrastructure.

:::info
To learn more about kubeconfig click [here](https://jamesdefabia.github.io/docs/user-guide/kubectl/kubectl_config/)
:::
### Dropping the cluster

Another command that VKPR makes available is to destroy the cluster provisioned through the previous steps. With the execution of the `vkpr digitalocean cluster destroy` command, the last stage of our repository pipeline will be triggered, which will bring down all the infrastructure previously provisioned.

```sh
$ vkpr digitalocean cluster deploy
Formula was successfully built!
Destroy job started successfully
```

![Complete pipeline](/img/cloud-dev/pipeline-deploy-do.png)