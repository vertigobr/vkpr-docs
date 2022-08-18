---
sidebar_position: 2
---

# Setup VKPR


To be using the VKPR CLI, the user must have the [Docker](https://www.docker.com/) and [Git](https://git-scm.com/) installed in their local environment. It is used in certain formulas to structure the applications and create the local cluster.

:::danger Take care
  Currently VKPR was specifically designed to be used in UNIX environments, so **VKPR won't support being used in Windows distributions**.
:::

## Installing VKPR CLI

VKPR was built on top of Ritchie, but he abstracts most of his interaction with him. To install it, you must run the following command.

```bash
curl -fsSL https://get.vkpr.net/ | bash
echo 'alias vkpr="rit vkpr"' >> ~/.bashrc # If you use another Unix Shell, specify your specific source
```

Running the above command will run a script that will install the following tools that are used in VKPR:

- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl): The Kubernetes command-line tool, allows you to run commands against Kubernetes clusters.
- [helm](https://helm.sh/docs/intro/install/): Helm helps you manage Kubernetes applications.
- [k3d](https://k3d.io/v4.4.8/): k3d is a lightweight wrapper to run `k3s` (Rancher Lab’s minimal Kubernetes distribution) in docker.
- [arkade](https://github.com/alexellis/arkade): arkade provides a portable marketplace for downloading CLIs and installing helm charts.
- [jq](https://stedolan.github.io/jq/): jq is a lightweight and flexible command-line JSON processor.
- [yq](https://mikefarah.gitbook.io/yq/): yq is a lightweight and portable command-line YAML processor
- [aws](https://aws.amazon.com/cli/): The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services.
- [okteto](https://www.okteto.com/): gives you free access to secure Kubernetes namespaces, fully integrated with remote development capabilities.

:::tip Tips
We recommend updating the `PATH` so that you can use these tools from the command line.
```bash
export PATH=$HOME/.vkpr/bin:$PATH
```
:::

:::note Note
We do not use local tools that have already been installed previously, VKPR is fully responsible for their structure and their necessary tools for use.
:::

## VKPR Structure

All VKPR binaries and utilities are installed in the `home` directory.  
Its structure is separated as follows:
```bash
.vkpr
|_ bin      # Application binaries directory
|__ config  # General application settings directory
|___ src    # VKPR code library
```