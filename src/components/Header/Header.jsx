// Header.jsx
import s from "./Header.module.css";    

const Header = ({ options = [] }) => (
    <div className={s.container}>
          <p className={s.logo}>My Portfolio</p>
  <ul className={s.list}>
    {options.map((option) => (
      <li key={option.id} className={s.options}>{option.name}</li>
    ))}
        </ul>
        </div>
);

export default Header;

 




