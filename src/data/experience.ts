export interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    position: "AI / ML Intern",
    company: "Cynaris Solutions Private Limited",
    location: "Bangalore, India",
    duration: "11/2026 – Present",
    responsibilities: [
      "Contributing to the development, training, and evaluation of machine learning models for classification, regression, and Natural Language Processing (NLP) tasks using Python and relevant ML frameworks.",
      "Working on data preprocessing, cleaning, and exploratory data analysis to identify patterns, prepare datasets, and improve feature quality for machine learning workflows.",
      "Applying machine learning algorithms and techniques to build proof-of-concept AI solutions and evaluate model performance through relevant metrics.",
      "Documenting experiments, model evaluation results, and technical findings while participating in code reviews and knowledge-sharing activities."
    ]
  }
];
