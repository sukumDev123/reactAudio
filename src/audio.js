let audio
/**
 * @returns { AudioContext } 
 */
export function getAudioContent() {

    if(!audio) {
        audio = new AudioContext()
    }
    return audio
}