export type GoogleAlbum = {
  id: string;
  title: string;
  productUrl: string;
  mediaItemsCount: number;
  coverPhotoBaseUrl: string;
  coverPhotoMediaItemId: string;
};

export type GoogleAlbumsResponse = {
  albums: GoogleAlbum[];
  nextPageToken?: string;
};

export type GoogleMediaItem = {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: {
    creationTime: string;
    width: string;
    height: string;
    photo: {
      cameraMake: string;
      cameraModel: string;
      focalLength: number;
      apertureFNumber: number;
      isoEquivalent: number;
      exposureTime: string;
    };
    video: {
      cameraMake: string;
      cameraModel: string;
      fps: number;
      status: string;
    };
  };
  contributorInfo: {
    profilePictureBaseUrl: string;
    displayName: string;
  };
  filename: string;
};

export type GoogleMediaItemsResponse = {
  mediaItems: GoogleMediaItem[];
  nextPageToken?: string;
};
