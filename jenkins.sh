# Continus Integration
# pull code
# unit test, integration test
# comiple, package
# build image
docker build --tag=dashboardingsvc:0.0.${BUILD_NUMBER} .

# push image
# do nothing

# Continus Deployment
# deploy Development envrionment
kubectl apply -f ./deployment/configMap.yaml
kubectl patch configmap/dashbackend-config \
    --type merge \
    -p "{\"data\":{\"DASHBACKEND_VERSION\":\"0.0.${BUILD_NUMBER}\"}}"
kubectl apply -f ./deployment/deploysvc.yaml
kubectl set image deployment/dashbackend-depl dashbackend=dashboardingsvc:0.0.${BUILD_NUMBER}

# Automation Test - smoke test 10%

# deploy SIT(System Integartion Test) envrionment

# Automation Test - i50%

# deploy QA envrionment

# Automation Test - 100%

# deploy UAT envrionment

# deploy Staging envrionment

# deploy Production envrionment