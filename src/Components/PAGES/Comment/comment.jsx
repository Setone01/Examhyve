import React from "react";
import Styled from "styled-components";
import { VscQuote } from "react-icons/vsc";
import intrusiveImage from "../../../Utils/images/intrusive1.png"






const Comment = () => {

    const title = "Testimonials"
    const image1 = <img src={intrusiveImage} alt="intrusiveImage" style={{width: "36px", height: "36px", borderRadius: "50%"}}/>;
    const image2 = <img src={intrusiveImage} alt="
    intrusiveImage" style={{width: "36px", height: "36px", borderRadius: "50%"}}/>;

    const CommentBox = [ 
        {
        id : 1,
        img : image1,
        intrusive : "First Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
        {
        id : 2,
        img : image2,
        intrusive : "Second Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
        {
        id : 3,
        img : image1,
        intrusive : "Third Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
        {
        id : 4,
        img : image2,
        intrusive : "Fourth Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
        {
        id : 5,
        img : image1,
        intrusive : "Fifth Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
        {
        id : 6,
        img : image2,
        intrusive : "Sixth Instrusive",
        para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        },
    ]
    // const Radio = () => {
    //     const isRadioSelected = ( value: string): boolean => true;

    //     const handleRadioClick = (e: React.ChangeEvent<CommentBox.id>): void => console.log("click");
    // }

    return ( 
        <CommentContainer>
            <CommentWrapper className=" m-auto py-52 flex">
                <div className="testimony w-1/3">
                    <i className="text-7xl text-green-700"><VscQuote/></i>
                    <h4 className="text-2xl text-slate-400 mb-3 mt-2">{ title }</h4>
                    <span className="text-black text-4xl font-semibold">People Say About Us</span>
                    <p className="text-lg py-4">{title} form our student</p>
                </div>
                <div className="commentBoxs flex flex-nowrap gap-12 w-2/3 ">
                    
                    { CommentBox.map((Comment) => (
                        <div key={Comment.id} className="commentOrTest border border-green-600 py-8 rounded-3xl relative">
                            <div className="w-84 px-12">
                                <p className="w-72 text-lg text-center"> {Comment.para} </p>
                            </div>
                            <div className="border my-5 border-green-100"></div>
                            <div className="w-84 px-12">
                                <div className="imgAndName flex bottom-7 w-56 justify-between items-center">
                                    <div className="justify-between">
                                        {Comment.img}
                                    </div>
                                    <span className="text-xl font-semibold"> {Comment.intrusive} </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CommentWrapper>
            {/* <div className="radioButton">
                <input type="radio" name="radio-btn" value="radio1" checked={isRadioSelected("radio1")} onChange={handleRadioClick} id="" />
                <input type="radio" name="radio-btn" value="radio2" checked={isRadioSelected("radio2")} onChange={handleRadioClick} id="" />
                <input type="radio" name="radio-btn" value="radio3" checked={isRadioSelected("radio3")} onChange={handleRadioClick} id="" />
            </div> */}
        </CommentContainer>
     );
}


const CommentContainer = Styled.div``
const CommentWrapper = Styled.div`

width: 90%;
`

 
export default Comment;