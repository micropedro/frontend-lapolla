import useNotificationStore from "@/store/notificationStore"
export default function Notification() {
    const { text, closeNotification, notification } = useNotificationStore()
    return (
        <>{notification && <>
            <div className="notification-bg">
                <div className="notification-body">
                    <div className="mb-3">
                        {text}
                    </div>
                    <button className="btn btn-primary" onClick={closeNotification}> OK </button>
                </div>
            </div>
        </>}
        </>
    )
}
