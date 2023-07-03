pipeline {
  agent any

  environment {
    SITEKEY  = credentials('ezraweb-nextjs-sitekey')
    POST_URL = credentials('ezraweb-nextjs-posturl')
  }

  stages {
    stage('build dev') {
      when { branch 'dev' }
      steps {
        sh 'docker build -t ezraweb/nextjs:dev --build-arg SITEKEY="${SITEKEY}" --build-arg POST_URL="${POST_URL}" .'
      }
    }
    stage('build main') {
      when { branch 'main' }
      steps {
        sh 'docker build -t ezraweb/nextjs:latest --build-arg SITEKEY="${SITEKEY}" --build-arg POST_URL="${POST_URL}" .'
      }
    }
  }
}
