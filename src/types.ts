type Work = {
  title: string;
  workExplan: string[];
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
