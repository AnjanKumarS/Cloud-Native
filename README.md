# Cloud Native Microservices Project
Test commit for Jenkins webhook ✅
A complete microservices application with Docker containers and Kubernetes orchestration.

## 🏗️ Architecture

- **4 Backend Services** (Flask/Python)
- **4 Frontend Services** (HTML/CSS/JavaScript)
- **Docker Containers** for each service
- **Kubernetes Deployment** with NodePort services

## 🚀 Services

| Service | Frontend Port | Backend Port | Description |
|---------|---------------|--------------|-------------|
| Service 1 | 30001 | 30002 | Login/Authentication |
| Service 2 | 30004 | 30003 | Product Management |
| Service 3 | 30006 | 30005 | Contact Form |
| Service 4 | 30008 | 30007 | Service Dashboard |

## 📋 Prerequisites

- Docker Desktop with Kubernetes enabled
- kubectl CLI tool
- Git

## 🛠️ Local Setup   

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Cloud-Native.git
cd Cloud-Native
```

### 2. Build Docker Images
```bash
# Build all backend images
cd backend/service1-backend && docker build -t service1-backend-image:latest .
cd ../service2-backend && docker build -t service2-backend-image:latest .
cd ../service3-backend && docker build -t service3-backend-image:latest .
cd ../service4-backend && docker build -t service4-backend-image:latest .

# Build all frontend images
cd ../../frontend/service1-frontend && docker build -t service1-frontend-image:latest .
cd ../service2-frontend && docker build -t service2-frontend-image:latest .
cd ../service3-frontend && docker build -t service3-frontend-image:latest .
cd ../service4-frontend && docker build -t service4-frontend-image:latest .
```

### 3. Deploy to Kubernetes
```bash
cd ../../k8s
kubectl apply -f .
```

### 4. Access the Application
- **Login Page**: http://localhost:30001
- **Products**: http://localhost:30004
- **Contact**: http://localhost:30006
- **Dashboard**: http://localhost:30008

**Login Credentials:**
- Username: `admin`
- Password: `admin123`

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

1. **Fork this repository** to your GitHub account

2. **Add Repository Secrets** in GitHub:
   - Go to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `DOCKER_USERNAME`: Your Docker Hub username
     - `DOCKER_PASSWORD`: Your Docker Hub password/token

3. **Update Kubernetes YAML files**:
   - Replace `your-dockerhub-username` in all k8s/*.yaml files with your actual Docker Hub username

4. **Push to main branch**:
   - The workflow will automatically build and push Docker images to Docker Hub

### Workflow Features
- ✅ Builds all 8 Docker images
- ✅ Pushes images to Docker Hub
- ✅ Runs on every push to main branch
- ✅ Supports all microservices

## 📁 Project Structure

```
CNA/
├── backend/
│   ├── service1-backend/     # Login service
│   ├── service2-backend/     # Product service
│   ├── service3-backend/     # Contact service
│   └── service4-backend/     # Dashboard service
├── frontend/
│   ├── service1-frontend/    # Login UI
│   ├── service2-frontend/    # Product UI
│   ├── service3-frontend/    # Contact UI
│   └── service4-frontend/    # Dashboard UI
├── k8s/                      # Kubernetes manifests
├── .github/workflows/        # CI/CD pipeline
└── docker-compose.yml        # Local development
```

## 🎨 Features

- **Modern UI Design** with gradient backgrounds
- **Responsive Navigation** across all services
- **Interactive Elements** with hover effects
- **Service Health Monitoring** dashboard
- **Cross-service Communication** via REST APIs
- **Containerized Architecture** for scalability

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   kubectl get services
   kubectl delete service <service-name>
   ```

2. **Pod not starting**:
   ```bash
   kubectl describe pod <pod-name>
   kubectl logs <pod-name>
   ```

3. **Image pull errors**:
   ```bash
   kubectl get pods
   # Check if images exist locally or in registry
   ```

### Useful Commands

```bash
# Check all resources
kubectl get all

# View pod logs
kubectl logs <pod-name>

# Access pod shell
kubectl exec -it <pod-name> -- /bin/sh

# Delete all resources
kubectl delete all --all
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**