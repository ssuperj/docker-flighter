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
        BASE_URL = "http://10.211.55.4"
        JAVA_HOME = "/home/parallels/agent/tools/hudson.model.JDK/jdk17-agent" // JDK가 설치된 경로에 맞게 설정
        PATH = "$JAVA_HOME/bin:$PATH"
        ACCESS_TOKEN = ""
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
            }
        }
        stage('Build') {
            steps {
                sh 'cd $WORK_SPACE/docker-flighter/flighter-backend && ./gradlew clean build -x test'
            }
        }
        stage('Deploy') {
            steps {
              script {

                    def deploy = {
                        sh '''
                        envFile=$(cat .env)
                        email=$(echo $envFile | grep '^ADMIN_EMAIL=' | cut -d= -f2-)
                        password=$(echo $envFile | grep '^ADMIN_PASSWORD=' | cut -d= -f2-)

                        echo ${email}
                        echo ${password}
                        echo ${BASE_URL}

                        while true; do
                            ACCESS_TOKEN=$(curl -s -H "Content-Type: application/json" -d '{ "email": "'${email}'", "password": "'${password}'" }' ${BASE_URL}/api/login | jq -r '.accessToken')
                            if [ -n "$ACCESS_TOKEN" ]; then
                                echo "Successfully received the JWT token."
                                break
                            fi
                            printf '.'
                            sleep 5
                        done    
                        '''
                        // sh "curl -X POST -H 'Authorization:Bearer ${token}' ${serverUrl}/deploy"
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



