import { useEffect, useState } from "react";
import { sampleQuestions } from "../data/sampleQuestionAndAnswer";
import { MiniQuestionCard } from "../molecules/MiniQuestionCard";

export const QuestionCardsTable=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [userCreatedCards,setUserCreatedCards]=useState(sampleQuestions);

    useEffect(()=>{
        //  ここでapiを読んでカードを取得する

        //とりあえず今はサンプルデータを入れておく
        //setUserCreatedCards(sampleQuestions)
    },[]);
    //"bg-slate-100 h-48 w-32 px-20 text-3xl flex items-center mb-10 leading-10"
    const css:string="bg-slate-100 h-48 w-32 px-20 text-3xl flex items-center mb-10 leading-10";
    return(
        <>
            {
                userCreatedCards.map((quesiton)=>{
                    return(<MiniQuestionCard text={quesiton.QuestionText} css={css}/>);
                })
            }
        </>
    );
}