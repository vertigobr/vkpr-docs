---
sidebar_position: 2
sidebar_label: Local Development
title: Local Development
slug: /provisioning/dev/local
---

# Local Development

To start developing locally with VKPR it will be necessary to initialize a Kubernetes cluster to host our application.

### Initializing the cluster from VKPR

In VKPR there are two commands that are responsible for initializing the cluster:

- vkpr infra up  	
- vkpr infra start

The difference between them is given by the decision tree that is initialized when using `vkpr infra start`, allowing the change of values ​​such as the default ports, number of worker nodes, among others.

```sh
$ vkpr infra start
? Type the HTTP listening port: 8000
? Type the HTTPS listening port: 8001
? Type the quantity of Worker Nodes: 3
? Enable Volume Mount ? false
? Enable Traefik ingress controller ? false
==============================
VKPR Local Infra Start Routine
Enabled Traefik Ingress Controller: false
...
```

:::info Formula
To learn more about `vkpr infra start`, click [here](/docs/commands/infra/start)
:::

Utilizando `vkpr infra up` o cluster será inicializado com os valores padrão

```sh
$ vkpr infra up
Added http_port by default: 8000
Added https_port by default: 8001
Added worker_nodes by default: 1
Added enable_volume by default: false
Added enable_traefik by default: false
==============================
VKPR Local Infra Start Routine
Enabled Traefik Ingress Controller: false
...
```
:::info Formula
To learn more about `vkpr infra up`, click [here](/docs/commands/infra/up)
:::

After executing one of the previous commands, the cluster will be initialized and will be ready to receive an application

#### Registry

Another difference is also the initialization of `k3d-registry.localhost` and `k3d-mirror.localhost` in `vkpr infra start`. VKPR provides a registry to be used together with the cluster and a mirror registry that caches the downloaded images to compose the deployments, it is a stateless and highly scalable server-side application that stores and allows distributing pod images.

```sh
$ vkpr infra start
...
INFO[0000] Starting Node 'k3d-registry.localhost'       
INFO[0000] Successfully created registry 'k3d-registry.localhost' 
# You can now use the registry like this (example):
# 1. create a new cluster that uses this registry
k3d cluster create --registry-use k3d-registry.localhost:6000
# 2. tag an existing local image to be pushed to the registry
docker tag nginx:latest k3d-registry.localhost:6000/mynginx:v0.1
# 3. push that image to the registry
docker push k3d-registry.localhost:6000/mynginx:v0.1
# 4. run a pod that uses this image
kubectl run mynginx --image k3d-registry.localhost:6000/mynginx:v0.1
INFO[0000] Creating node 'k3d-mirror.localhost'         
INFO[0000] Successfully created registry 'k3d-mirror.localhost' 
INFO[0000] Starting Node 'k3d-mirror.localhost'         
INFO[0000] Successfully created registry 'k3d-mirror.localhost' 
# You can now use the registry like this (example):
# 1. create a new cluster that uses this registry
k3d cluster create --registry-use k3d-mirror.localhost:6001
# 2. tag an existing local image to be pushed to the registry
docker tag nginx:latest k3d-mirror.localhost:6001/mynginx:v0.1
# 3. push that image to the registry
docker push k3d-mirror.localhost:6001/mynginx:v0.1
# 4. run a pod that uses this image
kubectl run mynginx --image k3d-mirror.localhost:6001/mynginx:v0.1
...
```

### How it works?

Through k3d, the entire structure of containers for kubernetes will be created, resulting in the creation of our local cluster that will have the name `k3d-vkpr-local` where all VKPR applications will be installed.

```sh
$ kubectl config get-contexts
CURRENT   NAME               CLUSTER            AUTHINFO                     NAMESPACE 
*         k3d-vkpr-local     k3d-vkpr-local     admin@k3d-vkpr-local 
```

:::info Formula
  To see local infrastructure commands, click [here](/docs/commands/infra/start)
:::


### Finalizing the cluster

Another very important VKPR command is `vkpr infra down`, this command is responsible for closing the k8s cluster, deleting all resources created within the `k3d-vkpr-local` cluster

```sh
$ vkpr infra down
Added delete_registry by default: false
==============================
VKPR Local Infra Stop Routine
==============================
INFO[0000] Deleting cluster 'vkpr-local'                
INFO[0001] Deleting image volume 'k3d-vkpr-local-images'
... 
```

:::info Formula
To learn more about `vkpr infra down`, click [here](/docs/commands/infra/down)
:::