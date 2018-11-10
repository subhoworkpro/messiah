# hflingapp

db.createUser(
  {
    user: "intellirio",
    pwd: "India@123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)

db.createUser(
  {
    user: "messiah",
    pwd: "India@123",
    roles: [ "dbAdmin","userAdmin","dbOwner","read","readWrite" ]
  }
)

db.changeUserPassword("messiah", "India123")