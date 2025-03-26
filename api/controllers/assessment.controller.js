import {Assessment} from "../models/assessment.js";
import {missingParams} from "../services/responses.js";

const getAssessmentById = async (req, reply) => {
    const {assessmentId} = req.params;
    if (!assessmentId) return missingParams(reply, {assessmentId});

    const assessments = await Assessment.findBy("id", assessmentId);
    if (!assessments) {
        return reply.status(404).send({message: "Assessment not found"});
    }

    const assessment = assessments[0];
    if (!assessment) {
        return reply.status(404).send({message: "Assessment not found"});
    }

    if (assessment.attributes.user_id !== req.user.attributes.id) {
        return reply.status(403).send({message: "Unauthorized"});
    }

    return assessment;
};

export const createAssessment = async (req, reply) => {
    await Assessment.deleteOldAssessments();

    const {numberOfQuestions = 10, categories = [], useNewProgram = true} = req.body;

    if (categories.length === 0) {
        return missingParams(reply, {categories});
    }

    const assessment = new Assessment({
        user_id: req.user.attributes.id,
        competences: categories // Map frontend categories to backend competences
    });
    await assessment.save();

    let challenges = [];
    for (let i = 0; i < numberOfQuestions; i++) {
        const challenge = await assessment.addRandomChallenge(useNewProgram);
        if (challenge instanceof Error) {
            console.log(challenge.message);
            break;
        }
        challenges.push(challenge);
    }

    assessment.attributes.current_challenge_id = challenges[0]?.attributes.challenge_id;
    await assessment.save();

    return reply.send({id: assessment.id});
};

export const getAssessment = async (req, reply) => {
    const assessment = await getAssessmentById(req, reply);
    if (!assessment) return;

    const [currentChallenge] = await assessment.getCurrentChallenge() ?? [];
    if (!currentChallenge) {
        return reply.status(404).send({message: "No current challenge found"});
    }

    const progress = await assessment.getProgress();

    return reply.send({
        id: assessment.id,
        currentChallenge: {
            id: currentChallenge.id,
            question: currentChallenge.attributes.question,
            proposals: currentChallenge.attributes.proposals,
            image_url: currentChallenge.attributes.image_url,
        },
        progress
    });
};

export const submitAnswer = async (req, reply) => {
    const assessment = await getAssessmentById(req, reply);
    if (!assessment) return;

    const {answer} = req.body;
    if (!answer) return missingParams(reply, {answer});

    const nextChallenge = await assessment.submitAnswer(answer);

    if (nextChallenge === null) {
        return reply.send({success: true, is_done: true});
    }

    if (nextChallenge instanceof Error) {
        return reply.status(400).send({message: nextChallenge.message});
    }

    const progress = await assessment.getProgress();

    return reply.send({
        success: true,
        is_done: false,
        nextChallenge: {
            id: nextChallenge.id,
            question: nextChallenge.attributes.question,
            proposals: nextChallenge.attributes.proposals,
            image_url: nextChallenge.attributes.image_url,
        },
        progress
    });
};

export const getResults = async (req, reply) => {
    const assessment = await getAssessmentById(req, reply);
    if (!assessment) return;

    const results = await assessment.getProgress();

    return reply.send({
        id: assessment.id,
        results
    });
};

export const getAssessments = async (req, reply) => {
    const assessments = await Assessment.findBy("user_id", req.user.attributes.id);

    if (!assessments) {
        return reply.send({results: []});
    }

    const results = await Promise.all(assessments.map(async assessment => {
        const progress = await assessment.getProgress(false);
        return {
            id: assessment.id,
            date: assessment.attributes.created_at,
            type: "exam",
            progress
        };
    }));

    return reply.send({
        results
    });
}

export const deleteAssessment = async (req, reply) => {
    const assessment = await getAssessmentById(req, reply);
    if (!assessment) return;

    await assessment.delete();
    return reply.send({success: true});
};
