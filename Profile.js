export default function Profile({hero, description}) {
    return (
        <img
            className = 'avatar'
            src = {hero}
            alt = {description}
            width = {100}
            heigth = {80}
        />
    );
};