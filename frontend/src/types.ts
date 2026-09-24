export type users = {
    id:number,
    name:string,
    email:string,
    password:string,
    img:string,
    createdAT:Date,
    updatedAT:Date
}

export type category = {
    id: number,
    name: string,
    description:string,
    img:string,
    active:boolean,
}

export type question = {
    id: number,
    category_id:number,
    question:string,
    difficulty:string,
    answer:string
}

export type interview_session = {
    id:number,
    user_id:number,
    category_id:number,
    status: string,
    started_at:string,
    ended_at:string
}

export type interview_answers = {
    id:number,
    session_id:number,
    question_id:number,
    user_answer:string,
    score:number,
    feedback:string,
}

export type Interview_topic = {
    category_id:number | null,
    category_name:string,
    category_img:string,
    difficulty:string,
    difficulty_color:string,
    no_question:number | null,
    estimated_time:string
}