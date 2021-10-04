import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../core-ui/SideMenu/SideMenu";
import { Link } from "react-router-dom";
import chatUsersAvatar from "../../../assets/images/avatar/Ellipse8.png";
import MessageOne from "../../core-ui/Messages/Messages1";
import avatar from "../../../assets/images/avatar/Ellipse7.png";
import useOnclickOutside from "react-cool-onclickoutside";
import participantsAvatar1 from "../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../assets/images/avatar/Ellipse-7-3.png";
import './ChatComponent.css';


const chatUserData = {
    userAvatar: avatar
}

const userMembersAdmin = [
    {
        usersAvatar: participantsAvatar1,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar3,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]

const userMembers = [
    {
        usersAvatar: participantsAvatar2,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]

const otherUsersData = [
    {
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
    {
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
    {
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
]
const ChatComponentTwo = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [isShow2, setIsShow2] = React.useState(false);

    const openPopover = () => {
      setIsShow(!isShow);
    };
    
    const openPopoverTwo = () => {
      setIsShow2(!isShow2);
    };
    
    const closePopover = () => {
        setIsShow(false);
    };
    const closePopoverTwo = () => {
        setIsShow2(false);
    };

    const ref = useOnclickOutside(() => {
        setIsShow(false);
        setIsShow2(false);
      });
    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">Inbox</p>
                            <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                        </div>
                        <div className="chat__box__contaniner">
                            <div className="chat__box__contaniner-left">
                                <div className="personal__avatar">
                                    <p className="chat__TEXT">Chat</p>
                                    <svg onClick={openPopover} style={{cursor: "pointer"}} width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#333333"/>
                                    </svg>
                                    {isShow &&
                                        <div ref={ref} className="popoverBox mobile__popoverBox arrow-top">
                                            <div className="popover__close-btns">
                                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                </svg>
                                            </div>
                                            <div className="popover__links">
                                                <Link onClick={closePopover} to="/profile/group-chat">Create Group</Link>
                                                <li onClick={() => { closePopover(); openPopoverTwo();}}>View Team Members</li>
                                                <li onClick={closePopover} to="#">Search</li>
                                                <li onClick={closePopover} to="#">Report Contact</li>
                                            </div>                                     
                                        </div>
                                    }
                                    <div ref={ref} className={isShow2 ? 'message-chat-box-members-none mobile__message-chat-box-members-none' : 'business-chat-box-members '}>
                                        <div className="business-chat-box-members-header">
                                            <span>Members</span>
                                            <svg style={{cursor: "pointer"}} onClick={closePopoverTwo} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#4F4F4F"/>
                                            </svg>
                                        </div>
                                        <div className="business-chat-box-members-popup">
                                            {
                                                userMembersAdmin.map((userMembeAdmin) => (
                                                    <div className="chat__group__component_participants-data">
                                                        <img className="chat__avatar" src={userMembeAdmin.usersAvatar} alt="chat Avatar" />
                                                        <div className="userChatData">
                                                            <p className="chat__users_name">{userMembeAdmin.userName}</p>
                                                            <p className="chat__users_title">{userMembeAdmin.messages}</p>
                                                        </div>
                                                        <button className="choose-group-admin-button">Group Admin</button>
                                                    </div>
                                                ))
                                            }
                                            {
                                                userMembers.map((userMember) => (
                                                    <div className="chat__group__component_participants-data">
                                                        <img className="chat__avatar" src={userMember.usersAvatar} alt="chat Avatar" />
                                                        <div className="userChatData">
                                                            <p className="chat__users_name">{userMember.userName}</p>
                                                            <p className="chat__users_title">{userMember.messages}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="chat__search_box--user-avatar">
                                    <div className="chat__search-box">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165 9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422 2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382 0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582 11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366 13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698 12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374 13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674 13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184 9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112 10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718 1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662 10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"/>
                                        </svg>
                                        <input type="text" placeholder="Type contact name" />
                                    </div>
                                    <div className="users__chat__avatar">
                                        {
                                            otherUsersData.map((userChatData) => (
                                                <div className="chat__component_users-data">
                                                    <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat Avatar" />
                                                    <div className="userChatData">
                                                        <p className="chat__users_name">{userChatData.userName}</p>
                                                        <p className="chat__users_title">{userChatData.title}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            <MessageOne />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ChatComponentTwo;