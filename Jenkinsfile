pipeline {
    agent { 
        label 'parallels'
    }
    tools {
        jdk 'jdk17-agent'
        gradle 'gradle8'
    }
    environment {
        WORK_SPACE = "/home/$USER/agent/workspace"
        BASE_URL = "http://localhost"
        JAVA_HOME = "/home/parallels/agent/tools/hudson.model.JDK/jdk17-agent" // JDK가 설치된 경로에 맞게 설정
        PATH = "$JAVA_HOME/bin:$PATH"
    }
    stages {
        // stage('Test Backend') {
        //     steps {
        //         script {
        //             try {
        //                 sh 'curl --output /dev/null --silent --head --fail $BASE_URL:8090'
        //                 echo 'Test Running'
        //                 sh 'cd $WORK_SPACE/docker-flighter/flighter-backend && ./gradlew test'
        //             } catch (Exception e) {
        //                 echo 'I can\'t test because the application is not running'
        //             }
        //         }
        //     }
        // }

        
        stage('PreBuild') {
            steps {
                sh 'java -version'
                sh 'gradle --version'
                sh 'docker-compose down'
                sh 'docker rmi -f docker-flighter-postgres'
                sh 'docker rmi -f docker-flighter-frontend'
                sh 'docker rmi -f docker-flighter-backend'
                sh 'docker rmi -f docker-flighter-chatapp'
            }
        }
        stage('Build') {
            steps {
                sh 'cat /etc/resolv.conf'
                sh 'sudo systemd-resolve --flush-caches'
                sh 'echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null'
                sh 'cd $WORK_SPACE/docker-flighter/flighter-backend && ./gradlew clean build -x test'
            }
        }
        stage('Deploy') {
            steps {
              script {
                    def deploy = {
                        sh '''
                            cd $WORK_SPACE/docker-flighter && docker-compose up -d
                            until $(curl --output /dev/null --silent --head --fail $BASE_URL:8090); do
                                printf '.'
                                sleep 5
                            done
                        '''
                    }
                    
                    try {
                        deploy()
                    } catch (Exception e) {
                        retry(3) {
                            if (e.getMessage().contains("TLS handshake timeout")) {
                                echo "Caught TLS handshake timeout error. Retrying deploy..."
                                deploy()
                            } else {
                                throw e
                            }
                        }
                    }
                }
            }
        }
    }
}
