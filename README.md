🎼 Music Store Microservice on AWS EKS
This project showcases a production-ready Kubernetes deployment of a sample music store web application on AWS EKS. It leverages cloud-native best practices, ensuring secure, automated HTTPS access using NGINX Ingress Controller and cert-manager for streamlined TLS certificate management (Let’s Encrypt).

🌐 Live Demo
Domain: https://musicstore.duckdns.org
(Swap for your actual live URL)

AWS Region: us-east-1
(Replace with your deployment region)

🛠️ Tech Stack & Architecture
Component	Purpose	Location/Notes
AWS EKS (Kubernetes)	Cluster orchestration	Cloud
Docker/ECR	Container image registry	Provide your image reference
NGINX Ingress	Ingress controller, traffic routing	Helm
AWS NLB	Network Load Balancer for ingress	AWS
cert-manager	TLS/SSL automation via ClusterIssuer	Helm
Let’s Encrypt	Certificate Authority	ClusterIssuer
DuckDNS + ExternalDNS	Dynamic DNS and DNS automation	DuckDNS (A record for NLB endpoint)
🏗️ Architecture Overview
Kubernetes Deployment: Manages replicated application Pods.

ClusterIP Service: Exposes Pods internally on port 80.

NGINX Ingress Controller: Provides external HTTPS access via AWS NLB.

cert-manager: Automatically provisions and renews certificates from Let’s Encrypt.

DNS Management: DuckDNS domain points to NLB’s public entry point.

⚙️ Prerequisites
Make sure these are installed and configured:

kubectl

AWS CLI

eksctl

Helm

DuckDNS domain (points to your load balancer’s public IP)

🚀 Get Started: Deployment Steps
Deploy Application and Service

bash
kubectl apply -f k8s/deployment.yaml -n music-store
kubectl apply -f k8s/service.yaml -n music-store
kubectl get pods -n music-store
Configure TLS Certificate Issuer

bash
kubectl apply -f k8s/cluster-issuer.yaml
Deploy Ingress Resource (with HTTPS)

bash
kubectl apply -f k8s/ingress.yaml -n music-store
Monitor & Verify Success
Check external entrypoint (NLB):

bash
kubectl get svc ingress-nginx-controller -n ingress-nginx
Monitor certificate status:

bash
kubectl get certificate -n music-store
# Wait for: READY: True