import React from 'react';

// const useStyles = makeStyles(({ breakpoints, palette }) => ({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: '.7rem 18rem',
//     paddingBottom: '10rem',
//     backgroundColor: '#F6F9FB',
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
//     width: '70%',
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
//     [breakpoints.down('xs')]: {
//       marginBottom: '.6rem !important',
//     },
//   },
//   subtitle: {
//     color: palette.primary.dark,
//     [breakpoints.down('sm')]: {},
//     [breakpoints.down('xs')]: {},
//   },

//   contents: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '100%',
//     flexWrap: 'wrap',
//   },

//   card: {
//     width: '275px',
//     marginBottom: '4px',
//   },

//   cardContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     textAlign: 'left',
//     color: 'black',
//   },
// }));

const Research: React.FC = () => (
  <div className="custom-container-contents bg-tertiary-light" id="research">
    <div className="custom-header">
      <h2 className="custom-header-title m-4">Research</h2>
      <h5>
        Here is a taste of the research we conduct and open problems we are
        currently tackling.
      </h5>
    </div>
    <div className="flex flex-col flex-wrap items-center justify-center w-full lg:flex-row lg:justify-around">
      <div className="custom-card">
        <div className="custom-card-content">
          <a
            href="https://medium.com/initc3org/honeybadgerswap-making-mpc-as-a-sidechain-364bebdb10a5"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-text"
          >
            <h6>HoneyBadgerSwap: Making MPC as a Sidechain</h6>
            <small>2021</small>
            <p style={{ fontWeight: 'normal' }}>
              It is well known that blockchains (just the public bulletin board
              part) on their own do not provide strong confidentiality and
              privacy...
            </p>
          </a>
          <a
            href="https://medium.com/initc3org/honeybadgerswap-making-mpc-as-a-sidechain-364bebdb10a5"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-btn"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="custom-card">
        <div className="custom-card-content">
          <a
            href="https://arxiv.org/abs/2005.14051"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-text"
          >
            <h6>
              Blockchain is Watching You: Profiling and Deanonymizing Ethereum
              Users
            </h6>
            <small>2020</small>
            <p style={{ fontWeight: 'normal' }}>
              Ethereum is the largest public blockchain by usage. It applies an
              account-based model, which is...
            </p>
          </a>
          <a
            href="https://arxiv.org/abs/2005.14051"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-btn"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="custom-card">
        <div className="custom-card-content">
          <a
            href="https://eprint.iacr.org/2019/1111"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-text"
          >
            <h6>
              Short Paper: Towards Characterizing Sybil Attacks in
              Cryptocurrency Mixers
            </h6>
            <small>2019</small>
            <p style={{ fontWeight: 'normal' }}>
              Sybil attacks are a well-studied problem in peer-to-peer
              networking systems. However...
            </p>
          </a>
          <a
            href="https://eprint.iacr.org/2019/1111"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card-btn"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Research;
