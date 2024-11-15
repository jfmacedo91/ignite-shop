import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto"
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: 576,
  height: 656,
  padding: "0.25rem",
  borderRadius: 8,
  background: "linear-gradient(#1EA483, #7465D4)",

  img: {
    objectFit: "cover"
  }
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    display: "block",
    marginTop: "1rem",
    fontSize: "$2xl",
    color: "$green300"
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300"
  },

  button: {
    marginTop: "auto",
    padding: "1.25rem",
    fontSize: "$md",
    fontWeight: "bold",
    border: 0,
    borderRadius: 8,
    color: "$white",
    backgroundColor: "$green500",
    transition: "all 200ms",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$green300"
    }
  }
});