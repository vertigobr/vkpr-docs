---
sidebar_position: 1
---

# Getting started

Let's launch a local cluster using VKPR **in less than 5 minutes**. 

Note: you need [Docker](https://www.docker.com/) for this to work.

## VKPR quick install

You can use our ready-to-use install script:

```shell
curl -fsSL https://get.vkpr.net/ | bash
alias vkpr="rit vkpr"
```

Optionally you can use VKPR internal tools by changing PATH:

```shell
export PATH=$PATH:~/.vkpr/bin
```

## Launch a new local cluster

You can now launch a local kubernetes cluster using the quickest shortcut:

```shell
vkpr infra up
```

You can peek into it using `k9s`:

```shell
~/.vkpr/bin/k9s
```

## Deploy a sample app

You can deploy an ingress controller and a sample application:

```shell
vkpr ingress install
vkpr whoami install --default
```

You can test this sample application with a simple `curl` command (use the second form if `whoami.localhost` does not resolve to `127.0.0.1`):

```shell
curl whoami.localhost:8000
# OR 
curl -H "Host: whoami.localhost" localhost:8000
```

## A brief explanation



Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
