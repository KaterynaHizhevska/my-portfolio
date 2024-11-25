// Header.jsx
import s from "./Header.module.css";    

const Header = ({ options = [] }) => (
  <ul>
    {options.map((option) => (
      <li key={option.id} className={s.options}>{option.name}</li>
    ))}
  </ul>
);

export default Header;

 




