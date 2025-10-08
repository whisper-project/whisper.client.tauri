import { Howl } from 'howler';
import type { Readable, Writable } from 'svelte/store';
import { readonly, writable } from 'svelte/store';
import { randomUUID } from 'node:crypto';

import type { Conversation, Listener, Session } from './common';

import uhOhUrl from './rsrc/uh-oh-female.mp3';
import airHornUrl from './rsrc/air-horn.mp3';
import bikeHornUrl from './rsrc/bike-horn.mp3';
import bikeBellUrl from './rsrc/bike-bell.mp3';
import typewriterBellUrl from './rsrc/typewriter-bell.mp3';
import typewriterClassicUrl from './rsrc/typewriter-classic.mp3';
import typewriterModernUrl from './rsrc/typewriter-modern.mp3';

export interface WhisperSessionPrefs {
	alertSound: string;
	playTypingSound: boolean;
	speakText: boolean;
	typingSound: string;
	typingSoundVolume: string;
}

const prefDefaults: WhisperSessionPrefs = {
	alertSound: 'bicycle-horn',
	playTypingSound: false,
	speakText: false,
	typingSound: 'typewriter-classic',
	typingSoundVolume: 'half'
};

export class WhisperApi {
	static sessionPrefs: WhisperSessionPrefs = prefDefaults;

	session: Session;
	listeners: Writable<Listener[]>;
	liveText: Writable<string>;
	pastText: Writable<string>;
	howl: Howl | undefined = undefined;

	constructor(conversation: Conversation) {
		this.session = {
			id: randomUUID(),
			conversation: conversation,
			whisperer: conversation.owner,
			listeners: [],
			liveText: '',
			pastText: ''
		};
		this.listeners = writable([]);
		this.pastText = writable('');
		this.liveText = writable('');
		this.liveText.subscribe(this.mockHandleInput.bind(this));
	}

	getSessionPrefs(): WhisperSessionPrefs {
		return { ...WhisperApi.sessionPrefs };
	}

	saveSessionPrefs(prefs: WhisperSessionPrefs) {
		WhisperApi.sessionPrefs = { ...prefs };
	}

	getListenerStore(): Readable<Listener[]> {
		return readonly(this.listeners);
	}

	getPastTextStore(): Readable<string> {
		return readonly(this.pastText);
	}

	getLiveTextStore(): Writable<string> {
		return this.liveText;
	}

	playSound(sound: string) {
		let url = uhOhUrl;
		switch (sound) {
			case 'air-horn':
				url = airHornUrl;
				break;
			case 'bicycle-horn':
				url = bikeHornUrl;
				break;
			case 'bicycle-bell':
				url = bikeBellUrl;
				break;
			case 'typewriter-bell':
				url = typewriterBellUrl;
				break;
			case 'typewriter-classic':
				url = typewriterClassicUrl;
				break;
			case 'typewriter-modern':
				url = typewriterModernUrl;
				break;
		}
		this.howl?.stop();
		this.howl = new Howl({ src: url, format: 'mp3' });
		this.howl.play();
	}

	stopSound() {
		this.howl?.stop();
	}

	private mockHandleInput(newText: string) {
		const oldText = this.session.liveText;
		if (newText === oldText) {
			return;
		}
		if (newText === oldText + '\n') {
			this.session.liveText = '';
			this.session.pastText = this.session.pastText + '\n' + oldText;
			this.pastText.set(this.session.pastText);
		} else {
			this.session.liveText = newText;
		}
		this.liveText.set(this.session.liveText);
	}
}
