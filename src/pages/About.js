const Aboutpage = () => {
  return (
    <div className="about">
      <h3 className="about__title">ABOUT PAGE</h3>
      <div className="about__info">
        <p>Your Favourite Tv Shows</p>
        <div>
          <p>Technologies Used:</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios for requesting</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>Deploying to Netlify</li>
          </ul>
        </div>
      </div>
      <footer>
        <p style={{textAlign:"center",marginTop:"10%"}}>CopyRight @Aman Prasad 2022</p>
      </footer>
    </div>
  );
};

export default Aboutpage;