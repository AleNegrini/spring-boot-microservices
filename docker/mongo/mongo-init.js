db.createUser({
    user: 'local',
    pwd: 'localpasswd',
    roles: [
        {
            role: "root",
            db: "admin"
        },
        {
            role: "readWrite",
            db: "book"
        }
    ]
});
