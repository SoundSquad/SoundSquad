'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

const UserModel = require('./User')(sequelize, Sequelize);
const UserReviewModel = require('./UserReview')(sequelize, Sequelize);
const ConcertReviewModel = require('./ConcertReview')(sequelize, Sequelize);
const ReviewLikesModel = require('./ReviewLikes')(sequelize, Sequelize);
const ConcertImgModel = require('./ConcertImg')(sequelize, Sequelize);

async function syncModels() {
  try {
    let flag = true;
    await UserModel.sync({ force: flag });
    console.log("*** User table created");

    await UserReviewModel.sync({ force: flag });
    console.log("*** UserReview table created");

    await ConcertReviewModel.sync({ force: flag });
    console.log("*** ConcertReview table created");

    await ReviewLikesModel.sync({ force: flag });
    console.log("*** ReviewLikes table created");

    await ConcertImgModel.sync({ force: flag });
    console.log("*** ConcertImg table created");

    console.log("All tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

syncModels();

UserModel.hasMany(UserReviewModel, { 
  foreignKey: 'user_num',
  sourceKey: 'user_num',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
UserReviewModel.belongsTo(UserModel, { 
  foreignKey: 'user_num',
  targetKey: 'user_num'
});

UserModel.hasMany(ConcertReviewModel, { 
  foreignKey: 'user_num',
  sourceKey: 'user_num',
  onDelete: 'cascade',
  onUpdate: 'cascade' 
});
ConcertReviewModel.belongsTo(UserModel, { 
  foreignKey: 'user_num',
  targetKey: 'user_num'
});

ConcertReviewModel.hasMany(ReviewLikesModel, { 
  foreignKey: 'creview_num',
  sourceKey: 'creview_num',
  onDelete: 'cascade',
  onUpdate: 'cascade' 
});
ReviewLikesModel.belongsTo(ConcertReviewModel, { 
  foreignKey: 'creview_num',
  targetKey: 'creview_num',
});

UserModel.hasMany(ReviewLikesModel, { 
  foreignKey: 'user_num',
  sourceKey: 'user_num',
  onDelete: 'cascade',
  onUpdate: 'cascade' 
});
ReviewLikesModel.belongsTo(UserModel, { 
  foreignKey: 'user_num',
  targetKey: 'user_num', 
});

ConcertReviewModel.hasMany(ConcertImgModel, { 
  foreignKey: 'creview_num',
  sourceKey: 'creview_num',
  onDelete: 'cascade',
  onUpdate: 'cascade' 
});
ConcertImgModel.belongsTo(ConcertReviewModel, { 
  foreignKey: 'creview_num',
  targetKey: 'creview_num',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = UserModel;
db.UserReview = UserReviewModel;
db.ConcertReview = ConcertReviewModel;
db.ReviewLikes = ReviewLikesModel;
db.ConcertImg = ConcertImgModel;

module.exports = db;
