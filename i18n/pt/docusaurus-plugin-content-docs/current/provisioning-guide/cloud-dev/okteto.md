---
sidebar_position: 2
sidebar_label: Okteto
title: Okteto
slug: /provisioning/dev/cloud/okteto
---

## Provisionando com Okteto
### Instalando Kong no Okteto com VKPR

O VKPR também possui um ambiente de desenvolvimento em nuvem para teste de provisionamento, esse ambiente é o [Okteto](https://www.okteto.com/). 

O Okteto é um projeto de código aberto que fornece uma experiência de desenvolvimento em nuvem para aplicações em execução no Kubernetes de forma gratuita. O VKPR usa o Okteto para mudar o contexto kubernetes local para o contexto do Cloud Okteto e assim simular o provisionamento em núvem. O Okteto possui algumas restrições em seu uso e por essa razão não é recomendado o seu uso em produção.

### Usando o contexto do Okteto

Precisaremos mudar nosso provider padrão para o Okteto, para isso insira no `vkpr.yaml` o provider okteto:

```yaml
# vkpr.yaml
---
global:
  provider: okteto
```

Para para conseguirmos fazer a instalação do Kong na namespace do contexto do Okteto, executaremos o `vkpr okteto init`, esse comando será responsável pela mudança de contexto e namespace de nosso kubectl:

```sh
$ vkpr okteto init
Formula was successfully built!
 ✓  Using context your-namespace @ cloud.okteto.com
 ✓  Namespace 'your-namespace' selected
 ✓  Using context your-namespace @ cloud.okteto.com
 ✓  Updated kubernetes context 'cloud_okteto_com/your-namespace' in '[/home/user/.kube/config]'
```

### Instalando Kong

Para efetuar a instalação da API Gatway `Kong` utilizaremos o `vkpr kong install`, a execução deste comando iniciará a árvore de decisões que nos questionará sobre algumas especificações, para instalar o Kong no okteto cloud precisaremos utilizar o domínio `cloud.okteto.net` tal como no exemplo abaixo:

```sh
vkpr kong install
Formula was successfully built!
? Type the Kong domain:  cloud.okteto.net
? Secure ?  false
? Kong Mode: (Hybrid only available in Kong Enterprise)  standard
? Type the full path to the license:  (empty for free mode)
? Type the RBAC Admin Password. Has no effect on hybrid data plane installations:  vkpr123
? HA ?  false
? Dry-run ?  false
```

:::note Tip
Você também pode utilizar a flag `--default`
:::

Os seguintes endpoints serão gerados no Okteto Cloud:

```
https://kong-kong-admin-your-namespace.cloud.okteto.net/
https://kong-kong-manager-your-namespace.cloud.okteto.net/
https://kong-kong-portal-your-namespacecloud.okteto.net/
https://kong-kong-portalapi-your-namespace.cloud.okteto.net/
https://kong-kong-proxy-your-namespace.cloud.okteto.net/
```
Você pode consultar esses endpoints visitando o [Cloud Okteto!](https://cloud.okteto.com/)

![Okteto Cloud UI](/img/cloud-dev/okteto.png)

:::info
 Para saber mais sobre a instalação do Kong, clique [aqui](/docs/commands/kong/install).
:::