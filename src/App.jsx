import Header from "./components/Header";
import Entry from "./components/Entry";
import Temp from "./components/Temp";
const images = import.meta.glob("./assets/*.{png,jpg,jpeg}", { eager: true });
function getImage(path) {
  return images[`./assets/${path}`]?.default;
}
import data from "./data";
function App() {
  const tempJsxDataArr = data.map((item) => (
    // <Entry
    //   img={{
    //     src: getImage(item.img.src) || "/fallback.jpg",
    //     alt: item.img.alt,
    //   }}
    //   placeName={item.title}
    //   country={item.country}
    //   location={item.googleMapsLink}
    //   info={item.text}
    //   date={item.dates}
    // />
    <Entry key={item.id} {...item} />
  ));
  return (
    <div className="page">
      <Header />
      {tempJsxDataArr}
      {/* <Entry
        img={{
          src: getImage("mount_faulji.jpg"),
          alt: "mountfaulji",
        }}
        placeName="MountFaulji"
        country="Japan"
        location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
"
        date="12 Jan, 2021-30 Jan, 2021"
      />
      <Entry
        img={{
          src: getImage("geiranger.jpg"),
          alt: "geiranger",
        }}
        placeName="MountFaulji"
        country="Japan"
        location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
"
        date="12 Jan, 2021-30 Jan, 2021"
      />
      <Entry
        img={{
          src: getImage("operahouse.jpg"),
          alt: "operahouse",
        }}
        placeName="MountFaulji"
        country="Japan"
        location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
"
        date="12 Jan, 2021-30 Jan, 2021"
      /> */}

      {/* <Temp
        bool={true}
        arr={[1, 2, 4]}
        id={120}
        name="jaymin is top
      //   number="9327121455"
      //   email="kdnnf@231gmail.com"
      // />
      // <Temp
      //   bool={false}
      //   arr={[1, 3, 3, 3]}
      //   id={420}
      //   name="ja"
      //   number="95"
      //   email="kdnnfil.com"
      // /> */}
    </div>
  );
}
export default App;
