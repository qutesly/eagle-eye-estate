import React from "react";
import Home from "./page/Home";
import AboutUs from "./component/about-us/AboutUs";
import Mission from "./component/mission/Mission";
import Property from "./component/our-properties/Property";
import Data from "./component/our-properties/propData";
import FAQ from "./component/faq/FAQ";
import ClientReview from "./component/client-review/Client-review";
import Newsletter from "./component/newsletter/Newsletter";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App" style={{
      fontFamily: 'Roboto'
    }}>
      <Home />
      <AboutUs />
      <Mission />
      <Property
        title="Our Properties"
        propertyList={Data.propData1}
        buttonText="View All Landed Properties"
      />
      <Property
        title=""
        propertyList={Data.propData2}
        buttonText="View All Housing Estate"
      />
      <FAQ />
      <ClientReview />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
