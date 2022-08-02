import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import dynamic from 'next/dynamic'
import AddLocationPage from '../Components/addLocationPage';

const Cloudinary = dynamic(() => import("../Components/FormComponents/Cloudinary"), {
    loading: () => "Loading...",
    ssr: false
  });
// amenities pics


const MyProtectedPage = withPageAuthRequired(AddLocationPage)
export default function Addlocation() {


  return (
    <>
    <MyProtectedPage>
    
      </MyProtectedPage>
    </>
  );
}
