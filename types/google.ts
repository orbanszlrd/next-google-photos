export type GoogleAlbum = {
  id: string;
  title: string;
  productUrl: string;
  mediaItemsCount: number;
  coverPhotoBaseUrl: string;
  coverPhotoMediaItemId: string;
};

export type GoogleAlbumsData = {
  albums: GoogleAlbum[];
  nextPageToken?: string;
};
