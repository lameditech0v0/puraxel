import * as React from "react";

import { Button, Typography, Modal, Box } from "@mui/material";

import ModeSelector from "components/modeSelector/ModeSelector";

import { hairElement, fx5000Element } from "lib/mode";

const hair = [
  { title: "레이저", img: "url(modeSelector/hair_laser.webp)", num: "1" },
  { title: "초음파", img: "url(modeSelector/hair_sonic.webp)", num: "2" },
  { title: "갈바닉", img: "url(modeSelector/hair_gal.webp)", num: "3" },
  { title: "쿨링", img: "url(modeSelector/hair_cooling.webp)", num: "4" },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Play() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </section>
  );
}
