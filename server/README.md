# mkrTube Backend (dev)

https://mkrtube.com/

This server is used to host the mkrTube Project, general information and our website.
We also host a live version of mkrTube.

The server include the following:

TLD Root: Possible website presenting the project.
/api: Application Programming Interface
/credits.html The Team behind mkrTube

## Install

```
git clone https://github.com/Morten-Kodehode/mkrTube
```

```
npm install
```

Replace the missing .env in the server root.

```
VERSADB_USER=username
VERSADB_PW=password
```

## Switch to HTTP Mode
Comment out https.createServer and remove comment on app.listen

This is required for the server to work if you do not have a TLS Certificate
and a domain name.

## Keep TLS Mode
Install Let's Encrypt Certbot and run

```
certbot certonly
```

Choose temporary webserver while keeping the mkrtube.com server offline.
Your certificate files should replace the existing once.
