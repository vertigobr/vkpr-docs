---
sidebar_position: 3
---

# Provisionando

## Implantando um serviço web

Vamos supor que ja possuimos um cluster Kubernetes funcionando na AWS e precisamos fazer upload dessas aplicações:

- nginx-ingress: Um LoadBalancer para expor a aplicação fora do cluster.
- whoami: Um servidor web simples. 
- external-DNS: Será responsável por replicar o endereço na internet utilizado pelo aplicativo.
- cert-manager: Será responsável por gerar os certificados usados ​​para usar o aplicativo em HTTPS.

Com o Kubeconfig já associado ao seu contexto, você executará o seguinte comando:

### Instalando nginx-ingress

```txt
➜ vkpr ingress install
Formula was successfully built!

? Which type of LoadBalancer do you prefer ?  [Use arrows to move, type to filter, ? for more help]
> Classic
  NLB

==============================
VKPR Ingress Install Routine
==============================
....
```

### Instalando whoami

```txt
➜ vkpr whoami install
Formula was successfully built!

? Type the Whoami domain: [? for help] (localhost) test.vkpr.net

? Secure ?  [Use arrows to move, type to filter, ? for more help]
> true
  false

==============================
VKPR Whoami Install Routine
Whoami Domain: whoami.test.vkpr.net
Ingress Controller: nginx
==============================
....
```

### Instalando external-dns

```txt
➜ vkpr external-dns install
Formula was successfully built!

? Type your provider:  [Use arrows to move, type to filter, ? for more help]
> aws
  digitalocean
  powerDNS

? Provider key not found, please provide a value for aws accesskeyid:
? Provider key not found, please provide a value for aws secretaccesskey:
? Provider key not found, please provide a value for aws region:

==============================
VKPR External-DNS Install Routine
Provider: aws
==============================
....
```
### Instalando cert-manager

```txt
➜ vkpr cert-manager install
Formula was successfully built!

? Type your email to use to generate certificates:  [Use arrows to move, type to filter, ? for more help]
> default@vkpr.com
  Type other email

? What is the default cluster issuer ?  [Use arrows to move, type to filter, ? for more help]
  staging
> production
  custom-acme

? What solver do you want to use ?  [Use arrows to move, type to filter, ? for more help]
  HTTP01
> DNS01

? What cloud dns provider do you will use ?  [Use arrows to move, type to filter, ? for more help]
> aws
  digitalocean
  custom-acme

? Type your Hostedzone id from Route53: [? for more help]

==============================
VKPR Cert-manager Install Routine
Provider: aws
Issuer Solver: DNS01
Email: default@vkpr.com
==============================
....
```

:::tip Dica
Ao executar um comando usando um provedor de nuvem, ele solicitará credenciais para se conectar . Na próxima vez que você precisar usar outro aplicativo no mesmo provedor, os valores serão armazenados e você não precisará especificá-los novamente.

Se você deseja que suas credenciais sejam excluídas, você precisa executar o seguinte comando:
`rit delete credential`
:::

## Utilizando VKPR Values

Se você deseja salvar o estado de seus aplicativos, reescrever os valores padrão das fórmulas e nem sempre precisar passar pelo PrecisionTree das fórmulas, recomendamos que você use Valores VKPR para implantar todos os aplicativos desejados.

### Criando o VKPR Values

```yaml title=" vkpr.yaml"
global:
  domain: test.vkpr.net
  secure: true
  ingress:
    loadBalancerType: "Classic"
  cert-manager:
    email: default@vkpr.com
    solver: DNS01
    provider: aws
  external-dns:
    provider: aws
```
A especificação de valores-chave de cada aplicativo é descrita na documentação do aplicativo.

Em Valores VKPR, estou especificando que todos os aplicativos que usarei usarão o domínio `test.vkpr.net` e usarão o protocolo HTTPS. E todas as outras configurações específicas de fórmulas são descritas em seus respectivos nós.

Para  implantar as aplicações, é necessário executar os comandos como antes, mas com o seguinte sinalizador:

```bash
➜ vkpr <application-name> install --default
```

A flag `--default` ignorará todas as entradas que seriam solicitadas e reescritas pelo arquivo de configuração que foi criado.
Se você deseja mais controle sobre os aplicativos, pode especificar os valores também por flags específicas para cada fórmula.


Para ver as flags disponíveis para cada fórmula, execute o seguinte comando:

```bash
➜ vkpr <application-name> install --help
```

:::danger Cuidado
O VKPR encontra apenas o arquivo de values que está no diretório atual em que o comando foi executado.<br/>
Exemplo: `$(pwd)/vkpr.yaml`

---

O valor do VKPR values  é usado para **TODAS** fórmulas, portanto, se você não quiser que este aplicativo use um valor já definido nos valores de VKPR, insira-o manualmente com o sinalizador de fórmula.
:::

## Testando aplicações

Após ter instalado tudo sobre a aplicação, você pode utilizar a aplicação para teste.

No seu navegador ou com um comando como `curl`, faça uma requisição ao aplicativo no endereço utilizado:

```txt
Address: whoami.test.vkpr.net
```