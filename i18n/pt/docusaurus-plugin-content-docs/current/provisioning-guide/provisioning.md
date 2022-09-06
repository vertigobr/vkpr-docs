---
sidebar_position: 1
---

# Provisionamento básico

O VKPR tem como objetivo ser um facilitador para o provisionamento de infraestrutura garantindo em determinadas implantações o modo [GitOps](https://about.gitlab.com/topics/gitops/). Sua meta é abstrair a maior quantidade de informações do usuário e construir uma estrutura baseada no cenário ideal de suas ferramentas.

Através do VKPR você pode iniciar um ambiente de desenvolvimento local e testar sua aplicação antes de implanta-la em algum cloud provider.

## Desenvolvimento e provisionamento local

Para o provisionamento da infraestrutura local, é usada a ferramenta [`k3d`](https://k3d.io/v5.4.5/) que é um empacotador leve para executar k3s (distribuição mínima do Kubernetes do Rancher Lab) no [Docker](https://www.docker.com/).

Saiba mais em [Local Development](/docs/provisioning-guide/local-dev)

## Desenvolvimento em nuvem

O provisionamento em nuvem é fornecido para construir toda a sua infraestrutura em sua nuvem por meio de uma abordagem GitOps. Escrito em `Terraform` com pipelines `Gitlab`, qualquer alteração que você queira fazer no cluster, haverá um arquivo de configuração como fonte de informação. Alterá-lo refletirá todas as alterações em sua nuvem.

Saiba mais em [Cloud Development](docs/provisioning-guide/cloud-dev/aws-eks)

:::info Formula
  Para ver os comandos de infraestrutura em nuvem, clique [aqui](/docs/commands/aws/eks/init)
:::