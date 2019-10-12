/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_vimeo', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		course_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_course',
				key: 'id'
			}
		},
		topic_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_topic',
				key: 'id'
			}
		},
		resource_key: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		video_uri: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		video_link: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		video_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		video_description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		duration: {
			type: "DOUBLE",
			allowNull: false
		},
		thumbnail_link: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		isDeleted: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		created_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		creation_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_modified_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		last_modified_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		deleted_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		deleted_time: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'c_vimeo',
		timestamps:false

	});
};
