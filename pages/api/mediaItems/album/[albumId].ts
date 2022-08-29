import { NextApiRequest, NextApiResponse } from 'next';
import {
  GoogleMediaItem,
  GoogleMediaItemsData,
} from '../../../../types/google';
import {
  getGoogleAlbumMediaItems,
  getGoogleApiToken,
} from '../../../../utils/GoogleApi';

export default async function AlbumMediaItems(
  req: NextApiRequest,
  res: NextApiResponse<GoogleMediaItem[]>
) {
  const albumId: string = req.query.albumId as string;
  const bearerToken = await getGoogleApiToken();

  let nextPageToken: string | undefined = '';
  let mediaItems: GoogleMediaItem[] = [];

  do {
    const data: GoogleMediaItemsData = await getGoogleAlbumMediaItems(
      bearerToken,
      albumId,
      nextPageToken
    );

    if (data.mediaItems) {
      mediaItems = [...mediaItems, ...data.mediaItems];
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  res.status(200).json(mediaItems);
}
