import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Saurabh</GradientText> 👋
        </>
      }
      description={
        <>
          I enjoy solving tech problems with lean teams.{' '}
          {/* <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '} */}
          Talk to me about : Engineering Management ⛑️, Databases , Django,
          Golang, Rust{' '}
        </>
      }
      avatar={
        <img
          // className="h-80 w-64"
          src="/assets/images/me.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/saurabhariyan/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.instagram.com/saurabhariyan/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
          {/* // TODO: add resume and github // TODO: add calendly integration? */}
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
