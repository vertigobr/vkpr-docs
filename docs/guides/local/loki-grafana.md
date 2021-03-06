---
id: loki-grafana
title: View applications logs with Loki and Grafana
---

This guide shows the integration between Loki and Grafana for collecting and viewing logs in a local k3d environment and some tools are prerequisites for run:

- [k3d](https://k3d.io/) >= 3.3.0
- [Helm](https://helm.sh/docs/intro/install/#helm) >= 3.0.0

## Installation and setup VKPR

The installation and configuration in this guide can be done in two ways, via [makefile](#makefile-mode) or [manual](#manual-mode). You will need to create one configuration files in this guide the [values file](https://github.com/vertigobr/vkpr/blob/master/examples/local/values-local-loki-grafana.yaml) for VKPR.

### Makefile mode

:::info
In this way the installation of the makefile is required.
:::

Makefile used in this guide (update the `VALUES_FILE` values):

```makefile title="makefile"
# Create a local k3d cluster
k3d_create:
	k3d cluster create vkpr-local -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" --k3s-server-arg "--no-deploy=traefik"

# Create a local k3d cluster
k3d_delete:
	k3d cluster delete vkpr-local

# Setup VKPR repository in Helm
setup_vkpr:
	helm repo add vertigo https://charts.vertigo.com.br
	helm repo update

# Installation and setup VKPR
install_vkpr:
	@echo "KUBECONFIG=$(KUBECONFIG)"
	helm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr

# Add hosts
add_hosts:
	echo "Detecting LoadBalancer external IP"
	export LB_IP=""; \
	while [ -z "$${LB_IP}" ]; do \
		export LB_IP=$$(kubectl get svc vkpr-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[*].ip}"); \
		if [ -z "$${LB_IP}" ]; then \
			echo "Waiting for LoadBalancer external IP..."; \
			sleep 3; \
		else \
			echo "LoadBalancer external IP: $${LB_IP}"; \
			echo "Hacking into /etc/hosts, gonna need sudo, please."; \
			if grep -q "whoami" /etc/hosts; then \
				sudo sed "s/.*whoami.*/$${LB_IP} vkpr-grafana.default.svc whoami.localdomain/g" -i /etc/hosts; \
			else \
				sudo sh -c "echo '$${LB_IP} vkpr-grafana.default.svc whoami.localdomain' >> /etc/hosts"; \
			fi; \
		fi; \
	done
```

Before installing VKPR need to create a local cluster with k3d, run:

```shell
make k3d_create
```

To configure VKPR in Helm, run:

```shell
make setup_vkpr
```

To install VKPR, run:

```shell
make install_vkpr
```

To access Grafana it is necessary to add some custom domain to `/etc/hosts`, execute:

```shell
make add_hosts
```

Finally the guide go to the [next section](#access-grafana) to see the credentials of Grafana.

### Manual mode

To start you need to create a local k3d cluster, you need to run:

```shell
k3d cluster create vkpr-local \
  -p "8080:80@loadbalancer" \
  -p "8443:443@loadbalancer" \
  --k3s-server-arg "--no-deploy=traefik"
```

K3d by default installs Traefik as a load balancer, above command creates a k3d cluster without Traefik because we will use VKPR's NGINX Ingress Controller.

Before installation Helm needs to know the VKPR repository, run:

```shell
# Add repo chart
helm repo add vertigo https://charts.vertigo.com.br

# Update repo
helm repo update
```

Then install and configure VKPR running (update the `VALUES_FILE` values):

```shell
helm upgrade -i -f <VALUES_FILE> vkpr vertigo/vkpr
```

To access Grafana it is necessary to add some custom domains to `/etc/hosts`. First get the external ip of nginx and then edit the hosts file (update `LOAD_BALANCER_IP` value), run:

```shell
# Get external ip from nginx
kubectl get service vkpr-ingress-nginx-controller

# Edit hosts file
sudo sh -c "echo '<LOAD_BALANCER_IP> vkpr-grafana.default.svc whoami.localdomain' >> /etc/hosts"
```

Finally the guide go to the [next section](#access-grafana) to see the credentials of Grafana.

## Access Grafana

To access the Grafana use the following credentials:

```yaml
url: http://vkpr-grafana.default.svc
username: admin
password: prom-operator
```

To view the collection of Loki logs in Grafana navigate through the left sidebar until you explore. In this section of Grafana choose the label of the application you want to view the log and then click on Run Query.

## Destroy cluster

After finishing the guide, destroy cluster k3d running:

```shell
# Makefile mode
make k3d_delete

# Manual mode
k3d cluster delete vkpr-local
```
