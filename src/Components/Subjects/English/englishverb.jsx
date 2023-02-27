import React from "react";
import styled from "styled-components";
import EnglishImg from "../../../Utils/images/image 13.png"
import Button from "../../BUTTON/Button";
import { useNavigate } from "react-router-dom";
import route from "../../../routes.const";
import Choose from "./choose"


const EnglishTEst = () => {

    const Navigate = useNavigate();
    function handleNavigate() {
        Navigate("/")
    };

    return ( 

        <EnglishTEstContainer>
            <div className="SubjectSection">
                <div className="subject">
                    <div className="title text-5xl font-bold py-12">English Language</div>
                    <div className="banner">
                        <h3 className="text-4xl font-bold">As You Were....</h3>
                        <div className="bulleting relative">
                            <div className="bulletingImg relative "><img src={EnglishImg} style={{width:"1235px", height: "369px"}} alt="" /></div>
                            <div className="bulletingBox" >
                                <h2 className="text-4xl font-bold gap-6">Verb</h2>
                                <div className="subButton flex w-60 h-13 p-4 relative rounded-md my-7 justify-between">
                                    <div className="sub text-lg font-semibold">
                                        <span className="cursor-pointer">English Language</span>
                                    </div>
                                    <div className="marginline h-10 "></div>
                                    <div className="subtime text-lg font-semibold">
                                        <span>20min</span>
                                    </div>
                                </div>
                                <Button onClick={handleNavigate} btnText="Take Test" to="/test"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {<Choose/>}
        </EnglishTEstContainer>
        
     );
}


const EnglishTEstContainer = styled.div`
.SubjectSection{
    display: flex;
    justify-content: center;
    padding-top: 7rem;
    padding-bottom: 4rem;
    width: 90%;
    margin: 0 auto;
    flex-flow: column;
    z-index: 10;
}

.bulletingBox{
    width: 340px;
    height: 300px;
    border-radius: 16px;
    position: absolute;
    background: #fdfbff;
    top: 10%;
    left: 4%;
    // text-align: center;
    // padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.marginline{
    width: 1px;
    position: absolute;
    right: 4.6rem;
    bottom: -5px;
    color: rgba(4, 112, 78, 0.24);
}
.subButton{
    background-color: rgba(4, 112, 78, 0.06);
    z-index: 1px;
}
`
export default EnglishTEst;