export default function LocationNameAndAddress({ register }) {
  return (
    <>
      <label htmlFor="locationName">Location Name:</label>
      <input type="text" id="locationName" {...register('location_name')} />
      {/* address section */}
      <label htmlFor="Location Address">Location Address:</label>

      <label htmlFor="Street/road"></label>
      <input
        type="text"
        id="Street/road"
        placeholder="Street/Road"
        {...register('street')}
      />

      <label htmlFor="location Town"></label>
      <input
        type="text"
        id="location Town"
        placeholder="Town"
        {...register('town')}
      />

      <label htmlFor="location Region"></label>
      <input
        type="text"
        id="locationn Region"
        placeholder="Region"
        {...register('region')}
      />

      <label htmlFor="location Postcode"></label>
      <input
        type="text"
        id="location Postcode"
        placeholder="Postcode"
        {...register('postcode')}
      />
    </>
  );
}
