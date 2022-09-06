## Provisionando com AWS EKS

O VKPR possui uma série de comandos para provisionamento local e configuração de sua aplicação, porém você também pode instalar todas as suas aplicações diretamente no cluster de seu provedor na nuvem através do VKPR.

Usando uma das aplicações do VKPR o AWS EKS podemos executar o comando que ficara responsável por criar um fork de nosso repositório com todas as dependencias necessarias para o provisionamento, uma branch contendo o nome de nosso cluster será criada contendo as informações solicitadas na execução do comando responsável pelo provisionamento.

![Fork VKPR repo](/img/cloud-dev/fork-repo.png)

Primeiro precisamos executar a fórmula `vkpr aws eks init` responsável por inicializar o cluster com nome, quantidade de nós desejados, versão do kubernetes , tipo de instancia, dentre outras informações questionadas na árvore de decisões da fórmula.

```sh
$ vkpr aws eks init
Formula was successfully built!
? Project location: user
? EKS cluster name: eks-sample
? K8s version 1.21
? Choose nodes instance type: t3.small
? Desired number of nodes: 2
? Choose the capacity type from the nodes: on_demand
? Choose where to store the state of Terraform: gitlab
```

Após a execução poderemos visualizar a série de informações referentes a clonagem, bem como a criação de um fork do repositório git do VKPR, onde estão armazenados todos os templates terraform que serão executados para provisionar a infraestrutura.

```sh
...
Switched to a new branch 'eks-sample'
[eks-sample e8cb271] [VKPR] Initial configuration defaults.yml
 1 file changed, 10 insertions(+), 10 deletions(-)
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 423 bytes | 423.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: 
remote: To create a merge request for eks-sample, visit:
remote:   https://gitlab.com/repository/aws-eks/-/merge_requests/new?merge_request%5Bsource_branch%5D=eks-sample
remote: 
To https://gitlab.com/repository/aws-eks.git
 * [new branch]      eks-sample -> eks-sample
Branch 'eks-sample' set up to track remote branch 'eks-sample' from 'origin'.
...
```

Nesse momento ja podemos acompanhar a pipeline executando as steps de iniciais de provisionamento visitando a parte de CI/CD de nosso repositório recem criado, la poderemos visualizar as variáveis criadas pelo VKPR referentes a credenciais e dados sensiveis tudo com a maior preocupação de proteção aos dados, tomamos como exemplo abaixo o repositório GitLab.

![Gitlab pipeline](/img/cloud-dev/initial-step-pipeline.png)

Os dados solicitados na árvore de decisões esses ficam armazenados em config/defaults.yml na branch de nosso repositório recém forkado.

![Gitlab configs](/img/cloud-dev/configs-defaults.png)
:::info
Para saber mais sobre os valores permitidos no `defaults.yml`, clique [aqui](https://gitlab.com/vkpr/terraform-aws-eks)
:::

### Iniciando o deploy


Assim ja poderemos iniciar a pipeline de deploy ou executar o comando `vkpr aws eks deploy` referente ao deploy de nosso cluster.

```sh
$ vkpr aws eks deploy
Formula was successfully built!
Deploy job started successfully
```

Poderemos visualizar o arquivos de kubeconfig sendo gerado na parte de artefatos ao final da execução da pipeline, porém o VKPR dispõe de funcionalidades para a extração deste arquivo. Executando o comando `vkpr aws eks kubeconfig` o VKPR será capáz de extrair automaticamente o kubeconfig diretamente da pipeline de nossa infraestrutura recém provisionada. 

:::info
Para saber mais sobre o kubeconfig clique [aqui](https://jamesdefabia.github.io/docs/user-guide/kubectl/kubectl_config/)
:::
### Derrubando o cluster

Outro comando que o VKPR disponibiliza é o de destruição do cluster provisionado através dos passos anteriores. Com a execução do comando `vkpr aws eks destroy` será disparada a ultima etapa da pipeline de nosso repositório que irá por abaixo toda a infraestrutura provisionada anteriormente.

```sh
$ vkpr aws eks deploy
Formula was successfully built!
Destroy job started successfully
```

![Pipeline completa](/img/cloud-dev/pipeline-deploy.png)