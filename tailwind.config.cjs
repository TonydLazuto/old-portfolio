/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        128: "32rem",
        112: "28rem",
      },
      height: {
        128: "32rem",
        200: "48rem",
      },
      colors: {
        shade0: "#1A1E38",
        shade1: "#C0C0F2",
        shade2: "#EFF1FD",
        nameIntro: "#D4DFE8",
        keyWordIntro: "#35B7F3",
        durationTimeline: "#3A4D6E",
        timelineDetails: "#4444c9"
      },
      fontFamily: {
        display: ["Brush Script MT", "serif", "courier", "comic sans ms"],
      },
      backgroundImage: {
        'small-bst': "url('/assets/small/bst.webp')",
        'small-inception': "url('/assets/small/inception.webp')",
        'small-irc_irssi': "url('/assets/small/irc_irssi.webp')",
        'small-profile-pic': "url('/assets/small/profile-pic.webp')",
        'small-raspberry': "url('/assets/small/raspberry.webp')",
        'small-syneryx': "url('/assets/small/syneryx.webp')",
        'small-Transcendence-project': "url('/assets/small/Transcendence-project.webp')",
      },
      keyframes: {
        topToBottom: {
          "0%": { transform: "translateY(-30rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        rightToLeft: {
          "0%": { transform: "translateX(30rem)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        arrowPop: {
          "0%": { transform: "translateY(3rem)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 0.6 },
        },
        projectDescriptionPop: {
          "0%": { transform: "translateY(0.7rem)", maxHeight: "0", opacity: 0 },
          "100%": { transform: "translateY(0)", maxHeight: "100%", opacity: 1 },
        },
        projectHoverEnter: {
          "0%": {},
          "100%": {
            borderRadius: "1rem",
            backgroundColor: "#fcfbf7",
            filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.55))",
          },
        },
        projectHoverLeave: {
          "0%": {
            borderRadius: "1rem",
            backgroundColor: "#fcfbf7",
            filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.55))",
          },
          "100%": {},
        },
        projectContainerHoverEnter: {
          "0%": {},
          "100%": {
            padding: "0.5rem",
            marginBottom: "1rem"
          },
        },
        projectContainerHoverLeave: {
          "0%": {
            padding: "0.5rem",
            marginBottom: "1rem"
          },
          "100%": {},
        },
        projectHoverEnterMobile: {
          "0%": {},
          "100%": {
            borderRadius: "1rem",
            backgroundColor: "#fcfbf7",
            filter: "filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
          },
        },
        projectHoverLeaveMobile: {
          "0%": {
            borderRadius: "1rem",
            backgroundColor: "#fcfbf7",
            filter: "filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
          },
          "100%": {},
        },
        projectImgHoverEnter: {
          "0%": {},
          "100%": {
            borderRadius: "1rem",
          },
        },
        projectImgHoverLeave: {
          "0%": {
            borderRadius: "1rem",
          },
          "100%": {},
        },
        tooltipEnter: {
          "0%": {},
          "100%": {
            backdropFilter: "blur(2em)",
            backgroundColor: "rgba(255, 255, 255, .3)",
            filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.45))",
            borderRadius: "1em",
            transform: "scale(1.5)",
            padding: "0.5em",
            cursor: "pointer",
          },
        },
        tooltipLeave: {
          "0%": {
            backdropFilter: "blur(2em)",
            backgroundColor: "rgba(255, 255, 255, .3)",
            filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.45))",
            borderRadius: "1em",
            transform: "scale(1.5)",
            padding: "0.5em",
            cursor: "pointer",
          },
          "100%": {},
        },
      },
      animation: {
        header: "topToBottom 200ms ease-in-out forwards",
        picturePop: "rightToLeft 200ms ease-in-out forwards",

        arrowPop: "arrowPop 600ms ease-in-out forwards",
        burgerMenu: "rightToLeft 300ms ease-in-out forwards",
        projectDescriptionPop:
          "projectDescriptionPop 200ms ease-in forwards",

        projectHoverEnter: "projectHoverEnter 100ms ease-in-out forwards",
        projectHoverLeave: "projectHoverLeave 100ms ease-in-out forwards",
        projectContainerHoverEnter: "projectContainerHoverEnter 100ms ease-in-out forwards",
        projectContainerHoverLeave: "projectContainerHoverLeave 100ms ease-in-out forwards",
        projectHoverEnterMobile: "projectHoverEnterMobile 100ms ease-in-out forwards",
        projectHoverLeaveMobile: "projectHoverLeaveMobile 100ms ease-in-out forwards",
        projectImgHoverEnter: "projectImgHoverEnter 100ms ease-in-out forwards",
        projectImgHoverLeave: "projectImgHoverLeave 100ms ease-in-out forwards",

        tooltipEnter: "tooltipEnter 100ms ease-out forwards",
        tooltipLeave: "tooltipLeave 100ms ease-out forwards",
      },
      dropShadow: {
        "3xl": "0 10px 20px rgba(0,0,0,0.35)",
        "4xl": "0 25px 35px rgba(0,0,0,0.55)",
      },
    },
  }
};