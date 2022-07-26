## Installing Kong on Okteto with vkpr

Insert in vkpr.yaml the provider and the namespace in okteto:

```yaml
# vkpr.yaml
---
global:
  provider: okteto
```

#### For kubectl to point to the okteto namespace:

```sh
vkpr okteto init
```

#### Installing kong:

```
vkpr kong install
```

When asked about domain, enter okteto cloud domain:

Ex.:

```sh
? Type the Kong domain:  cloud.okteto.net
? Secure ?  false
? Kong Mode: (Hybrid only available in Kong Enterprise)  standard
? Type the full path to the license:  (empty for free mode)
? Type the RBAC Admin Password. Has no effect on hybrid data plane installations:  vkpr123
? HA ?  false
? Dry-run ?  false
```

The following endpoints will be generated in the okteto cloud:

```
https://kong-kong-admin-<yourNamespace>.cloud.okteto.net/
https://kong-kong-manager-<yourNamespace>.cloud.okteto.net/
https://kong-kong-portal-<yourNamespace>cloud.okteto.net/
https://kong-kong-portalapi-<yourNamespace>.cloud.okteto.net/
https://kong-kong-proxy-<yourNamespace>.cloud.okteto.net/
```

## See Also

- [VKPR kong install](/docs/commands/kong/install) - To learn more about installing kong.