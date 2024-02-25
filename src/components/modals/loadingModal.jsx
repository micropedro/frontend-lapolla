import useLoadingModalStore from "../../store/loadingModalStore"
import Spinner from '../../components/spiner'
const LoadingModal = () => {

    const { loading, text } = useLoadingModalStore()

    if (loading) return (
        <div className="notification-bg">
            <div className="notification-body">
                <div>{text}</div>
                <div>

                    <Spinner color={'black'} />
                </div>
            </div>
        </div>
    )
}

export default LoadingModal