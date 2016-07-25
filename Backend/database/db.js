var Sequelize = require('Sequelize');

var seq = new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: 'database/db.sqlite'
});

var user = seq.define('User', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: 'pw'
        }
    }, {
        timestamps: false
    });

var gamestate = seq.define('GameState',
    {
        userID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: user,
                key: 'id'
            }
        },
        score: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        isRunning: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        locationName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        positionX: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        positionY: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        speedX: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        speedY: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    },
    {
        timestamps: false
    });

module.exports = {
    Sequelize: Sequelize,
    Connection: seq,
    User: user,
    GameState: gamestate
}