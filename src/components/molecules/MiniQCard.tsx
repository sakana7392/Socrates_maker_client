import { useState } from "react";
import { Tag } from "../atoms/Tag";
import { ToDetailBtn } from "../atoms/ToDetailBtn";

type MiniQuestionCardProp={
    answerText:string;
    questionText:string;
    css:string;
    tag:string;
    onClickAbout?: ()=>void;
    heightAll:string;
    heightLow:string
}


export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const {answerText,questionText,css,tag}=props;
    const [displayQuestionText,setDisplayQuestionText]=useState(true)
    
    const changeTextStateFalse=()=>{
        setDisplayQuestionText(false);
    }
    const changeTextStateTrue=()=>{
        setDisplayQuestionText(true);
    }
    const tagDiv= (tag !=="") ?<Tag TagName={tag}/>:null;  //タグがない場合はnullを返す

    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
    setIsOpen(true);
    }
   
    function closeModal() {
    setIsOpen(false);
    }
    
    return(
        <>  
            {/*<QuestionCardText text={text} css={css} tag={tag}/>*/}
            <div className={css}>
                <div className={"bg-white min-h-min pb-10 rounded "+props.heightAll}>
                    <div className="flex items-start border-b-2 border-b-slate-400 mx-1 text-center">
                        <p 
                            className="flex-1 text-teal-600 hover:bg-slate-200 cursor-pointer" 
                            onClick={changeTextStateTrue}>
                            問題
                        </p>
                        <p 
                            className="flex-1 text-teal-600 hover:bg-slate-200 hover cursor-pointer" 
                            onClick={changeTextStateFalse}>
                            解答
                        </p>
                    </div>
                    <div>
                        {displayQuestionText?
                            <h2 className={"flex items-center text-center border-none mx-4 "+props.heightLow}>
                                {questionText}
                            </h2>
                            :<h2 className={"flex text-sm items-center text-center mx-3 "+props.heightLow}>
                                {answerText}
                            </h2>
                        }
                        <div className="flex items-start border-t-2 border-t-slate-400 mx-1">
                            {tagDiv}
                            {/* <p className="flex text-sm p-2 m-1 text-left text-sky-600 m-1 p-2">レベル{props.Question.LearningLevel}</p> */}
                            <ToDetailBtn Path="/" Message="詳細へ" onClick={props.onClickAbout}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}