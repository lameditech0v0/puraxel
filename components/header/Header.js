import {
  Box,
  Button,
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import Link from "next/link";
import { useEffect, useState } from "react";

const button = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:last-child": {
            marginBottom: "7.29vw",
          },
        },
      },
    },
  },
});

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          marginRight: "1.04vw",
          color: "#1A1A1A",
          fontFamily: "Pretendard",
          fontSize: "4.17vw",
          fontWeight: 700,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          flex: "0 1 auto",
        },
      },
    },
  },
});

const theme2 = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#1A1A1A",
          fontFamily: "Pretendard",
          fontSize: "14px",
          fontWeight: 700,
          opacity: 0.5,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          flex: "0 1 auto",
        },
      },
    },
  },
});

const menuHeader = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#B6BCC7",
          fontFamily: "Pretendard",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
  },
});

const snsButton = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          marginRight: "3.78vw",
          color: "#1A1A1A",
          fontFamily: "Pretendard",
          fontSize: "3.13vw",
          fontWeight: 700,
        },
      },
    },
  },
});

function Header() {
  // 햄버거 메뉴
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    console.log(state);
  };

  // 반응형
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  // 해당 페이지로 부드럽게 스크롤 이동
  useEffect(() => {
    document.querySelectorAll("a[href^='#']").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(el.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  // 햄버거 메뉴
  const list = (anchor) => (
    <Box
      sx={{
        width: "100vw",
        zIndex: 99999,
        paddingLeft: "3.13vw",
        paddingRight: "3.13vw",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ThemeProvider theme={menuHeader}>
        <Typography variant="h1" gutterBottom>
          제품
        </Typography>
      </ThemeProvider>
      <List>
        {[
          ["PURAXEL-Me", "퓨라셀 미", "/me"],
          ["PURAXEL", "퓨라셀", "/fx5000"],
          ["PURAXEL-Hair", "퓨라셀 헤어", "/hair"],
        ].map((text) => (
          <ThemeProvider key={text} theme={button}>
            <ListItem disablePadding>
              <Link href={text[2]}>
                <ListItemButton>
                  <ThemeProvider theme={theme}>
                    <ListItemText primary={text[0]} />
                  </ThemeProvider>
                  <ThemeProvider theme={theme2}>
                    <ListItemText primary={text[1]} />
                  </ThemeProvider>
                </ListItemButton>
              </Link>
            </ListItem>
          </ThemeProvider>
        ))}
      </List>
      <ThemeProvider theme={menuHeader}>
        <Typography variant="h1" gutterBottom>
          제품 구매
        </Typography>
      </ThemeProvider>
      <List>
        {[["Shop", "쇼핑몰", "https://lmdt.cafe24.com"]].map((text) => (
          <ThemeProvider key={text} theme={button}>
            <ListItem disablePadding>
              <Link href={text[2]}>
                <ListItemButton>
                  <ThemeProvider theme={theme}>
                    <ListItemText primary={text[0]} />
                  </ThemeProvider>
                  <ThemeProvider theme={theme2}>
                    <ListItemText primary={text[1]} />
                  </ThemeProvider>
                </ListItemButton>
              </Link>
            </ListItem>
          </ThemeProvider>
        ))}
      </List>
      <ThemeProvider theme={menuHeader}>
        <Typography variant="h1" gutterBottom>
          고객 서비스
        </Typography>
      </ThemeProvider>
      <List>
        {[
          ["inquery", "제품 문의"],
          ["newsletter", "뉴스레터"],
        ].map((text) => (
          <ThemeProvider key={text} theme={button}>
            <ListItem disablePadding>
              <ListItemButton>
                <ThemeProvider theme={theme}>
                  <ListItemText primary={text[0]} />
                </ThemeProvider>
                <ThemeProvider theme={theme2}>
                  <ListItemText primary={text[1]} />
                </ThemeProvider>
              </ListItemButton>
            </ListItem>
          </ThemeProvider>
        ))}
      </List>
      <ThemeProvider theme={menuHeader}>
        <Typography variant="h1" gutterBottom>
          SNS 바로가기
        </Typography>
      </ThemeProvider>
      <List>
        {[
          [
            "instagram",
            "footer/insta.png",
            "https://www.instagram.com/puraxel/",
          ],
          [
            "facebook",
            "footer/facebook.png",
            "https://www.facebook.com/Puraxel.official/",
          ],
          [
            "youtube",
            "footer/youtube.png",
            "https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ",
          ],
        ].map((text) => (
          <ThemeProvider key={text} theme={button}>
            <li style={{ display: "inline-block" }}>
              <Link href={text[2]}>
                <ListItemButton>
                  <ThemeProvider theme={snsButton}>
                    <img
                      src={text[1]}
                      alt=""
                      style={{
                        marginRight: "1.04vw",
                        width: "4.69vw",
                        height: "4.69vw",
                      }}
                    />
                    <ListItemText primary={text[0]} />
                  </ThemeProvider>
                </ListItemButton>
              </Link>
            </li>
          </ThemeProvider>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {resize <= 768 ? (
        <>
          {["right"].map((anchor) => (
            <header id="header" key={anchor}>
              <div className="header__logo">
                <Link href="/">
                  <a className="logo" aria-label="logo">
                    <svg
                      width="8.85vw"
                      height="4.04vw"
                      viewBox="0 0 106 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M105.434 2.72131C106.185 1.96139 106.185 1.33083 105.434 0.570912C104.683 -0.189002 104.06 -0.189002 103.309 0.570912C98.5243 5.41219 93.7398 10.2535 88.9553 15.0947C89.663 15.8108 90.3729 16.5268 91.0805 17.2451C95.865 12.4039 100.65 7.56259 105.434 2.72131Z"
                        fill="#1D1F36"
                      />
                      <path
                        d="M77.3069 5.46243C70.2854 -1.64242 58.8993 -1.64242 51.8778 5.46243C48.7026 8.67532 45.5274 11.8882 42.3499 15.1034C43.0575 15.8194 43.7674 16.5355 44.475 17.2538C47.6503 14.0409 50.8255 10.828 54.003 7.61283C59.8512 1.69519 69.3335 1.69519 75.1818 7.61283C84.559 17.1014 93.9363 26.5899 103.311 36.0761C104.062 36.836 104.685 36.836 105.436 36.0761C106.187 35.3162 106.187 34.6857 105.436 33.9257L77.3069 5.46243Z"
                        fill="#1D1F36"
                      />
                      <path
                        d="M84.706 19.3819C81.5307 22.5948 78.3555 25.81 75.178 29.0229C69.3298 34.9405 59.8475 34.9405 53.9993 29.0229C46.2313 21.1627 38.4633 13.3026 30.6953 5.4424C19.3686 -6.01868 0 2.09785 0 18.3078V46.4801C0 47.5541 0.440559 47.9999 1.50201 47.9999C2.56346 47.9999 3.00402 47.5541 3.00402 46.4801V28.3784C9.29054 37.9501 22.6625 39.3013 30.6953 31.1733C33.8705 27.9604 37.0457 24.7475 40.2232 21.5323C39.5156 20.8162 38.8057 20.0979 38.0981 19.3819C34.9228 22.5948 31.7476 25.81 28.5701 29.0229C19.1358 38.5691 3.00402 31.8084 3.00402 18.3078C3.00402 4.80721 19.1358 -1.95349 28.5701 7.5928C36.3381 15.4529 44.1061 23.3131 51.8741 31.1733C58.8956 38.2781 70.2817 38.2781 77.3032 31.1733C80.4784 27.9604 83.6537 24.7475 86.8312 21.5323C86.1235 20.8162 85.4136 20.0979 84.706 19.3819Z"
                        fill="#1D1F36"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <ThemeProvider theme={button}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 9h18M7 16h18M7 23h18"
                        stroke="#000000"
                        stroke-width="1.5"
                      />
                    </svg>
                  </Button>
                </ThemeProvider>

                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <ThemeProvider theme={button}>
                    <div className="header__logo2">
                      <div className="logo">
                        <Link href="/" aria-label="logo">
                          <Button onClick={toggleDrawer(anchor, false)}>
                            <svg
                              width="8.85vw"
                              height="4.04vw"
                              viewBox="0 0 106 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M105.434 2.72131C106.185 1.96139 106.185 1.33083 105.434 0.570912C104.683 -0.189002 104.06 -0.189002 103.309 0.570912C98.5243 5.41219 93.7398 10.2535 88.9553 15.0947C89.663 15.8108 90.3729 16.5268 91.0805 17.2451C95.865 12.4039 100.65 7.56259 105.434 2.72131Z"
                                fill="#1D1F36"
                              />
                              <path
                                d="M77.3069 5.46243C70.2854 -1.64242 58.8993 -1.64242 51.8778 5.46243C48.7026 8.67532 45.5274 11.8882 42.3499 15.1034C43.0575 15.8194 43.7674 16.5355 44.475 17.2538C47.6503 14.0409 50.8255 10.828 54.003 7.61283C59.8512 1.69519 69.3335 1.69519 75.1818 7.61283C84.559 17.1014 93.9363 26.5899 103.311 36.0761C104.062 36.836 104.685 36.836 105.436 36.0761C106.187 35.3162 106.187 34.6857 105.436 33.9257L77.3069 5.46243Z"
                                fill="#1D1F36"
                              />
                              <path
                                d="M84.706 19.3819C81.5307 22.5948 78.3555 25.81 75.178 29.0229C69.3298 34.9405 59.8475 34.9405 53.9993 29.0229C46.2313 21.1627 38.4633 13.3026 30.6953 5.4424C19.3686 -6.01868 0 2.09785 0 18.3078V46.4801C0 47.5541 0.440559 47.9999 1.50201 47.9999C2.56346 47.9999 3.00402 47.5541 3.00402 46.4801V28.3784C9.29054 37.9501 22.6625 39.3013 30.6953 31.1733C33.8705 27.9604 37.0457 24.7475 40.2232 21.5323C39.5156 20.8162 38.8057 20.0979 38.0981 19.3819C34.9228 22.5948 31.7476 25.81 28.5701 29.0229C19.1358 38.5691 3.00402 31.8084 3.00402 18.3078C3.00402 4.80721 19.1358 -1.95349 28.5701 7.5928C36.3381 15.4529 44.1061 23.3131 51.8741 31.1733C58.8956 38.2781 70.2817 38.2781 77.3032 31.1733C80.4784 27.9604 83.6537 24.7475 86.8312 21.5323C86.1235 20.8162 85.4136 20.0979 84.706 19.3819Z"
                                fill="#1D1F36"
                              />
                            </svg>
                          </Button>
                        </Link>
                      </div>
                      <div>
                        <Button onClick={toggleDrawer(anchor, false)}>
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 8l18 16M7 24L25 8"
                              stroke="#000000"
                              stroke-width="1.5"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </ThemeProvider>
                  {list(anchor)}
                </Drawer>
              </div>
            </header>
          ))}
        </>
      ) : (
        <header id="header">
          <div className="header__left">
            <div className="logo" onClick={() => (window.location.href = "/")}>
              {resize >= 1920 ? (
                <svg
                  width="106px"
                  height="48px"
                  viewBox="0 0 106 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M105.434 2.72131C106.185 1.96139 106.185 1.33083 105.434 0.570912C104.683 -0.189002 104.06 -0.189002 103.309 0.570912C98.5243 5.41219 93.7398 10.2535 88.9553 15.0947C89.663 15.8108 90.3729 16.5268 91.0805 17.2451C95.865 12.4039 100.65 7.56259 105.434 2.72131Z"
                    fill="#1D1F36"
                  />
                  <path
                    d="M77.3069 5.46243C70.2854 -1.64242 58.8993 -1.64242 51.8778 5.46243C48.7026 8.67532 45.5274 11.8882 42.3499 15.1034C43.0575 15.8194 43.7674 16.5355 44.475 17.2538C47.6503 14.0409 50.8255 10.828 54.003 7.61283C59.8512 1.69519 69.3335 1.69519 75.1818 7.61283C84.559 17.1014 93.9363 26.5899 103.311 36.0761C104.062 36.836 104.685 36.836 105.436 36.0761C106.187 35.3162 106.187 34.6857 105.436 33.9257L77.3069 5.46243Z"
                    fill="#1D1F36"
                  />
                  <path
                    d="M84.706 19.3819C81.5307 22.5948 78.3555 25.81 75.178 29.0229C69.3298 34.9405 59.8475 34.9405 53.9993 29.0229C46.2313 21.1627 38.4633 13.3026 30.6953 5.4424C19.3686 -6.01868 0 2.09785 0 18.3078V46.4801C0 47.5541 0.440559 47.9999 1.50201 47.9999C2.56346 47.9999 3.00402 47.5541 3.00402 46.4801V28.3784C9.29054 37.9501 22.6625 39.3013 30.6953 31.1733C33.8705 27.9604 37.0457 24.7475 40.2232 21.5323C39.5156 20.8162 38.8057 20.0979 38.0981 19.3819C34.9228 22.5948 31.7476 25.81 28.5701 29.0229C19.1358 38.5691 3.00402 31.8084 3.00402 18.3078C3.00402 4.80721 19.1358 -1.95349 28.5701 7.5928C36.3381 15.4529 44.1061 23.3131 51.8741 31.1733C58.8956 38.2781 70.2817 38.2781 77.3032 31.1733C80.4784 27.9604 83.6537 24.7475 86.8312 21.5323C86.1235 20.8162 85.4136 20.0979 84.706 19.3819Z"
                    fill="#1D1F36"
                  />
                </svg>
              ) : (
                <svg
                  width="5.52vw"
                  height="2.5vw"
                  viewBox="0 0 106 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M105.434 2.72131C106.185 1.96139 106.185 1.33083 105.434 0.570912C104.683 -0.189002 104.06 -0.189002 103.309 0.570912C98.5243 5.41219 93.7398 10.2535 88.9553 15.0947C89.663 15.8108 90.3729 16.5268 91.0805 17.2451C95.865 12.4039 100.65 7.56259 105.434 2.72131Z"
                    fill="#1D1F36"
                  />
                  <path
                    d="M77.3069 5.46243C70.2854 -1.64242 58.8993 -1.64242 51.8778 5.46243C48.7026 8.67532 45.5274 11.8882 42.3499 15.1034C43.0575 15.8194 43.7674 16.5355 44.475 17.2538C47.6503 14.0409 50.8255 10.828 54.003 7.61283C59.8512 1.69519 69.3335 1.69519 75.1818 7.61283C84.559 17.1014 93.9363 26.5899 103.311 36.0761C104.062 36.836 104.685 36.836 105.436 36.0761C106.187 35.3162 106.187 34.6857 105.436 33.9257L77.3069 5.46243Z"
                    fill="#1D1F36"
                  />
                  <path
                    d="M84.706 19.3819C81.5307 22.5948 78.3555 25.81 75.178 29.0229C69.3298 34.9405 59.8475 34.9405 53.9993 29.0229C46.2313 21.1627 38.4633 13.3026 30.6953 5.4424C19.3686 -6.01868 0 2.09785 0 18.3078V46.4801C0 47.5541 0.440559 47.9999 1.50201 47.9999C2.56346 47.9999 3.00402 47.5541 3.00402 46.4801V28.3784C9.29054 37.9501 22.6625 39.3013 30.6953 31.1733C33.8705 27.9604 37.0457 24.7475 40.2232 21.5323C39.5156 20.8162 38.8057 20.0979 38.0981 19.3819C34.9228 22.5948 31.7476 25.81 28.5701 29.0229C19.1358 38.5691 3.00402 31.8084 3.00402 18.3078C3.00402 4.80721 19.1358 -1.95349 28.5701 7.5928C36.3381 15.4529 44.1061 23.3131 51.8741 31.1733C58.8956 38.2781 70.2817 38.2781 77.3032 31.1733C80.4784 27.9604 83.6537 24.7475 86.8312 21.5323C86.1235 20.8162 85.4136 20.0979 84.706 19.3819Z"
                    fill="#1D1F36"
                  />
                </svg>
              )}
            </div>
            <nav className="nav__left">
              <ul>
                <li>
                  <Link href="/me">
                    <a>PURAXEL-Me</a>
                  </Link>
                </li>
                <li>
                  <Link href="/fx5000">
                    <a>PURAXEL</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hair">
                    <a>PURAXEL-Hair</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <nav className="nav__right">
              <ul className="nav__right__left">
                {/* <li>{<Modal />}</li> */}
                <li>
                  <Link href="https://lmdt.cafe24.com/">
                    <a target="_blank" rel="noopener noreferrer">
                      쇼핑몰
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#page6" rel="noopener noreferrer">
                    공지사항
                  </a>
                </li>
              </ul>
              <ul className="nav__right__right">
                <li>KR</li>
                <li>EN</li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
