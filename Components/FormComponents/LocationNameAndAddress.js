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

      {/* <label htmlFor="location Region"></label>
      <input
        type="text"
        id="locationn Region"
        placeholder="Region"
        {...register('region')}
      /> */}
      <label htmlFor="region-select">Choose a Region:</label>
      <select name="region" id="region-select" {...register('region')}>
        <option value="West Midlands">West Midlands</option>
        <option value="London">London</option>
        <option value="North East">North East</option>
        <option value="North West">North West</option>
        <option value="Yorkshire">Yorkshire</option>
        <option value="East Midlands">East Midlands</option>
        <option value="South East">South East</option>
        <option value="East of England">East of England</option>
        <option value="South West">South West</option>
        <option value="North Wales">North Wales</option>
        <option value="Mid Wales">Mid Wales</option>
        <option value="South West Wales">South West Wales</option>
        <option value="South East Wales">South East Wales</option>
        <option value="South West Scotland">South West Scotland</option>
        <option value="North East Scotland">North East Scotland</option>
        <option value="Central Scotland East">Central Scotland East</option>
        <option value="Central Scotland West">Central Scotland West</option>
        <option value="Scottish Highlands and Western Isles">
          Scottish Highlands and Western Isles
        </option>
        <option value="Shetland and Orkney Islands">
          Shetland and Orkney Islands
        </option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="Glasgow">Glasgow</option>
        <option value="Antrim">Antrim</option>
        <option value="Armagh">Armagh</option>
        <option value="Down">Down</option>
        <option value="Fermanagh">Fermanagh</option>
        <option value="Londonderry">Londonderry</option>
        <option value="Tyrone">Tyrone</option>
      </select>

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
