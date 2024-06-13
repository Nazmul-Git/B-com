import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensures screen readers are aware of the modal content

const VideoPopUp = ({ isOpen, onRequestClose, videoUrl }) => {
    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        content: {
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            maxWidth: '800px',
            width: '100%',
            position: 'relative',
            inset: 'auto'
        }
    };

    const iframeContainerStyle = {
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: '0',
        overflow: 'hidden',
        maxWidth: '100%',
        backgroundColor: '#000'
    };

    const iframeStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer'
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Video Modal"
            style={modalStyles}
        >
            <div className="video-popup-content">
                <button onClick={onRequestClose} style={closeButtonStyle}>
                    &times;
                </button>
                <div style={iframeContainerStyle}>
                    <iframe
                        src={videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video"
                        style={iframeStyle}
                    ></iframe>
                </div>
            </div>
        </Modal>
    );
};

export default VideoPopUp;
