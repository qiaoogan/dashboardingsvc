docker run -d -p 3101:3101 --name dashbackend -e DASHBOARDINGSVC_ENV=containerized -e DASHBOARDINGSVC_DB_HOST=fastapi-mongo -e DASHBOARDINGSVC_DB_PORT=27017 --network dashboard-network dashbackend:0.0.1