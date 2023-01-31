import React from "react";
import Styled from "styled-components";
import { VscQuote } from "react-icons/vsc";
import intrusiveImage from "../../../Utils/images/intrusive1.png"






const Comment = () => {

    const title = "Testimonials"
    const image1 = <img src={intrusiveImage} alt="intrusiveImage" />;
    const image2 = <img src={intrusiveImage} alt="
    intrusiveImage" />;

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

    return ( 
        <CommentContainer>
            <CommentWrapper>
                <div className="testimony">
                    <i><VscQuote/></i>
                    <h4>{ title }</h4>
                    <span>What People Say About Us</span>
                    <p>{title} form our student</p>
                </div>
                <div className="commentBoxs">
                    { CommentBox.map((Comment) => (
                        <div key={Comment.id} className="commentOr Test">
                            <p> {Comment.para} </p>
                            {Comment.img}
                            <span> {Comment.intrusive} </span>
                        </div>
                    ))}
                </div>
            </CommentWrapper>
        </CommentContainer>
     );
}


const CommentContainer = Styled.div``
const CommentWrapper = Styled.div``
 
export default Comment;