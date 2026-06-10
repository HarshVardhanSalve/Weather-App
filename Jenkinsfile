pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t weather-app:v2 .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    bat '''
                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                    if errorlevel 1 exit /b 1

                    docker tag weather-app:v2 %DOCKER_USER%/weather-app:latest
                    if errorlevel 1 exit /b 1

                    docker push %DOCKER_USER%/weather-app:latest
                    if errorlevel 1 exit /b 1

                    docker logout
                    '''
                }
            }
        }

        stage('Success') {
            steps {
                echo 'Weather App Docker Image Built and Pushed Successfully!'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check Docker login/token permissions.'
        }
    }
}