---
sidebar_position: 3
sidebar_label: Desenvolvimento em nuvem
title: Desenvolvimento em nuvem
---


# Desenvolvimento em nuvem

O VKPR tem como objetivo ser um facilitador quando o assunto é provisionamento e infraestrutura, ele foi criado pra ser uma ferramenta que possui as caracteristicas do formato GitOps onde toda sua infraestrutura pode ser gerenciada através de um repositório git.

Através das ferramentas de CI/CD criamos módulos do Terraform para provisionamento na AWS do Elastic Kubernetes Service (EKS) e Digitalocean além de todas a suas dependências.

Esses módulos são responsáveis por fazer a comunicação do VKPR com nossos repositório e execução de pipelines para o provisionamento via terraform.

:::tip Terrafom Module | 
Para saber mais sobre os módulos Terraform:
 - [terraform-aws-eks](https://gitlab.com/vkpr/terraform-aws-eks)
 - [terraform-digitalocean-cluster](https://gitlab.com/vkpr/terraform-digitalocean-cluster)
 - [terraform-kubernetes-kubeconfig](https://gitlab.com/vkpr/terraform-kubernetes-kubeconfig)   
 - [terraform-kubernetes-rbac](https://gitlab.com/vkpr/terraform-kubernetes-rbac) 
:::