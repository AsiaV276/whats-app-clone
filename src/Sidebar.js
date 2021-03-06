import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import SettingsIcon from '@material-ui/icons/Settings'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Avatar, IconButton } from '@material-ui/core'

function Sidebar(props) {
    return (
        <div className="sidebar">
            
            <div className="sidebar-header">
                <Avatar/>
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat addNewChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
