Dashboarding backend service
--

The BFF service for dashboarding app

# Deploy
Follow bellow steps to deploy a service:
1. create dockerfile to containerize the service,
2. use the dockerfile to create image,
3. use the image to start container to check the service locally,
    3.1 take care of checking integration with database.
4. create jenkinsfile to involve above steps as CICD,
5. create pipeline on Jenkins to load this repo and jenkinsfile.