import { Howl } from 'howler';
import uhOhUrl from './uh-oh-female.mp3';
import airHornUrl from './air-horn.mp3';
import bikeHornUrl from './bike-horn.mp3';
import bikeBellUrl from './bike-bell.mp3';
import typewriterBellUrl from './typewriter-bell.mp3';
import typewriterClassicUrl from './typewriter-classic.mp3';
import typewriterModernUrl from './typewriter-modern.mp3';

export interface WhisperSessionPrefs {
	alertSound: string;
	typingSound: string;
	playTypingSound: boolean;
	typingSoundVolume: string;
}

const prefDefaults: WhisperSessionPrefs = {
	alertSound: 'bicycle-horn',
	typingSound: 'typewriter-classic',
	playTypingSound: false,
	typingSoundVolume: 'half'
};

export class WhisperApi {
	static sessionPrefs: WhisperSessionPrefs = prefDefaults;

	howl: Howl | undefined = undefined

	getSessionPrefs(): WhisperSessionPrefs {
		return {...WhisperApi.sessionPrefs};
	}

	saveSessionPrefs(prefs: WhisperSessionPrefs) {
		WhisperApi.sessionPrefs = {...prefs};
	}

	playSound(sound: string) {
		let url = uhOhUrl;
		switch (sound) {
			case 'air-horn': url = airHornUrl; break;
			case 'bicycle-horn': url = bikeHornUrl; break;
			case 'bicycle-bell': url = bikeBellUrl; break;
			case 'typewriter-bell': url = typewriterBellUrl; break;
			case 'typewriter-classic': url = typewriterClassicUrl; break;
			case 'typewriter-modern': url = typewriterModernUrl; break;
		}
		this.howl?.stop();
		this.howl = new Howl({src: url, format: 'mp3'});
		this.howl.play();
	}

	stopSound() {
		this.howl?.stop();
	}
}
