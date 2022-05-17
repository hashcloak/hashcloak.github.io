import React from 'react';

// const useStyles = makeStyles(({ breakpoints, palette }) => ({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: '.7rem 18rem',
//     paddingBottom: '10rem',
//     [breakpoints.down('md')]: {
//       paddingRight: '8rem',
//       paddingLeft: '8rem',
//     },
//     [breakpoints.down('sm')]: {
//       paddingRight: '8rem',
//       paddingLeft: '8rem',
//     },
//     [breakpoints.down('xs')]: {
//       padding: '5rem 2rem',
//     },
//   },
//   header: {
//     textAlign: 'center',
//     marginTop: '10rem !important',
//     marginBottom: '5rem !important',
//     [breakpoints.down('sm')]: {
//       width: '100%',
//     },
//     [breakpoints.down('xs')]: {
//       marginTop: '0 !important',
//       marginBottom: '2rem !important',
//     },
//   },
//   title: {
//     color: palette.primary.dark,
//     fontWeight: 'bold',
//     marginBottom: '2rem !important',
//   },

//   contents: {
//     display: 'flex',
//     alignItems: 'start',
//     [breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     margin: '0 4px',
//     maxWidth: '300px',
//     [breakpoints.down('sm')]: {
//       marginBottom: '4px',
//     },
//   },
//   contentTitle: {
//     marginTop: '4px',
//   },
//   description: {
//     color: '#868686',
//   },
// }));

const Services: React.FC = () => (
  <div className="custom-container-contents" id="services">
    <div className="custom-header">
      <h2 className="custom-header-title">Services</h2>
    </div>
    <div className="custom-contents items-start">
      <div className="flex py-2.5 flex-col w-72 items-center">
        <img src="./assets/services-bespoke.png" alt="Bespoke" />
        <h5 className="font-bold lg:py-2 py-1">Bespoke R&amp;D</h5>
        <p className="text-secondary-dark">
          Have a problem that can leverage anonymous network, ZKPs, MPC or
          another privacy enhancing technique?
          <br />
          We can help get you started and assist your team with the initial
          prototyping phase of integrating these tools into your product.
        </p>
      </div>
      <div className="flex py-2.5 flex-col w-72 items-center">
        <img src="./assets/services-audits.png" alt="security-audits" />
        <h5 className="font-bold lg:py-2 py-1">Security Audits</h5>
        <p className="text-secondary-dark">
          We assist teams to securely integrate advanced cryptographic tooling
          into their product and conduct security reviews towards that end.
        </p>
      </div>
      <div className="flex py-2.5 flex-col w-72 items-center">
        <img src="./assets/services-advisory.png" alt="advisory" />
        <h5 className="font-bold lg:py-2 py-1">Advisory</h5>
        <p className="text-secondary-dark">
          Need someone that can stay on top of the ongoings in the crypto
          (graphy and currency) space in order to get a step ahead of the
          competition?
          <br />
          We assist teams with developing strategies with respect to privacy
          enhancing technology in the fast moving cryptocurrency industry
        </p>
      </div>
    </div>
  </div>
);

export default Services;
