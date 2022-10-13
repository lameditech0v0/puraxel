import ModeSelector from "components/modeSelector/ModeSelector";

import { hairElement, fx5000Element } from "lib/mode";

const hair = [
  { title: "레이저", img: "url(modeSelector/hair_laser.webp)", num: "1" },
  { title: "초음파", img: "url(modeSelector/hair_sonic.webp)", num: "2" },
  { title: "갈바닉", img: "url(modeSelector/hair_gal.webp)", num: "3" },
  { title: "쿨링", img: "url(modeSelector/hair_cooling.webp)", num: "4" },
];

export default function Play() {
  return (
    <section
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div>
        {hairElement.map((x, y) => (
          <ModeSelector
            key={y}
            numbering={x.num}
            title={x.title}
            image={x.img}
          />
        ))}
      </div>

      <br />
      <div>
        {fx5000Element.map((x, y) => (
          <ModeSelector
            key={y}
            numbering={x.num}
            title={x.title}
            image={x.img}
          />
        ))}
      </div>
    </section>
  );
}
