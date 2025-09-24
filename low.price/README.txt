FOR DEVELOPMENT:

a) verify if node is installed and if node -v returns the same version of node.version tag existent into pom.xml
b) fix the src/main/resources/logback.xml log file path
c) verify from command line the correct java version: 17
d) verify into src/main/resources/application.properties if spring.datasource.* properties are correctly populated(if not, install database and prepare tables and users)
   if new development database has to be created.....
	   c1)go, with a terminal, under resources/db/hsqldb 
	   c2)unzip hsqldb-2.7.4.zip
	   c3)start a new hsqld instance with the above command(it creates a database named lowpricedb with an alias name lowpricedb)
	       java -classpath lib/hsqldb.jar org.hsqldb.server.Server --database.0 lowpricedb -dbname.0 lowpricedb
	   c4)use an database client(i.e. dbeaver), and esablish a connection to it 
	   c5)go under resources/db/hsqldb/sql
	   c6)execute, via database client, the 01_tables.sql to create table structure
	   c7)execute, via database client, the 02_data.sql to populate with some demo data
    else run the already existent db instance with the following command(into the hsqldb home dir(resources/db/hsqldb-2.7.4/hsqldb)):
           java -classpath lib/hsqldb.jar org.hsqldb.server.Server --database.0 lowpricedb -dbname.0 lowpricedb
        
       
e) check in the pom.xml if the correct database driver is imported(via dependency tag)
f) execute spring boot app to start the backend: 
this is the command from project_dir:
    mvn spring-boot:run






after mvn clean package
point to http://localhost:8080 to see the result:

then frontend and backend are up under localhost:8080
point the frontend to: http://localhost:8080/
and the backend pointing to: http://http://localhost:8080/api/v1/department/


- execute the frontend, with the command npm start under th basic-frontend-app
then point to http://localhost:3000/

FOR PRODUCTION:
package all with the command mvn clean install
and after:
java -jar ./target/demo-0.0.1.jar
then point to localhost:8080