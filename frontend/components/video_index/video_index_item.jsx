import React from 'react';
import VideoDetailsPageContainer from './video_details_page_container';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.video = this.props.video;
        this.showDropdown = this.props.showDropdown;
        this.removeDropdown = this.props.removeDropdown;
        this.dropdown = this.props.dropdown;
        this.state = {active: false};
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(e) {
        this.showDropdown(this.video)    
    }

    mouseEnter () {
        this.setState({active: true});
    }
    
    mouseLeave () {
        this.setState({active: false});
    }

    render () {
        let content = ((this.state.active === false) || (this.props.dropdown.id !== undefined)) ? (
            <div className="image_container">
                <img className="thumbnail-pic" src={this.video.thumbnailURL}/>
            </div>
        ) : (
            <div className="thumbnail-video-player">
                <video width="215" height="240" controls>
                    <source type="video/mp4" src={this.video.videoURL} />
                </video>

            </div>
        ) 


        return (
            <div className="index-item" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                {content}
                <button className="show-page-button" onClick={this.handleOpen}><span className="chevron bottom" /></button>

            </div>
               

        );
    }
}

export default VideoIndexItem;