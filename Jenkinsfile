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
                bat 'docker build -t weather-app .'
            }
        }

        stage('Success') {
            steps {
                echo 'Weather App Docker Image Created Successfully!'
            }
        }
    }
}