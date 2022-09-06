---
sidebar_position: 2
---

# Instalação do VKPR


Para usar o VKPR CLI, o usuário deve possuir o [Docker](https://www.docker.com/) e [Git](https://git-scm.com/) instalados em seu ambiente local. Estes são utilizados em certas fórmulas para estruturar os aplicativos e criar o cluster local.

:::danger Cuidado
  Atualmente VKPR foi projetado Específicamente para ser utilizado em distribuições UNIX, então **VKPR não suporta o uso em distribuições Windows**.
:::

## Instalando VKPR CLI

VKPR foi construido em cima do Ritchie, e abstrai a maior parte de sua interação com ele. Para instalá-lo, você deve executar o seguinte comando

```bash
curl -fsSL https://get.vkpr.net/ | bash
echo 'alias vkpr="rit vkpr"' >> ~/.bashrc  # Se você estiver utilizando outro terminal Unix, especifique sua fonte
```

A execução do primeiro comando acima executara um script que instalará as seguintes ferramentas utilizadas no VKPR:

- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl): A Ferramenta de linha de comando, te permite executar comandos em clusters Kubernetes.
- [helm](https://helm.sh/docs/intro/install/): Helm te ajuda a gerenciar aplicações Kubernetes.
- [k3d](https://k3d.io/v4.4.8/): k3d é um empacotador leve para executar `k3s` (Rancher Lab’s minimal Kubernetes distribution) em docker.
- [arkade](https://github.com/alexellis/arkade): arkade fornece um marketplace portátil para baixar CLIs e instalar helm charts.
- [jq](https://stedolan.github.io/jq/): jq é uma leve e flexível ferramenta de linha de comando para processamento de JSON.
- [yq](https://mikefarah.gitbook.io/yq/): yq é uma leve e portatil ferramenta de linha de comando para processamento de YAML. 
- [aws](https://aws.amazon.com/cli/): A AWS Command Line Interface (AWS CLI) é uma ferramenta unificada para o gerenciamento de seus produtos da AWS.
- [okteto](https://www.okteto.com/): oferece acesso gratuito a namespaces Kubernetes seguros, totalmente integrados com recursos de desenvolvimento remoto.

:::tip Dicas
Recomendamos a atualização `PATH` para que você possa utilizar essas ferramentas na linha de comando.
```bash
export PATH=$HOME/.vkpr/bin:$PATH
```
:::

:::note Nota
Nós não utilizamos ferramentas locais que já tenham sido instaladas anteriormente, o VKPR é totalmente responsável por suas estruturas e suas ferramentas necessárias ao uso.
:::

## Estrutura do VKPR

Todos os binários e utilitários do VKPR são instalados no diretório `home`.
Sua estrutura é dividida da seguinte forma:
```bash
.vkpr
|_ bin          # Diretório de binários da aplicação
|__ tmp         # Diretório de armazenamento temporário da aplicação
|___ kubeconfig # Diretório de configurações do cluster da aplicação
|____ src       # Diretório de código VKPR
```