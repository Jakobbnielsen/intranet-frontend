export default interface Posts {
	author: string;
	created_at: string;
	fileDescription: string;
	filePost: boolean;
	fileThumbnail: {
		url: string;
	};
	fileTitle: string;
	image: {
		url: string;
	};
	message: string;
	mustRead: boolean;
	published_at: string;
	title: string;
	updated_at: string;
	uploadedDate: string;
}
