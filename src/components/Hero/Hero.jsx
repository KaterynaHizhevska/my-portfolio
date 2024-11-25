import { HiOutlineArrowLongDown } from "react-icons/hi2";
import s from "./Hero.module.css";

const Hello = () => (
    <>
       <p className={s.title}>Hello,</p>
      <p className={s.title}>You.</p>
    <div className={s.arrow}>
      <HiOutlineArrowLongDown size="40" />
      </div>
        </>
); 

export default Hello;