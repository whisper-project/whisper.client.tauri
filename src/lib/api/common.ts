export interface Whisperer {
	name: string;
	id: string;
}

export interface Listener {
	name: string;
	id: string;
}

export interface Conversation {
	name: string;
	id: string;
	owner: Whisperer
}

export interface Session {
	id: string;
	conversation: Conversation;
	whisperer: Whisperer;
	listeners: Listener[];
	liveText: string;
	pastText: string;
}