import {Assessment} from "../models/assessment.js";
import {missingParams} from "../services/responses.js";

export const createAssessment = async (req, reply) => {
    const assessment = new Assessment({
        user_id: req.user.attributes.id
    });
    await assessment.save();

    const numberOfChallenges = 100;
    // const numberOfChallenges = 5;
    let challenges = [];
    for (let i = 0; i < numberOfChallenges; i++) {
        const challenge = await assessment.addRandomChallenge();
        if (challenge instanceof Error) {
            console.log(challenge.message);
            break
        }
        challenges.push(challenge);
    }

    assessment.attributes.current_challenge_id = challenges[0].attributes.challenge_id;
    await assessment.save();

    return reply.send({
        id: assessment.id
    });
}

export const getAssessment = async (req, reply) => {
    const assessmentId = parseInt(req.params.assessmentId);
    const [assessment] = await Assessment.findBy("id", assessmentId);

    if (!assessment) {
        return reply.status(404).send({message: "Assessment not found"});
    }

    const [currentChallenge] = (await assessment.getCurrentChallenge()) ?? [];

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
        progress: progress
    });
}

export const submitAnswer = async (req, reply) => {
    const assessmentId = parseInt(req.params.assessmentId);
    const [assessment] = await Assessment.findBy("id", assessmentId);

    if (!assessment) {
        return reply.status(404).send({message: "Assessment not found"});
    }

    const answer = req.body.answer

    if (!answer) {
        return missingParams(reply, {answer});
    }

    const nextChallenge = await assessment.submitAnswer(answer);

    if (nextChallenge === null) {
        return reply.send({success: true, is_done: true});
    }

    if (nextChallenge instanceof Error) {
        return reply.status(400).send({message: nextChallenge.message});
    }

    if (!nextChallenge.attributes) {
        return reply.status(404).send({message: "No next challenge found"});
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
        progress: progress
    });
}

export const getResults = async (req, reply) => {
    const assessmentId = parseInt(req.params.assessmentId);
    const [assessment] = await Assessment.findBy("id", assessmentId);

    if (!assessment) {
        return reply.status(404).send({message: "Assessment not found"});
    }

    const results = await assessment.getProgress();

    return reply.send({
        id: assessment.id,
        results: results
    });
}