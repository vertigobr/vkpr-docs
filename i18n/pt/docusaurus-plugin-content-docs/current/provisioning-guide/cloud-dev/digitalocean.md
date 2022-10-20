---
sidebar_position: 2
sidebar_label: DigitalOcean
title: DigitalOcean
slug: /cloud-dev/digitalocean
---

## Provisionando com  DigitalOcean

Outra vantagem que o VKPR oferece é a possibilidade de provisionar, de forma análoga ao AWS EKS, utilizando a DigitalOcean como cloud provider, podemos executar o comando que ficara responsável por criar um fork de nosso repositório com todas as dependencias necessarias para o provisionamento, uma branch contendo o nome de nosso cluster será criada contendo as informações solicitadas na execução do comando responsável pelo provisionamento.

![Fork VKPR repo](/img/cloud-dev/fork-repo-do.png)

Primeiro precisamos executar a fórmula `vkpr digitalocean cluster init` responsável por inicializar o cluster com nome, quantidade de nós desejados, versão do kubernetes , tipo de instancia, dentre outras informações questionadas na árvore de decisões da fórmula.

```sh 
$ vkpr digitalocean cluster init

? Project location: user
? Type the Cluster name: do-sample
? Choose the K8s version: 1.22
? Choose the K8s region: nyc1
? Choose nodes instance type: s-2vcpu-2gb
? Desired number of nodes: 2

```

Após a execução poderemos visualizar a série de informações referentes a clonagem, bem como a criação de um fork do repositório git do VKPR, onde estão armazenados todos os templates terraform que serão executados para provisionar a infraestrutura.

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

Nesse momento ja podemos acompanhar a pipeline executando as steps de iniciais de provisionamento visitando a parte de CI/CD de nosso repositório recem criado, la poderemos visualizar as variáveis criadas pelo VKPR referentes a credenciais e dados sensiveis tudo com a maior preocupação de proteção aos dados, tomamos como exemplo abaixo o repositório GitLab.

![Gitlab pipeline](/img/cloud-dev/initial-step-pipeline-do.png)

Os dados solicitados na árvore de decisões esses ficam armazenados em config/defaults.yml na branch de nosso repositório recém forkado.

![Gitlab configs](/img/cloud-dev/configs-defaults-do.png)
:::info
To learn more about the values ​​allowed in `defaults.yml`, click [here](https://gitlab.com/vkpr/k8s-digitalocean)
:::

### Iniciando o deploy


Assim ja poderemos iniciar a pipeline de deploy ou executar o comando `vkpr digitalocean cluster deploy` referente ao deploy de nosso cluster.


```sh
$ vkpr digitalocean cluster deploy
Formula was successfully built!
Deploy job started successfully
```
Poderemos visualizar o arquivos de kubeconfig sendo gerado na parte de artefatos ao final da execução da pipeline, porém o VKPR dispõe de funcionalidades para a extração deste arquivo. Executando o comando `vkpr digitalocean cluster kubeconfig`  o VKPR será capáz de extrair automaticamente o kubeconfig diretamente da pipeline de nossa infraestrutura recém provisionada. 

:::info
Para saber mais sobre o kubeconfig clique [aqui](https://jamesdefabia.github.io/docs/user-guide/kubectl/kubectl_config/)
:::

### Derrubando o cluster

Outro comando que o VKPR disponibiliza é o de destruição do cluster provisionado através dos passos anteriores. Com a execução do comando `vkpr digitalocean cluster destroy` será disparada a ultima etapa da pipeline de nosso repositório que irá por abaixo toda a infraestrutura provisionada anteriormente.

```sh
$ vkpr digitalocean cluster deploy
Formula was successfully built!
Destroy job started successfully
```

![Complete pipeline](/img/cloud-dev/pipeline-deploy-do.png)