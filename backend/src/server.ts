import express from "express";
import cors from "cors";
import UserRoutes from "./routes/user.routes"
import CategoryRoutes from "./routes/categoris.routes"
import QuestionRoutes from "./routes/questions.route"
import InterviewRoutes from "./routes/interview_session.route"
import AnswerRoutes from "./routes/answers.route"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes)
app.use("/category", CategoryRoutes)
app.use("/question", QuestionRoutes)
app.use("/interview", InterviewRoutes)
app.use("/answer", AnswerRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});