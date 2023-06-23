const { Users, Tomador} = require("./index");

const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
  // Users.belongsToMany(Conversations, { through: "participants" });
  // Conversations.belongsToMany(Users, { through: "participants" });

  // 1 a muchos --> Users --> Tomador
  Tomador.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Tomador, { as: "tomador", foreignKey: "user_id" });
}

module.exports = initModels;
