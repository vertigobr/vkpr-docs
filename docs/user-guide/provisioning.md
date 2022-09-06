---
sidebar_position: 3
sidebar_label: Provisioning
title: Provisioning
slug: /provisioning
---

# Provisioning

## Deploying a web service

Let's assume that we already have a working Kubernetes cluster in AWS and we need to be uploading such applications:

- nginx-ingress: A LoadBalancer to expose the application outside the cluster.
- whoami: A simple web server.
- external-DNS: Will be responsible for replicating the address in the internet used by the application.
- cert-manager: You will be responsible for generating the certificates used to use the application in HTTPS.

With Kubeconfig already associated with your context, you will run the following command:

### Installing nginx-ingress

```txt
➜ vkpr ingress install
Formula was successfully built!

? Do you will use SSL?  [Use arrows to move, type to filter, ? for more help]
> false
  true

? Dry-run ?  [Use arrows to move, type to filter, ? for more help]
> false
  true

==============================
VKPR Ingress Install Routine
==============================
....
```

### Installing whoami

```txt
➜ vkpr whoami install
Formula was successfully built!

? Type the Whoami domain: [? for help] (localhost) test.vkpr.net

? Secure ?  [Use arrows to move, type to filter, ? for more help]
> false
  true

? Do you will use SSL?  [Use arrows to move, type to filter, ? for more help]
> false
  true

? Dry-run ?  [Use arrows to move, type to filter, ? for more help]
> false
  true

==============================
VKPR Whoami Install Routine
Domain: whoami.test.vkpr.net
Secure: true
Namespace: vkpr
Ingress Controller: nginx
==============================
....
```

### Installing external-dns

```txt
➜ vkpr external-dns install aws
Formula was successfully built!

? Type the external-dns domain filter: [? for help] (localhost) test.vkpr.net

? Dry-run ?  [Use arrows to move, type to filter, ? for more help]
> false
  true

==============================
VKPR External-DNS Install AWS Routine
==============================
....
```
### Installing cert-manager

```txt
➜ vkpr cert-manager install aws
Formula was successfully built!

? Type your email to use to generate certificates:  [Use arrows to move, type to filter, ? for more help]
> default@vkpr.com
  Type other email

? What is the default cluster issuer ?  [Use arrows to move, type to filter, ? for more help]
  staging
> production

? What solver do you want to use ?  [Use arrows to move, type to filter, ? for more help]
  HTTP01
> DNS01

? Dry-run ?  [Use arrows to move, type to filter, ? for more help]
> false
  true

? Type your Hostedzone id from Route53:   [Use arrows to move, type to filter, ? for more help]
> Type another Hostedzone id

==============================
VKPR Cert-manager Install AWS Routine
Email: default@vkpr.com
Issuer Type: production
Issuer Solver: DNS01
Namespace: cert-manager
==============================
....
```

:::tip Tips
When running a command using a cloud provider, it will ask for credentials to connect to the provider. The next time you need to use another application on the same provider, the values will be saved and you will not need to specify them again.

If you want the credentials to be deleted, you need to run the following command:
`rit delete credential`
:::

## Using VKPR Values

If you want to save the state of your applications, rewrite the default values of the formulas and not always need to go through the PrecisionTree of the formulas, we recommend that you use VKPR Values to deploy all the desired applications.

### Creating the values

```yaml title=" vkpr.yaml"
global:
  domain: test.vkpr.net
  secure: true
  provider: aws
ingress:
  enabled: true
cert-manager:
  enabled: true
  email: "default@vkpr.com"
  issuer:
    type: "production"
    solver: "DNS01"
external-dns:
  enabled: true
```
Each application's key-values specification is described in the application's documentation.

In VKPR Values, I am specifying that all applications that I will be using will use the `test.vkpr.net` domain and will be using the HTTPS protocol. And all other formula-specific settings are described in their respective node.

For me to deploy the applications, it is necessary to run the commands as before, but with the following flag:

```bash
➜ vkpr <application-name> install --default
```

The `--default` flag will skip all inputs that would be requested and rewritten by the configuration file that was created.
If you want more control over the applications, you can specify the values also by specific flags for each formula.

To see the available flags for each formula, run the following command:

```bash
➜ vkpr <application-name> install --help
```

:::danger Take care
VKPR only finds the values file that is in your current directory that the command was run.<br/>
Example: `$(pwd)/vkpr.yaml`

---

The value of VKPR values is used for **ALL** formulas, so if you do not want this application to use a value already defined in the values of VKPR, enter it manually with the formula flag.
:::

## Testing application

After you have installed all of the above applications, you may be using the application that was deployed for testing.

In your browser or with a command like `curl`, make a request to the application at the address used:

```txt
Address: whoami.test.vkpr.net
```