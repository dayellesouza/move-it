import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json';

interface Challenge {    /* tipagem - typescript */
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {   /* tipagem - typescript */
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;

}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);      /*Variaveis*/
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];


        setActiveChallenge(challenge);
    }

    function resetChallenge() { /* Chamada quando o úsuario falhar */
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                experienceToNextLevel,      /* Retorno de informações */
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
            }}>
            {children}
        </ChallengesContext.Provider>

    );
}