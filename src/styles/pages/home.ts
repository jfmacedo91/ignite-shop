import { styled } from "..";

export const HomeConteiner = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - (100vw - 1180px) / 2)",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(#1EA483, #7465D4)",
  borderRadius: 8,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  minWidth: 540,

  img: {
    objectFit: "cover"
  },

  footer: {
    position: "absolute",
    left: "0.25rem",
    right: "0.25rem",
    bottom: "0.25rem",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00000099",
    padding: "2rem",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 200ms ease-in-out",
    
    strong: {
      fontSize: "$lg",
      color: "$gray100"
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green500"
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    }
  }
});