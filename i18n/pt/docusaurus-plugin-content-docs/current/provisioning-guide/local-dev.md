---
sidebar_position: 2
sidebar_label: Desenvolvimento Local
title: Desenvolvimento Local
slug: /provisioning/dev/local
---

# Desenvolvimento Local

Para começar a desenvolver localmente com o VKPR será necessário inicializar um cluster kubernetes para hospedar nossa aplicação.

## Inicializando o cluster pelo VKPR

No VKPR existem dois comandos que são responsáveis pela inicialização do cluster:

- vkpr infra up  	
- vkpr infra start

A diferença entre eles é dada pela árvore de decisões que é inicializada ao utilizar o `vkpr infra start` permitindo a alteração de valores como as portas padrão, quantidade de worker nodes entre outros.

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
Para saber mais sobre o `vkpr infra start`, clique [aqui](/docs/commands/infra/start).
:::


Utilizando `vkpr infra up` o cluster será inicializado com os valores padrão.

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
Para saber mais sobre o `vkpr infra up`, clique [aqui](/docs/commands/infra/up)
:::

Terminada a execução de um dos comandos anteriores o cluster será inicializado e estará pronto para hospedar a aplicação.

#### Registry

Mais uma das funcionalidade seria o VKPR também disponibilizar um registry privado pra ser utilizado juntamente com o cluster e um mirror registry que cacheia as imagens baixadas para compor os deployments, é uma aplicação do lado do servidor sem estado e altamente escalável que armazena e permite distribuir imagens do pod.

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

### Como ele funciona?

Através do k3d será criada toda a estrutura de containers para kubernetes resultando na criação de nosso cluster local que terá o nome `k3d-vkpr-local` onde todas as aplicações do VKPR serão instaladas.

```sh
$ kubectl config get-contexts
CURRENT   NAME               CLUSTER            AUTHINFO                     NAMESPACE 
*         k3d-vkpr-local     k3d-vkpr-local     admin@k3d-vkpr-local 
```


:::info Formula
Para ver os comandos provisionamento local, clique [aqui](/docs/commands/infra/start)
:::

### Finalizando o cluster

Um outro comando muito importante do VKPR é o `vkpr infra stop`, este comando é responsável pelo encerramento do cluster k8s, excluindo todos os recursos criados dentro do cluster `k3d-vkpr-local`

```sh
$ vkpr infra stop
Added delete_registry by default: false
==============================
VKPR Local Infra Stop Routine
==============================
INFO[0000] Deleting cluster 'vkpr-local'                
INFO[0001] Deleting image volume 'k3d-vkpr-local-images' 
...
```

:::info Formula
Para saber mais sobre o `vkpr infra stop`, clique [aqui](/docs/commands/infra/stop)
:::