export const Tabs = ({ children }) => {
    return (
        <div className="tabs-container"> {children}</div>
    )
}

export const Tab = ({ children, onClick, status }) => {
    return (
        <>
            <button onClick={() => onClick()} className={`${status ? "tabs-active" : "tabs-inactive"}`} >{children}</button>
        </>
    )
}

