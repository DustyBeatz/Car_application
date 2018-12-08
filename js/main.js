(() => {

    const volMute = document.querySelector('.muteBut'),
          vidplayer = document.querySelector('video');

    
    function volMuteToggle(){
        if(vidplayer.muted){
            vidplayer.muted = false;
        }
        else {
            vidplayer.muted = true;
        }
    }
    
    volMute.addEventListener('click', volMuteToggle);
    
    })();