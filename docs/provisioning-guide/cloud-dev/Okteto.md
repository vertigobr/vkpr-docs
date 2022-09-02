
## Installing Kong on Okteto with VKPR:


VKPR also has a cloud development environment for testing provisioning, this environment is [Okteto](https://www.okteto.com/).

Okteto is an open source project that provides a cloud development experience for applications running on Kubernetes for free. VKPR uses Okteto to change the local Kubernetes context to the Cloud Okteto context to simulate cloud provisioning. Okteto has some restrictions on its use and for that reason its use in production is not recommended.


### Using Okteto context:

We will need to change our default provider to Okteto, for that, insert in `vkpr.yaml` the okteto provider:

```yaml
# vkpr.yaml
---
global:
  provider: okteto
```

In order to install Kong in the Okteto context namespace, we will run `vkpr okteto init`, this command will be responsible for changing the context and namespace of our kubectl:

```sh
$ vkpr okteto init

Formula was successfully built!
 ✓  Using context your-namespace @ cloud.okteto.com
 ✓  Namespace 'your-namespace' selected
 ✓  Using context your-namespace @ cloud.okteto.com
 ✓  Updated kubernetes context 'cloud_okteto_com/your-namespace' in '[/home/user/.kube/config]'
```

### Installing Kong:

To install the `Kong` Gatway API we will use `vkpr kong install`, executing this command will start the decision tree that will ask us about some specifications, to install Kong on okteto cloud we will need to use the `cloud.okteto domain. net` as in the example below:

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

The following endpoints will be generated in okteto cloud:

```
https://kong-kong-admin-your-namespace.cloud.okteto.net/
https://kong-kong-manager-your-namespace.cloud.okteto.net/
https://kong-kong-portal-your-namespacecloud.okteto.net/
https://kong-kong-portalapi-your-namespace.cloud.okteto.net/
https://kong-kong-proxy-your-namespace.cloud.okteto.net/
```
You can query these endpoints by visiting [Cloud Okteto!](https://cloud.okteto.com/)

![Okteto Cloud UI](/img/cloud-dev/okteto.png)

#### See also
:::info
 To learn more about installing Kong, click [here](/docs/commands/kong/install).
:::