db.createUser({
    user: "dhruvprajapati",
    pwd: "12345678910",
    roles: [
      {
        role: "readWrite",
        db: "user_information"
      }
    ]
  });