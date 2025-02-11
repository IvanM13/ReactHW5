import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../module/themeSlice";

const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <button className={"btn-" + theme} onClick={() => dispatch(switchTheme())}>{theme === 'light' ? 'Выбрать темную тему' : 'Выбрать светлую тему'}</button>
    );
}

export default ThemeSwitcher;