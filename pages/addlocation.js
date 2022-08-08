// component
import AddLocationPage from "../Components/addLocationPage";

// IF USING AUTH0 FOR THE ENTIRE PAGE, USE THIS:
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// const MyProtectedPage = withPageAuthRequired(AddLocationPage);
// export default function Addlocation() {
//   return (
//     <>
//       <MyProtectedPage></MyProtectedPage>
//     </>
//   );
// }

// IF USING AUTH0 ONLY FOR A BUTTON ON THE PAGE, USE THIS:
export default function AddLocation() {
  return (
    <AddLocationPage />
  )
};