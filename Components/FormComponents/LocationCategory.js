
// css
import styles from "../../styles/addLocation.module.css"
import CategoryButton from '../CategoryButton';



// resonsive category labels
export default function LocationCategory({ register, categories }) {
  return (
    <>

    <CategoryButton register={register} id={"category_seaside"} name={"Seaside"} categories={categories} />
    <CategoryButton register={register} id={"category_castles"} name={"Castles"} categories={categories} />
    <CategoryButton register={register} id={"category_caves"} name={"Caves"} categories={categories} />
    <CategoryButton register={register} id={"category_peaceful"} name={"Peaceful"} categories={categories} />
    <CategoryButton register={register} id={"category_hiking"} name={"Hiking"} categories={categories} />
    <CategoryButton register={register} id={"category_hills"} name={"Hills"} categories={categories} />
    <CategoryButton register={register} id={"category_historic"} name={"Historic"} categories={categories} />
    <CategoryButton register={register} id={"category_secluded"} name={"Secluded"} categories={categories} />
    <CategoryButton register={register} id={"category_casual"} name={"Casual"} categories={categories} />
    <CategoryButton register={register} id={"category_lakes"} name={"Lake"} categories={categories} />
    <CategoryButton register={register} id={"category_busy"} name={"Busy"} categories={categories} />
    <CategoryButton register={register} id={"category_woods"} name={"Woods"} categories={categories} />


    </>
  );
}
