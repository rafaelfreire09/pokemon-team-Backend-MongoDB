# 👾 Pokemon Team Builder BACKEND

## 🚀 Routes:

1. Create new Team

        http://localhost:9000/api/createTeam/

3. Get Teams

        http://localhost:9000/api/getAllTeams/

4. Update Team

        http://localhost:9000/api/updateTeam/:id

5. Delete Team

        http://localhost:9000/api/deleteTeam/:id

---

## 🛠️ Tecnologies:

- Typescript
- Node.js
- MongoDB
- Docker Compose

---

## ⚙️ Installation:

1. First, if you dont have Git installed, download the zip file and extract him. If you have, clone the repository:

	```sh
	git clone https://github.com/rafaelfreire09/Pokemon-Team-Builder.git
	```

2. Inside the project, run the docker-compose file to up MongoDB.

	```sh
	docker-compose up
	```

3. Inside the project, install the necessary dependencies.

	```sh
	npm install
	```

4. To run:

	```sh
	npm start
	```

5. (Optional) With the REST Client Extension of VS Code, you can run the requests through the rest.http file.
