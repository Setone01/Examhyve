import React from "react";
import styled from "styled-components";
import Button from "../../BUTTON/Button";
import HeroImg1 from "../../PAGES/Courses/courseimg/IMG/heroimg1.png"
import HeroImg2 from "../../PAGES/Courses/courseimg/IMG/heroimg2.png"




const Heropage = () => {
    const heroTitle = "Courses"
    const course1 = "Mathematics"
    const course2 = "English"
    const button = <button type="button" className="w-40 h-14 bg-amber-500" >Start Test</button>
    const heroImg1 = <img src={HeroImg1} style={{width:"272px", borderTopLeftRadius:"8px", borderBottomLeftRadius:"8px", height:"364px"}} alt="" srcset="" />
    const heroImg2 = <img src={HeroImg2} style={{width:"272px", borderTopLeftRadius:"8px", borderBottomLeftRadius:"8px", height:"364px"}} alt="" srcset="" />

    return ( 
        <HeroContainer>
            <HeroWrapper>
                <HeroTitle className="text-4xl font-bold mb-8">
                        {heroTitle}
                </HeroTitle>
                <HeroContent> 
                      
                    <HeroLeft>
                        <div className="leftcontainer flex w-full border rounded-xl border-amber-500">
                            {heroImg1}
                            <div className="course1 mx-11 flex flex-col justify-center items-center w-64">
                                <div className="title text-2xl ">{course1}</div>
                                <div className="button text-lg">{button}</div>
                            </div>
                        </div>
                    </HeroLeft>
                    <HeroRight>
                    <div className="rightcontainer flex w-full border rounded-xl border-amber-500">
                            {heroImg2}
                            <div className="course2 mx-11 flex flex-col justify-center items-center w-64">
                                <div className="title text-2xl">{course2}</div>
                                <div className="button text-lg">{button}</div>
                            </div>
                        </div>
                    </HeroRight>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
     );
}

const HeroContainer = styled.div`
margin-top: 10rem;`
const HeroWrapper = styled.div`
margin: auto;
width: 90%;
`
const HeroContent = styled.div`
text-align: start;
display: flex;
justify-content: space-between;

`
const HeroTitle = styled.div``
const HeroLeft = styled.div``
const HeroRight = styled.div``
 
export default Heropage;