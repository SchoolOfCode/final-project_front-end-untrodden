
// css
import styles from "../../styles/addLocation.module.css
import CategoryButton from '../CategoryButton';



// resonsive category labels
export default function LocationCategory({ register }) {
  return (
    <>

    <CategoryButton register={register} id={"category_seaside"} name={"Seaside"}/>
    <CategoryButton register={register} id={"category_castles"} name={"Castles"}/>
    <CategoryButton register={register} id={"category_caves"} name={"Caves"}/>
    <CategoryButton register={register} id={"category_peaceful"} name={"Peaceful"}/>
    <CategoryButton register={register} id={"category_hiking"} name={"Hiking"}/>
    <CategoryButton register={register} id={"category_hills"} name={"Hills"}/>
    <CategoryButton register={register} id={"category_historic"} name={"Historic"}/>
    <CategoryButton register={register} id={"category_secluded"} name={"Secluded"}/>
    <CategoryButton register={register} id={"category_casual"} name={"Casual"}/>
    <CategoryButton register={register} id={"category_lakes"} name={"Lake"}/>
    <CategoryButton register={register} id={"category_busy"} name={"Busy"}/>
    <CategoryButton register={register} id={"category_woods"} name={"Woods"}/>


    </>
  );
}
