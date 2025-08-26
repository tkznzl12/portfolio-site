type Work = {
  title: string;
  workExplan: string[];
};

type Job = {
  projectName: string;
  job: string[];
};

export interface ProjectDataTypes {
  projectName: string;
  period: string;
  explanation: string;
  part: string;
  skill: string[];
  work: Work[];
  image: string[];
}

export interface ExperienceTypes {
  companyName: string;
  period: string;
  career: string;
  position: string;
  mainJob: Job[];
  skill: string[];
}
