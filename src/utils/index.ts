export const downloadCV = () => {
  // Create a link to download the CV
  const link = document.createElement("a");
  link.href = "/assets/Franco_Gonzalez_CV.pdf";
  link.download = "Franco_Gonzalez_CV.pdf";
  link.click();
};
