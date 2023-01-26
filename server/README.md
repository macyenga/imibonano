**Initial Setup**
  
install docker client && pgAdmin/datagrip  

FOR DOCKER ON SCHOOL MACS:  
  
Uninstall Docker from Software center.  
Remove the following folders:  
  
	rm -rf ~/Library/Group Containers/group.com.docker  
	rm -rf ~/Library/Containers/com.docker.docker  
	rm -rf ~/.docker  

Install Docker from Software Center.  
Clone 42Toolbox git  
  
	git clone git@github.com:alexandregv/42toolbox.git  
Run the docker script  

	bash init_docker.sh  
  
  Thanks to : https://dashboard.hive.fi/topics/81/messages?cursus_id=1  
  
after installing docker client:  
	&emsp; `docker-compose -h`  
	&emsp; 	`cd server/`
  
run all setted up containers in background:  
	&emsp; `docker-compose up -d`  
  
connect to postgres:  
	&emsp; `psql postgresql://imibonano-1.cvusofg0vjpu.us-east-1.rds.amazonaws.com:5432/imibonano_db -U postgres`  
  
show all containers to get an ID:  
	&emsp; `docker ps`  
  
remove container:  
	&emsp; `docker stop <ID>`  
	&emsp; `docker rm <ID>`  
  
**Migrations**
  
To create new migration run:  
&emsp; `npm run migration:create --  <migrationName>`  
  
Run migration:  
&emsp; `npm run migrate`  
  
If Postgres drop database error: pq: cannot drop the currently open database:  
&emsp; `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'tablename';`  
After that can drop all tables.  
  
**Populate**  
Populate users table:  
&emsp; `npm run populate`  
Populate likes and matches:  
&emsp; `npm run populate:likes`  
  
**Tests**  
Run test migration:  
&emsp; `npm run migrate:test`  
  
to run one test, use for.ex:  
&emsp; `npm test -- tests/user_api.test.js`  
or  
&emsp; `npm test -- -t 'test desc/name'`  
  
links:  
https://node-postgres.com/features/pooling#single-query  
https://dev.to/steadylearner/how-to-set-up-postgresql-and-pgadmin-with-docker-51h  
https://www.npmjs.com/package/db-migrate  
https://github.com/db-migrate/node-db-migrate#readme  
https://db-migrate.readthedocs.io/en/latest/  

  
**express-async-handler**  
middleware added for handling missed errors on async functions  
every endpoint should be wrapped with asyncHandler();  
https://www.npmjs.com/package/express-async-handler  
  
  
**db-migrate**  
Database migration framework for node.js  
Basic usage: db-migrate [up|down|reset|create|db] [[dbname/]migrationName|all] [options]  
https://db-migrate.readthedocs.io/en/latest/  
