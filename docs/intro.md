---
sidebar_position: 1
---

# Getting started

Let's launch a local cluster using VKPR **in less than 5 minutes**.  
**Note**: You need [Docker](https://www.docker.com/) installed for this to work.

## Get VKPR

The VKPR CLI tool will do its best to hide its internals (including Ritchie).

```bash
# Install the VKPR
curl -fsSL https://get.vkpr.net/ | bash
# Create alias
alias vkpr="rit vkpr"
```
:::info Info
Optionally you can use VKPR internal tools by changing PATH:
```bash
export PATH=$PATH:~/.vkpr/bin
```
:::
## Usage

Try yourself to use VKPR following the next steps:

### Create a cluster

After installing VKPR, you may be creating the Kubernetes Cluster in your environment for testing as a production environment.

To do that, you can run the command:

```bash
vkpr infra up
```

You can peek into it using `k9s`:

```bash
~/.vkpr/bin/k9s
```

### Deploy a sample app

To test some application using VKPR, we will use `whoami` as an example.

For this, we will implement an ingress controller and the whoami itself:

```shell
vkpr ingress install
vkpr whoami install --default
```

Now you can test this sample application with a simple `curl` command:

```shell
curl whoami.localhost:8000
# OR 
curl -H "Host: whoami.localhost" localhost:8000
```

:::caution Warn
Use the second form if `whoami.localhost` does not resolve to `127.0.0.1`.
:::

### Discard cluster

After all tests, if you want to destroy the created cluster, you may discard his with a single command:

```bash
vkpr infra down
```

## A brief explanation

Each of VKPR's CLI commands is called a formula (implemented using Ritchie).

- `vkpr infra up` formula starts a local kubernetes cluster using [k3d](https://k3d.io/).
- 
- `vkpr ingress install` formula deploys an ingress controller nginx, in this case exposed to localhost in ports 8000 (http) and 8001 (https).
- 
- `vkpr whoami install` formula deploys a sample application with a valid ingress configuration.
