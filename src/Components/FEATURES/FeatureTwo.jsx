import React from 'react'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { GrGroup } from 'react-icons/gr'
import { AiOutlineLock } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'



const FeatureTwo = () => {
  const icon1 = <RiQuestionnaireLine/>
  const icon2 = <GrGroup/>
  const icon3 = <AiOutlineLock/>
  const icon4 = <BsBoxArrowUpRight/>
  const feature =[
        {
            id: 1,
            icon: icon1,
            title: "Past Questions",
            desc: "Learn past questions in levels and get rewards for it",
        },
        {
            id: 2,
            icon: icon2,
            title: "Stay Motivated",
            desc: "We make the site and content easy for user to understand easily come back",
        },
        {
            id: 3,
            icon: icon3,
            title: "Engage students",
            desc: "We let students at various levels have access where they can share their success together.",
        },
        {
            id: 4,
            icon: icon4,
            title: "Share the Success",
            desc: "We believe in sharing your success board will encourage others to work toward their own goal",
        },
    ]
  return (
    <featureTwoCon>
      <featureTwoWrapper>
        <featureTwoTopContainer>
          <div className="fttop">
            { feature.map((mark) => (
              <div key={ mark.id } className="fttopwrap">
                <div className="fttopicon">
                  <i> { mark.icon } </i>
                </div>
                <div className="fttopcontent">
                  <h4> { mark.title } </h4>
                  <p> { mark.desc } </p>
                </div>
              </div>
            ))};
          </div>
        </featureTwoTopContainer>
      </featureTwoWrapper>
    </featureTwoCon>
  );
};



export default FeatureTwo