import { StaticImage } from 'gatsby-plugin-image';

const TheoryLogo = () => {
  return (
    <StaticImage
      src="../images/theory_ventures.png"
      alt="Theory Ventures logo"
      placeholder="none"
      width={350}
    />
  );
};

export default TheoryLogo;
