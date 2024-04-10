import styled from "styled-components";

const Main = () => (
  <Container>
    <ShareBox>
      <CreatePost>
        <img src="/images/user.svg" alt="Profile pic" />
        <input type="text" placeholder="Start a post" />
      </CreatePost>
      <PostLinks>
        <PostLink>
          <img src="/images/photo.svg" alt="" />
          <span>Photo</span>
        </PostLink>

        <PostLink>
          <img src="/images/photo.svg" alt="" />
          <span>Video</span>
        </PostLink>

        <PostLink>
          <img src="/images/photo.svg" alt="" />
          <span>Event</span>
        </PostLink>

        <PostLink>
          <img src="/images/photo.svg" alt="" />
          <span>Write article</span>
        </PostLink>
      </PostLinks>
    </ShareBox>


    <ShareBox>
      <ProfileDetail>
        <UserInfo>
        <img src="/images/user.svg" alt="" />
        <div>
          <h4>Sunady Solomon</h4>
          <p>nomolos2019@gmail.com</p>
          <p>03/15/2024</p>
        </div>
        </UserInfo>
        <ProfileMenu>
          <img src="/images/card-bg.svg" alt="" />
        </ProfileMenu>
      </ProfileDetail>
      <Post>
        <PostTitle>
          <p>This is my linkedIn clone. Hopefully you are exited to build it</p>
        </PostTitle>
        <PostImage>
        <img src="/images/user.svg" alt="" />
        </PostImage>
      </Post>
      <SocialLinks>
        <Comments>
          <img src="/images/user.svg" alt="" />
          <img src="/images/user.svg" alt="" />
          <p>75</p>
          <span>0 comments</span>
        </Comments>
        <Links>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Like</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Comments</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Share</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Send</p>
          </Link>
        </Links>
      </SocialLinks>
    </ShareBox>

    
    <ShareBox>
      <ProfileDetail>
        <UserInfo>
        <img src="/images/user.svg" alt="" />
        <div>
          <h4>Sunady Solomon</h4>
          <p>nomolos2019@gmail.com</p>
          <p>03/15/2024</p>
        </div>
        </UserInfo>
        <ProfileMenu>
          <img src="/images/card-bg.svg" alt="" />
        </ProfileMenu>
      </ProfileDetail>
      <Post>
        <PostTitle>
          <p>This is my linkedIn clone. Hopefully you are exited to build it</p>
        </PostTitle>
        <PostImage>
        <img src="/images/user.svg" alt="" />
        </PostImage>
      </Post>
      <SocialLinks>
        <Comments>
          <img src="/images/user.svg" alt="" />
          <img src="/images/user.svg" alt="" />
          <p>75</p>
          <span>0 comments</span>
        </Comments>
        <Links>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Like</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Comments</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Share</p>
          </Link>
          <Link>
            <img src="/images/user.svg" alt="" />
            <p>Send</p>
          </Link>
        </Links>
      </SocialLinks>
    </ShareBox>
  </Container>
);

const Container = styled.div`
  grid-area: main;
`;

const commanCrad = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  position: relative;
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
`;

const ShareBox = styled(commanCrad)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0px;
`
const CreatePost = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 0 20px;
  color: var(--light-grey-text);
  gap: 10px;
  & > img {
    height: 100%;
    border-radius: 50%;
  }

  & > input {
    width: 100%;
    padding: 20px;
    border-radius: 50px;
    border: 1px solid var(--border-color);
  }
  `

const PostLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  `

const PostLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > img {
    width: 25%;
  }

  & > span {
    color: var(--linkedin-blue-deep);
    font-size: 14px;
  }
`

const ProfileDetail = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 15px;
`

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  & > img {
    height: 100%;
  }
  & > div {
    text-align: left;
  }
`

const ProfileMenu = styled.div`
  height: 10%;
  width: 3%;
  & > img {
    height: 100%;
  }
`
const Post = styled.div`

`

const PostTitle = styled.div`
  text-align: left;
  padding: 0px 15px 10px 15px;
`

const PostImage = styled.div`
  width: 100%;
  & > img {
    width: 100%;
  }
`

const SocialLinks = styled.div`
  padding: 0 15px;
`

const Comments = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  & > span {
    color: var(--linkedin-blue-deep);
    padding-left: 7px;
  }
  & > img {
    height: 80%;
    border-radius: 50%;
  }
`

const Links = styled.div`
  display: flex;
  padding-top: 15px;
  justify-content: space-between;
`

const Link = styled.div`
  display: flex;
  height: 25px;
  gap: 8px;
  align-items: center;
  & > img {
    height: 80%;
  }
`

export default Main;
