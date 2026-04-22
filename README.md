# Práctica 4: CI/CD con Kubernetes (EKS)

Este proyecto implementa un pipeline completo de Integración y Despliegue Continuo (CI/CD) para una API de calculadora desarrollada en **TypeScript**, desplegada en un clúster de **AWS EKS**.


## Descripción del Pipeline

El pipeline está dividido en tres workflows de GitHub Actions:

1.  **integrate**: Se dispara en cada Pull Request hacia `main`. Ejecuta dependencias y tests unitarios.
2.  **delivery**: Se activa al empujar un tag `v*`. Construye y sube la imagen a Docker Hub.
3.  **deploy**: Se ejecuta tras el éxito de `delivery`. Despliega en el clúster de EKS.

## Configuración de Secretos en GitHub

Para que el pipeline funcione, es necesario configurar los siguientes secretos en el repositorio:

| Secreto | Descripción |
| :--- | :--- |
| `DOCKERHUB_USERNAME` | Usuario de Docker Hub |
| `DOCKERHUB_TOKEN` | Access Token de Docker Hub |
| `AWS_ACCESS_KEY_ID` | Access Key ID de AWS Academy |
| `AWS_SECRET_ACCESS_KEY` | Secret Access Key de AWS Academy |
| `AWS_SESSION_TOKEN` | Session Token de AWS Academy |
| `AWS_CLUSTER_NAME` | Nombre del clúster de EKS |
| `AWS_REGION` | Región (us-east-1) |


