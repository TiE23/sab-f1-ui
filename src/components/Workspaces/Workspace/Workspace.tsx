import { useParams } from "react-router-dom";

export const Workspace = () => {
  const params = useParams();
  return <h1>{params.workspaceName}</h1>;

};
