module.exports = function(sequelize, DataTypes) {
	var PayFrom = sequelize.define(
		"PayFrom", 
		{
			bank_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		}
	);

	return PayFrom;
}