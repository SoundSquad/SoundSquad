const ConcertImg = (Sequelize, DataTypes) => {
    const model = Sequelize.define('CONCERT_IMG',
        {
            img_num: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            creview_num: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            img_url: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        // param3: 모델 옵션 정의
        {
            freezeTableName: true, // 테이블 명 고정
            timestamps: false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
        }
    );
    return model;
}

module.exports = ConcertImg;