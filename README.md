### API call middleware (Cookie + Auth) flow chart 
```mermaid
graph TD;
    A{Request Commes in} --> B(API End-Point);
    B --> |Extracts Cookie data| C("Cookie-session");
    C --> |Pulls user id out of cookie data| D("Passport");
    D --> |Function we wrote to turn user id into user|E("deserializeUser");
    E --> F("User obj added to req object as req.user");
    B --> G{"Request sent to route hadler"}
```

How to start client and server concurrently on local ?
-> npm run dev

How to start client and server on prod ?

HLD: https://drive.google.com/drive/folders/1qjibEgEUWrlKx54ZBiOJJbqKtfMrH1as?usp=sharing