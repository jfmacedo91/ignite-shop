import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100"
  },

  p: {
    maxWidth: 560,
    marginTop: "2rem",
    fontSize: "$xl",
    lineHeight: 1.4,
    textAlign: "center",
    color: "$gray300"
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    fontWeight: "bold",
    textDecoration: "none",
    color: "$green500",
    transition: "all 300ms",

    "&:hover": {
      color: "$green300"
    }
  }
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: 130,
  height: 145,
  marginTop: "4rem",
  padding: "0.25rem",
  borderRadius: 8,
  background: "linear-gradient(#1EA483, #7465D4)",

  img: {
    objectFit: "cover"
  }
});