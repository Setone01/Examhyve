import React from "react";
import styled from "styled-components";
import ChooseImg from "../../../Utils/images/Rectangle 110.png"





const Choose = () => {

    const difficulties = [
        {
            id : 1,
            choice: "EASY",
            img: ChooseImg
        },
        {
            id : 2,
            choice: "NORMAL",
            img: ChooseImg
        },
        {
            id : 3,
            choice: "PROFESSIONAL",
            img: ChooseImg
        }
    ]

    return ( 
        <ChoiceSection>
            <div className="title text-4xl font-bold py-10">Or Choose your Difficulty </div>
            <div className="flex gap-7">
                {difficulties.map((level) => (
                    <div key={level.id} className="banner">
                        <div className="img">
                            <img src={level.img} style={{width:"355px", height: "230px", borderRadius: "11px0"}} alt="" />
                        </div>
                        <div className="bullecting">
                            <h2 className="text-2xl text-center pt-2 font-semibold">{level.choice}</h2>
                        </div> 
                    </div>
                ))}
            </div>
        </ChoiceSection>
     );
}

const ChoiceSection = styled.div`
    width: 90%;
    margin: auto;
    padding-bottom: 130px
`
 
export default Choose;