---
sidebar_position: 3
---

# Using VKPR Values


In the previous examples, we tested the applications by going through the decision tree that VKPR offers. One of the tools that is used by VKPR to abstract the values ​​provided by both the decision tree and flags, serial or `vkpr.yaml`.


If you want to save the state of your applications, rewrite the default values ​​of formulas, and don't always have to go through the decision tree of formulas, we recommend that you use VKPR Values ​​to deploy all the applications you want.

:::danger Caution!
VKPR only finds the values ​​file that is in the current directory where the command was executed.<br/>
Example: `$(pwd)/vkpr.yaml`

:::

## Creating the VKPR Values

VKPR values ​​is exclusively written in `YAML` based on a node structure.

```yaml title="structure"

parent-node:    # Application 
  child-node:   # Argument
  ...

```
:::tip Tip

Specifying key values ​​for each application is described in the application's documentation.

::::

### Globals

In VKPR Values, you will be specifying the values ​​to be used in the installation of the application, some of the configurations can be defined in the global domains as the `global` option that will serve the application if the same configuration is not defined in a child node (some of values ​​will not be able to be specified in the application).

Here is the list of key values ​​in the `global` option

- `domain` - specifies the domain that will be used in the application. The default value is `localhost`.
- `secure` - specifies whether the application will be exposed by the ingressControler as HTTP/HTTPS. The default value is `false`.
- `ingressClassName` - specifies which ingressControler will be responsible for exposing the application. Allowed values: `kong` and `nginx` The default value is `nginx`.
- `namespace` - specifies the namespace that will be used for installing applications. The default value is `vkpr`.
- `provider` - (Optional) specifies the provider the application should support. Allowed values: `aws`, `digitalocean` and `okteto`.

### Credentials

VKPR Values ​​also, like `global`, provides the option to configure cloud provider credentials via the `credentials` node.

```yaml title="vkpr.yaml"
credentials:
  aws:
    accessKey: ""  
    secretKey: ""
    region: ""
  digitalocean:
    apiToken: ""
```
:::caution Relevant!

Using credentials in this field only works using the formula in [`vkpr apply`](/docs/commands/apply).

:::

## Precedence of values

There is a precedence of values ​​which VKPR follows, some of the values ​​have their own options within application nodes which will have a higher precedence than the global values. The values ​​they have between `global` and applications are: `ingresClassName` and `namespace`.

```yaml title="Precedence example"
global:
  namespace: "foo" 
whoami:
  namespace: "bar" 
# The whoami application will be installed in the "bar" namespace
```

Generally speaking, it's not just `vkpr.yaml` that takes precedence, all values ​​that vkpr receives take precedence.

The order of precedence from minor to major is as follows:

- `default` - Default value if not specified previously.
- `env` - (environment variable) variable values ​​of your environment.
- `VKPR values` - (vkpr.yaml) values ​​assigned by having or specifying the VKPR Values ​​configuration file in your default directory.
- `input` - Values ​​defined in the decision tree or assigned by flags.

## Example VKPR Values

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
