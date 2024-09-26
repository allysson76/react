import Profile from "./Profile.js";
import Bunyan from './img/John_Bunyan.jpg';
import Wesley from './img/John_Wesley_clipped.png';
import Edwards from './img/Jonathan-Edwards-engraving.webp';
import Lutero from './img/martinho-min.jpg.webp';


export default function App() {
    return (
        <>
            <Profile
                hero = {Bunyan}
                description = 'Inglês'
            />
            <Profile
                hero = {Wesley}
                description = 'Inglês'
            />
            <Profile
                hero = {Edwards}
                description = 'Americano'
            />
            <Profile
                hero = {Lutero}
                description = 'Alemão'
            />
        </>
    );
};