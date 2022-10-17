import ModeSelector from "components/modeSelector/ModeSelector";

import { hairElement, fx5000Element } from "lib/mode";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
      {/* <div>
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
      </div> */}
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
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

      <div>
        <div style={{ display: "flex", width: "100px", height: "100px" }}>
          <div>test</div>
          <div></div>
        </div>
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
