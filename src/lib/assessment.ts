export interface Question {
  id: number;
  text: string;
}

export const gad7Questions: Question[] = [
  { id: 1, text: "Feeling nervous, anxious, or on edge" },
  { id: 2, text: "Not being able to stop or control worrying" },
  { id: 3, text: "Worrying too much about different things" },
  { id: 4, text: "Trouble relaxing" },
  { id: 5, text: "Being so restless that it's hard to sit still" },
  { id: 6, text: "Becoming easily annoyed or irritable" },
  { id: 7, text: "Feeling afraid as if something awful might happen" },
];

export const phq9Questions: Question[] = [
  { id: 1, text: "Little interest or pleasure in doing things" },
  { id: 2, text: "Feeling down, depressed, or hopeless" },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much" },
  { id: 4, text: "Feeling tired or having little energy" },
  { id: 5, text: "Poor appetite or overeating" },
  {
    id: 6,
    text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  },
  {
    id: 7,
    text: "Trouble concentrating on things, such as reading or watching television",
  },
  {
    id: 8,
    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  },
  {
    id: 9,
    text: "Thoughts that you would be better off dead or of hurting yourself in some way",
  },
];

export const answerOptions = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
];

export function getGAD7Severity(score: number): {
  level: string;
  description: string;
  color: string;
} {
  if (score <= 4) {
    return {
      level: "Minimal Anxiety",
      description:
        "Your responses suggest minimal anxiety symptoms. Continue practicing self-care and healthy coping strategies.",
      color: "text-sage",
    };
  }
  if (score <= 9) {
    return {
      level: "Mild Anxiety",
      description:
        "Your responses suggest mild anxiety. Consider monitoring your symptoms and exploring stress management techniques. A professional consultation may be helpful.",
      color: "text-muted-blue",
    };
  }
  if (score <= 14) {
    return {
      level: "Moderate Anxiety",
      description:
        "Your responses suggest moderate anxiety. A professional evaluation is recommended to explore treatment options that could help you feel better.",
      color: "text-sand",
    };
  }
  return {
    level: "Severe Anxiety",
    description:
      "Your responses suggest significant anxiety symptoms. We strongly encourage you to seek professional support. Effective treatments are available.",
    color: "text-red-400",
  };
}

export function getPHQ9Severity(score: number): {
  level: string;
  description: string;
  color: string;
} {
  if (score <= 4) {
    return {
      level: "Minimal Depression",
      description:
        "Your responses suggest minimal depressive symptoms. Continue nurturing your well-being with healthy routines and self-care.",
      color: "text-sage",
    };
  }
  if (score <= 9) {
    return {
      level: "Mild Depression",
      description:
        "Your responses suggest mild depressive symptoms. Monitoring your mood and considering a professional consultation may be beneficial.",
      color: "text-muted-blue",
    };
  }
  if (score <= 14) {
    return {
      level: "Moderate Depression",
      description:
        "Your responses suggest moderate depressive symptoms. A professional evaluation is recommended to discuss treatment approaches.",
      color: "text-sand",
    };
  }
  if (score <= 19) {
    return {
      level: "Moderately Severe Depression",
      description:
        "Your responses suggest moderately severe depressive symptoms. Professional support is strongly recommended. Effective treatments can make a meaningful difference.",
      color: "text-red-300",
    };
  }
  return {
    level: "Severe Depression",
    description:
      "Your responses suggest significant depressive symptoms. Please reach out to a mental health professional. You don't have to go through this alone.",
    color: "text-red-400",
  };
}
