import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/ui/ForYouList/ForYouList';
import JustAdded from '../components/ui/JustAdded/JustAdded';
import PosterView from '../components/ui/PosterView/PosterView';
import CastInfo from '../components/ui/CastInfo/CastInfo';


export default function HomeView() {
  return (
    <div>
        <MainLayout> 
            <FeaturedMedia />
            <PosterView />
            <CastInfo />
        </MainLayout>
    </div>
  )
}
