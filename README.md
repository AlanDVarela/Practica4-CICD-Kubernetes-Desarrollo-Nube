# Práctica 4: CI/CD con Kubernetes (EKS)

Este proyecto implementa un pipeline completo de Integración y Despliegue Continuo (CI/CD) para una API de calculadora desarrollada en **TypeScript**, desplegada en un cluster de **AWS EKS**.

## Descripción del Pipeline

El pipeline está dividido en tres workflows de GitHub Actions:

1.  **integrate**: Se dispara en cada Pull Request hacia `main`. Ejecuta la instalación de dependencias y los tests unitarios. Bloquea el merge si las pruebas fallan.
2.  **delivery**: Se activa al empujar un tag de versión (ej: `v1.0.0`). Construye la imagen Docker de producción y la publica en Docker Hub bajo el tag de versión y el tag `latest`.
3.  **deploy**: Se ejecuta automáticamente tras el éxito de `delivery`. Utiliza credenciales de AWS para conectarse al cluster de EKS y aplica los manifiestos de Kubernetes (`Deployment` y `Service`).

---

## Configuración de Secretos en GitHub

*   `DOCKERHUB_USERNAME`: Tu usuario de Docker Hub.
*   `DOCKERHUB_TOKEN`: Token de acceso personal de Docker Hub.
*   `AWS_ACCESS_KEY_ID`: ID de acceso desde "AWS Details" en el Lab.
*   `AWS_SECRET_ACCESS_KEY`: Clave secreta desde "AWS Details".
*   `AWS_SESSION_TOKEN`: **Session Token obligatorio** de AWS Academy.
*   `AWS_CLUSTER_NAME`: El nombre de tu cluster en EKS.
*   `AWS_REGION`: La región (`us-east-1`).

