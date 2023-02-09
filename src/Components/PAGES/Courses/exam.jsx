import React from "react";
import styled from "styled-components";
import WeacImg from "./courseimg/IMG/Waec_logo.png"
import NecoImg from "./courseimg/IMG/Neco_official_banner.png"
import JambImg from "./courseimg/IMG/Official_JAMB_logo.png"


const ExaminationPath = () => {

    const title = "Examination Path"
    // const weacImage = {WeacImg}
    // const necoImage = {NecoImg}
    // const jambImage = {JambImg}

    const allExam = [
        {id : 1,
        coExam : "WAEC",
        img : WeacImg,
        para : "Explore questions from year 2000 - 2021"},

        {id : 2,
        coExam : "NECO",
        img : NecoImg,
        para : "Explore questions from year 2000 - 2021"},

        {id : 3,
        coExam : "JAMB",
        img : JambImg,
        para : "Explore questions from year 2000 - 2021"}
    ]

    return ( 
        <ExamContainer>
            <ExamWrapper>
              <div className="title text-4xl font-bold">{title}</div>
              <ExamContents>
                <div className="Allexams flex flex-wrap justify-between">
                    { allExam.map((Exams) => (
                        <div key={Exams.id} className="w-56 h-80">
                        <div className="examImage w-40 h-48 mb-14">
                            <img src={Exams.img} alt="exam board" />
                        </div>
                        <div className="examin text-2xl mb-3 font-bold">
                            {Exams.coExam}
                        </div>
                        <div className="epara text-lg ">
                            {Exams.para}
                        </div>
                    </div>))}
                </div>
              </ExamContents>  
            </ExamWrapper>
        </ExamContainer>
     );
}

const ExamContainer = styled.div`
margin-top: 195px;`
const ExamWrapper = styled.div`
width: 90%;
margin: auto;`
const ExamContents = styled.div`
margin-top: 81px;
width: 986px;`
 
export default ExaminationPath;