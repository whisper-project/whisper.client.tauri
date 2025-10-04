import { Howl } from 'howler';
import airHornUrl from './air-horn.mp3';
import bikeHornUrl from './bike-horn.mp3';
import bikeBellUrl from './bike-bell.mp3';
import typewriterBellUrl from './typewriter-bell.mp3';

export class WhisperApi {
	playSound(sound: string) {
		let url = typewriterBellUrl;
		switch (sound) {
			case 'air-horn': url = airHornUrl; break;
			case 'bicycle-horn': url = bikeHornUrl; break;
			case 'bicycle-bell': url = bikeBellUrl; break;
		}
		const howl = new Howl({src: url, format: 'mp3'});
		howl.play();
	}
}
