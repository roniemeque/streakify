import fetch from 'isomorphic-unfetch';

const Home = ({ whatItIs }) => (
  <h1>
ALL RIGHT YO THIS IS:
    {' '}
    {whatItIs}
  </h1>
);

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/cool');
  const data = await res.json();

  return { whatItIs: data };
};

export default Home;
