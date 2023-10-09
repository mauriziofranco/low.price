to develop:
- execute spring boot app to start the backend: 
this is the command from project_dir:
    mvn spring-boot:run
    
after mvn clean package
point to http://localhost:8080 to see the result:

then frontend and backend are up under localhost:8080
point the frontend to: http://localhost:8080/
and the backend pointing to: http://http://localhost:8080/api/v1/department/


- execute the frontend, with the command npm start under th basic-frontend-app
then point to http://localhost:3000/

FOR PRODUCTION
package all with the command mvn clean install
and after:
java -jar ./target/demo-0.0.1.jar
then point to localhost:8080