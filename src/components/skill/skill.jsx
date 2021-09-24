import './skill.scss';

export const Skill = ({ title, percent, color }) => {
    return (
        <div className="skill">
            <div className="skill-info">
                <div className="skill-title">{title}</div>
                <div className="skill-percent">{percent}%</div>
            </div>
            <div className="skill-progress">
                <div
                    className="skill-progress-filled"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color,
                    }}
                ></div>
            </div>
        </div>
    );
};
