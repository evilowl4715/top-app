import { HeaderProps } from "./Header.props";
export const Header = ({...props}:HeaderProps): JSX.Element => {
    return (
        <header {...props}>header</header>
    );
};