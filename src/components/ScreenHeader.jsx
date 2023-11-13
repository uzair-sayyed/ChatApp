import networkWifiBatteryImg from "../assets/networkWifiBattery.png";

export default function Header() {
  return (
    <div className='screen-header'>
      <p className='screen-header-time'>9:41</p>
      <img
        src={networkWifiBatteryImg}
        alt='Indicators'
        className='screen-header-image'
      />
    </div>
  );
}
