import { useSelector } from "react-redux";

const ThemeContainer = ({children}) => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default ThemeContainer;