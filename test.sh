BASE_URL="http://10.211.55.4:8090"
email="poqwer95@naver.com"
password="todnqjrj1!"

echo $BASE_URL
echo $email
echo $password

while true; do
    ACCESS_TOKEN=$(curl -s -X POST -H "Content-Type: application/json" -d '{ "email": "'${email}'", "password": "'${password}'" }' ${BASE_URL}:8090/api/login 2>/dev/null | jq -r '.accessToken')
    if [ -n $ACCESS_TOKEN ]; then
        echo "Successfully received the JWT token."
        break
    fi
    printf '.'
    sleep 5
done
# sh "curl -X POST -H 'Authorization:Bearer ${token}' ${serverUrl}/deploy"
