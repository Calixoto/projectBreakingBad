import style from './styles.module.scss'

export default function Header() {
    return (
        <div className={style.containerHeader}>
            <nav className={style.contentHeader}>
                <div className={style.navLogo}>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="nav-name"><h1>Lucas Calixto</h1></div>
            </nav>
        </div>
    )
}