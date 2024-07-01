import { Language, NotificationsNoneOutlined, Settings } from '@mui/icons-material'
import './topBar.scss'

const TopBar = () => {
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className='logo'>Nate's Admin</span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNoneOutlined />
                            <span className="topIconBadge">1</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBadge">1</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings/>
                        </div>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar