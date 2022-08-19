import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleAlbum } from '../types/google';
import { AppDispatch, RootState } from '../app/store';
import { setFilter, fetchAllGoogleAlbums } from '../features/photoSlice';
import styles from '../styles/Albums.module.scss';
import AlbumList from '../components/album-list';
import ElementCounter from '../components/element-counter';
import Filter from '../components/filter';
import Layout from '../components/layout';
import Loader from '../components/loader';

const Albums: NextPage = () => {
  const loading = useSelector((state: RootState) => state.photo.loading);
  const albums = useSelector((state: RootState) => state.photo.albums);
  const filter = useSelector((state: RootState) => state.photo.filter);
  const dispatch: AppDispatch = useDispatch();
  const [filteredAlbums, setFilteredAlbums] = useState(albums);

  const setTitleFilter = (titleFilter: string) => {
    dispatch(setFilter(titleFilter));
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAllGoogleAlbums());
      setFilteredAlbums(albums);
    }

    if (albums.length == 0) {
      fetchData();
    }
  }, [dispatch, albums]);

  useEffect(() => {
    setFilteredAlbums(
      albums.filter((album: GoogleAlbum) =>
        album.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [albums, filter]);

  return (
    <Layout>
      <Head>
        <title>Albums</title>
        <meta name="description" content="Albums" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <Filter
            placeholder="Search"
            filter={filter}
            setFilter={setTitleFilter}
          />
          <ElementCounter
            count={filteredAlbums.length}
            text={{ singular: 'Album', plural: 'Albums' }}
          />
          <AlbumList albums={filteredAlbums} />
        </section>
      )}
    </Layout>
  );
};

export default Albums;
