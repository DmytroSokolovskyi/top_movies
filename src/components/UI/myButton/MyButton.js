import cl from "./MyButton.module.css"

export default function MyButton({children, ...props}) {
    return (
        <button className={cl.myBtn} {...props}>
            {children}
        </button>
    );
}
