---
sidebar_position: 1
sidebar_label: Utilizando VKPR Values
title: Utilizando VKPR Values
slug: /provisioning/values
---

# Utilizando VKPR Values

Nos exemplos anteriores, testamos as aplicações passando pela árvore de decisão que o VKPR oferece. Uma das ferramentas que é utilizado pelo VKPR para abstrair os valores fornecidos tanto pela árvore de decisão, quanto por flags, seria o `vkpr.yaml`.

Se você deseja salvar o estado de seus aplicativos, reescrever os valores padrão das fórmulas e nem sempre precisar passar pela árvore de decisão das fórmulas, recomendamos que você use Valores VKPR para implantar todos os aplicativos desejados.

:::danger Cuidado!
O VKPR encontra apenas o arquivo de values que está no diretório atual em que o comando foi executado.<br/>
Exemplo: `$(pwd)/vkpr.yaml`

:::

## Criando o VKPR Values

O VKPR values é exclusivamente escrito em `YAML` se baseando em uma estrutura de nós. 

```yaml title="estrutura"
nó-pai:      # Aplicação 
  nó-filho:  # Argumento
  ...
```

:::tip Dica
A Específicação de valores-chave de cada aplicativo é descrita na documentação do aplicativo.
::::

### Globals

No VKPR Values, você estará Específicando os valores para serem utilizados na instalação da aplicação, algumas das configurações podem ser definidas nos dominios globais como a opção `global` que servirá a aplicação caso a mesma configuração não esteja definida em um nó-filho (algum dos valores não conseguirão ser Específicados na aplicação). 

Segue a lista de valores-chaves na opção do `globals`

- `domain` - Específica o domínio que será utilizado na aplicação. O valor padrão é `localhost`.
- `secure` - Específica se a aplicação será exposta pelo ingressControler como HTTP/HTTPS. O valor padrão é `false`.
- `ingressClassName` - Específica qual ingressControler será responsável por expor a aplicação. Valores permitidos: `kong` e `nginx`  O valor padrão é `nginx`. 
- `namespace` - Específica o namespace que será utilizado para a instalação das aplicações. O valor padrão é `vkpr`.
- `provider` - (Opcional) Específica o provider que a aplicação deve comportar. Valores permitidos: `aws`, `digitalocean` e `okteto`.

### Credentials

O VKPR Values também, assim como o `global`, fornece a opção de configurar as credenciais dos cloud providers através do nó `credentials`.

```yaml title="vkpr.yaml"
credentials:
  aws:
    accessKey: ""  
    secretKey: ""
    region: ""
  digitalocean:
    apiToken: ""
```
:::caution Importante!
A utilização das credenciais neste campo só funciona utilizando a fórmula do [`vkpr apply`](/docs/commands/apply).
:::

## Precedência de valores

Há uma precedencia de valores a qual o VKPR segue, algum dos valores possuem suas próprias opções dentro dos nós das aplicações que terão uma precedência maior que os valores globais. Os valores que possuem entre o `global` e as aplicações são: `ingresClassName` e `namespace`.

```yaml title="Exemplo de precedência"
global:
  namespace: "foo" 
whoami:
  namespace: "bar" 
# A aplicação whoami sera instalada na namespace "bar"
```

Em linhas gerais não é somente o `vkpr.yaml` que tem uma precedência, todos os valores os quais o vkpr recebe tem sua precedência. 

Segue a ordem de precedência do menór para o maior:

- `default` - Valor atribuido padrão caso não seja Específicado anteriormente.
- `env` - (variável de ambiente) valores de váriavel do seu ambiente.
- `VKPR values` - (vkpr.yaml) valores atribuidos ao ter ou Específicar o arquivo de configuração do VKPR Values no seu diretório padrão. 
- `input` - Valores definidos na árvore de decisões ou atribuidos por flags.

## Exemplo VKPR Values

```yaml title="vkpr.yaml"
global:
  domain: localhost
  secure: false
  ingressClassName: nginx
  namespace: vkpr
  provider: "" 
credentials:
  aws:
    accessKey: "" 
    secretKey: ""
    region: ""
  digitalocean:
    apiToken: ""
```
