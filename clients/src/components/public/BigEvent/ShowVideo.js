import React from 'react'
import YouTube from 'react-youtube';
function ShowVideo(props) {
    const {Post} = props;
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div >
            <YouTube videoId={Post.LinkYoutube}  opts={opts} />
        </div>
    )
}
export default ShowVideo;
