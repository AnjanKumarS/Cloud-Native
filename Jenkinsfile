pipeline {
    agent any

    environment {
        BACKEND_SERVICES = "service1-backend service2-backend service3-backend service4-backend"
        FRONTEND_SERVICES = "service1-frontend service2-frontend service3-frontend service4-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/AnjanKumarS/Cloud-Native.git', branch: 'main'
            }
        }

         stage('Test Kubectl') {
            steps {
                sh 'kubectl version --client'
            }
        }

        stage('Build Backend Docker Images') {
            steps {
                dir('backend') {
                    script {
                        BACKEND_SERVICES.split(" ").each { svc ->
                            sh "docker build -t ${svc}-image:latest ${svc}"
                        }
                    }
                }
            }
        }

        stage('Build Frontend Docker Images') {
            steps {
                dir('frontend') {
                    script {
                        FRONTEND_SERVICES.split(" ").each { svc ->
                            sh "docker build -t ${svc}-image:latest ${svc}"
                        }
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                dir('k8s') {
                    sh 'kubectl apply -f .'
                }
            }
        }
    }
}
