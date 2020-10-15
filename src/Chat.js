import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import './Chat.css'

function Chat() {
    const [seed, setSeed] = useState('')
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                <p className={`chat-message ${true && 'chat-receiver'}`}>
                    <span className="chat-name">Asia V</span>
                    hey guys!
                    <span className="timestamp">8:00 pm</span>
                </p>
            </div>
            <div className="chat-footer">

            </div>
        </div>
    )
}

export default Chat
