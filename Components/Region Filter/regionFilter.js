// css
import styles from '../../styles/FilterRegion.module.css'

export default function RegionFilter ({onChange, value}){

    let regions = [
        {value:"London",label:"London"},
        {value:"North East",label:"North East"},
        {value:"North West",label:"North West"}, 
        {value:"Yorkshire",label:"Yorkshire"}, 
        {value:"East Midlands",label:"East Midlands"}, 
        {value:"West Midlands",label:"West Midlands"}, 
        {value:"South East",label:"South East"}, 
        {value:"East of England",label:"East of England"},
        {value:"South West",label:"South West"},
        {value:"North Wales",label:"North Wales"},
        {value:"South West Wales",label:"South West Wales"},
        {value:"South East Wales",label:"South East Wales"},
        {value:"Mid Wales",label:"Mid Wales"},
        {value:"South West Scotland",label:"South West Scotland"},
        {value:"North East Scotland",label:"North East Scotland"},
        {value:"Central Scotland East",label:"Central Scotland East"},
        {value:"Central Scotland West",label:"Central Scotland West"},
        {value:"Sottish Highlands and Western Isles",label:"Sottish Highlands and Western Isles"},
        {value:"Shetland and the Orkney Islands",label:"Shetland and the Orkney Islands"},
        {value:"Edinburgh",label:"Edinburgh"},
        {value:"Glasgow",label:"Glasgow"},
        {value:"Antrim",label:"Antrim"},
        {value:"Armagh",label:"Armagh"},
        {value:"Down",label:"Down"},
        {value:"Fermanagh",label:"Fermanagh"},
        {value:"Londonderry",label:"Londonderry"},
        {value:"Tyrone",label:"Tyrone"},
      ]

    return   <div>
    <select className={styles.dropdown} id="regions" onChange={onChange} value={value}>
<option value="0">Region:</option>
{regions.map(reg => <option key={reg.value} value={reg.value}>{reg.label}</option>)}
  </select>
</div>
}