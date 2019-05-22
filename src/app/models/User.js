module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      hooks: {
        beforeSave: (user) => {
          user.email = user.email.toLowerCase();
        }
      }
    });
  return User;
};