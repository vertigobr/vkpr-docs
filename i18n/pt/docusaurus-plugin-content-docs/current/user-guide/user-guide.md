---
sidebar_position: 1
sidebar_label: Noções básicas sobre VKPR
title: Noções básicas sobre VKPR
slug: /basics
---

# Noções básicas sobre VKPR

Adotar o Kubernetes é uma missão desafiadora para empresas de qualquer tamanho - tem uma curva de aprendizado íngreme e profissionais qualificados são muito difíceis de encontrar. Embora as ofertas de Kubernetes gerenciadas pelos fornecedores de nuvem sejam um grande passo em uma boa direção, ainda é difícil encontrar a melhor maneira de provisioná-las e mantê-las.

Uma vez provisionado, é ainda mais difícil passar de um cluster básico para um pronto para produção: quais ferramentas e configurações são necessárias para monitoramento, segurança, registro em log ou backup? Como posso automatizar a configuração deles de maneira simples e repetível?

## O que é VKPR

O VKPR foi projetado para tornar o Kubernetes mais fácil de usar. É composta por:

- Uma CLI muito limpa com uma sintaxe simples
- Automações e pipelines prontos para uso que facilitam sua vida
- Componentes de código aberto de terceiros

O VKPR foi organizado de forma a fornecer um Kubernetes pronto para produção com o mínimo de esforço, bem como um ambiente de desenvolvimento local rápido que pode ser facilmente descartado.

## Fluxo de trabalho do desenvolvedor

O VKPR oferece suporte a fluxos de trabalho convenientes para um desenvolvedor que precisa confiar no Kubernetes, mas deseja evitar sua complexidade.

Coisas que você pode fazer com o VKPR funcionando como uma ferramenta de desenvolvimento local:

- Provisione clusters locais do Kubernetes que podem ser descartados facilmente (usando `k3d`) &#9989;
- Implantar componentes VKPR localmente &#9989;
- Execute um registro privado local do Docker *e* um espelho de registro local (cache de pull de imagem para kubernetes) &#9989;

Coisas que você pode fazer com o VKPR funcionando como uma ferramenta de desenvolvimento remoto:

- Provisione clusters Kubernetes remotos simples que podem ser descartados facilmente (usando a DigitalOcean como provedor) &#10060;
- Implantar componentes VKPR remotamente &#10060;

...

## Fluxo de trabalho de implantação

O VKPR oferece suporte a fluxos de trabalho de autoatendimento convenientes para provisionar e configurar clusters Kubernetes prontos para produção. 
O VKPR também impõe um fluxo de trabalho GitOps para automação de provisionamento.

- Provisione clusters do AWS EKS Kubernetes a partir de uma definição declarada (repositórios GitOps) &#9989;
- Implantar componentes VKPR remotamente &#9989;

- Elimine os pipelines do GitLab para uma abordagem de reconciliação de pull para componentes (Argo ou Flux) &#10060;
