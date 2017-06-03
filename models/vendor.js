module.exports = function(sequelize, DataTypes) {
	var PayTo = sequelize.define(
		"PayTo", 
		{
			vendor_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		}
	);

	return PayTo;
}