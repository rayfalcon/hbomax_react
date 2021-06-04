import Router from 'next/dist/next-server/server/router';
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useStateContext} from '../components/HBOProvider';
import MainLayout from '../components/layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/ui/ForYouList/ForYouList';
import JustAdded from '../components/ui/JustAdded/JustAdded';
import PosterView from '../components/ui/PosterView/PosterView';
import MediaRow from '../components/ui/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()

  useEffect(() => {
      
  }, [])
  return AuthCheck(
    <MainLayout> 
            <FeaturedMedia />
            <MediaRow />
            <ForYouList />
            <JustAdded />
            <PosterView />
    </MainLayout>
  )
}
