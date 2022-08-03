// coordinates input
export default function LocationCoordinates({ register }) {
  return (
    <>
      <label htmlFor="Coordinates">Coordinates</label>

      <label htmlFor="Longitude"></label>
      <input
        type="text"
        id="Longitude"
        placeholder="Longitude"
        {...register("longitude")}
      />

      <label htmlFor="Latitude"></label>
      <input
        type="text"
        id="Latitude"
        placeholder="Latitude"
        {...register("latitude")}
      />
    </>
  );
}
