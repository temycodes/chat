import styled from 'styled-components'
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
//reusable aspect of our app.

function Chat() {
    return (
        <Container>
            <Header>
                <UserAvater />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon style={{color:'white'}}/>
                    </IconButton>
                    <MoreVertIcon style={{ color: 'white', cursor: 'pointer'}}/>
                </IconsContainer>
            </Header>
        </Container>
    )
}

export default Chat;

const Container = styled.div``;
const Header = styled.div`
    display:flex;
    position: sticky;
    background: #155165;
    z-index: 1;
    justify-content:space-between;
    width:50%;
    margin: auto;
    padding:10px;
    align-items: center;
    border-bottom:1px solid whitesmoke;
`;
const UserAvater = styled(Avatar)`
    background-color: rgb(39 39 42);
    cursor:pointer;
    :hover {
        opacity: 0.8;
    }
`;
const IconsContainer = styled.div`
    display:flex;
    align-items:center;
`
