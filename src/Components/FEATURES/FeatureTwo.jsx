import React from 'react'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { GrGroup } from 'react-icons/gr'
import { AiOutlineLock } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'





const FeatureTwo = () => {
  const icon1 = <RiQuestionnaireLine color="#04704E"/>
  const icon2 = <GrGroup color="#04704E"/>
  const icon3 = <AiOutlineLock color="#04704E"/>
  const icon3 = <AiOutlineLock color="#04704E"/>
  const icon4 = <BsBoxArrowUpRight color="#04704E"/>
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
          <div className="twotop flex flex-wrap order-2 justify-center align-center">
            { feature.map((mark) => (
              <div key={ mark.id } className="twotopwrap m-5 w-1/3">
                <div className="w-16 h-16 rounded-full justify-items-center bg-white text-green-800 text-2xl">
                  <i className='flex items-center justify-center pt-5'> { mark.icon } </i>
                </div>
                <div className="twotopcontent w-3/4 ">
                  <h4 className='text-2xl text-white font-semibold py-2'> { mark.title } </h4>
                  <p className='text-xl w- text-green-100'> { mark.desc } </p>
                </div>
              </div>
            ))};
          </div>
  );
};




export default FeatureTwo
