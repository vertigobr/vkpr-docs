---
sidebar_position: 1
---

# Começando no VKPR

Vamos iniciar um cluster local usando VKPR **em menos de 5 minutos**.
**Observação**: você precisa do [Docker](https://www.docker.com/) instalado para que isso funcione.

## Instalando o VKPR

O VKPR CLI fará o possível para ocultar seus componentes internos (incluindo Ritchie).

```bash
# Instala o VKPR
curl -fsSL https://get.vkpr.net/ | bash
# Cria o alias do VKPR
alias vkpr="rit vkpr"
```

:::info Informação
Opcionalmente, você pode utilizar as ferramentas internas do VKPR alterando o PATH:
```bash
export PATH=$PATH:~/.vkpr/bin
```
:::
## Uso

Para começar no VKPR siga as próximas etapas:

### Criando um cluster

Após instalar o VKPR, você pode estar criando o Kubernetes Cluster em seu ambiente para teste como um ambiente de produção.

Para fazer isso, você pode executar o comando:

```bash
vkpr infra up
```

### Instalando um aplicação de amostra

Para instalar alguma aplicação usando VKPR, usaremos `whoami` como exemplo.

Para isso, implementaremos um ingressController e o próprio whoami:

```shell
vkpr ingress install --default
vkpr whoami install --default
```

Agora você pode testar este aplicativo de amostra com um simples comando `curl`:

```shell
curl whoami.localhost:8000
# ou 
curl -H "Host: whoami.localhost" localhost:8000
```

:::caution Cuidado
Use a segunda forma se `whoami.localhost` não resolver para `127.0.0.1`.
:::

### Descartar cluster

Após todos os testes, se você quiser destruir o cluster criado, você pode descartar-lo com um único comando:

```bash
vkpr infra down
```

## Uma breve explicação

Cada um dos comandos do VKPR é chamado de fórmula (implementada usando Ritchie).

- `vkpr infra up` inicia um cluster kubernetes local usando [k3d](https://k3d.io/).
- `vkpr ingress install` implanta um ingressController nginx, neste caso exposto ao localhost nas portas 8000 (http) e 8001 (https).
- `vkpr whoami install` implanta uma aplicação de amostra.
