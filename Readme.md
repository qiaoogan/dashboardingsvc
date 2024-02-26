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


docker中两个containers之间需要通信，需要其都连接到同一个network上，
如果container已经启动，只需要将其connect到指定的newtwork上即可，命令如下：
# create bridge network
docker network create network_name

# connect running database container to bridge network
docker network connect newtwork_name container_name

如果container还末被启动，则可以在启动命令中增加上 --newwork network_name参数