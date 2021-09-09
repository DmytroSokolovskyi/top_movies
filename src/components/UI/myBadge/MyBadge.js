import cl from './MyBadge.module.css';

export default function MyBadge({children}) {

    return (
        <div className={cl.myBadge}>
            {children}
        </div>
    );
}
