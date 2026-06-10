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
                    echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                    docker tag weather-app:v2 %DOCKER_USER%/weather-app:latest
                    docker push %DOCKER_USER%/weather-app:latest
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
}